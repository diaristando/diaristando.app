import { useAuth, useOAuth, useUser } from '@clerk/clerk-expo';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import * as Link from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { CustomModal } from '@/components/Modal';
import { SocialLoginButton } from '@/components/SocialLoginButton';
import { RootStackParamList } from '@/navigation/appNavigation';

const successLogin = require('../assets/animations/success.json');
const loginSocialImage = require('../assets/images/diaristando-image-login-social.png');

WebBrowser.maybeCompleteAuthSession();

const currentYear = new Date().getFullYear();

type SocialLoginNavigationProp = NavigationProp<RootStackParamList, 'SocialLogin'>;

export function SocialLogin() {
  const animation = useRef<LottieView>(null);
  const { user } = useUser();
  const { isSignedIn, signOut } = useAuth();
  const navigation = useNavigation<SocialLoginNavigationProp>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [tempTrigger, setTempTrigger] = useState<boolean>(false);

  const googleOAuth = useOAuth({ strategy: 'oauth_google' });

  const handleGoogleLogin = async () => {
    try {
      setErrorLogin(false);
      setIsLoading(true);
      const redirectUrl = Link.createURL('/');
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });

      if (
        oAuthFlow.authSessionResult?.type === 'success' &&
        !!oAuthFlow.createdSessionId &&
        oAuthFlow.setActive
      ) {
        await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        setIsModalVisible(true);
        console.log('Login realizado com sucesso!');
        setTempTrigger(true);
        animation.current?.play();
      }
      setIsLoading(false);
    } catch (error) {
      setErrorLogin(true);
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleSignout = async () => {
    try {
      setIsLoading(true);
      await signOut();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  useEffect(() => {
    if (!user || !tempTrigger) return;
    setTimeout(() => {
      setIsModalVisible(false);
      navigation.navigate('PersonalInfo', {
        email: user.emailAddresses[0].emailAddress,
        nomeCompleto: user.fullName || '',
      });
    }, 3000);
  }, [user, tempTrigger]);

  return (
    <>
      <View className="flex-1 px-6 pt-10 bg-primaryLight">
        <FocusAwareStatusBar barStyle="light-content" backgroundColor="#DBEAFE" />
        <CustomModal
          isOpen={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
          }}
          duration={3000}
        >
          <View className="flex items-center justify-center w-full h-full gap-4 p-2">
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 149,
                height: 133,
              }}
              source={successLogin}
              loop={false}
            />
            <Text style={{ fontSize: RFValue(16, 800) }}>Login realizado com sucesso!</Text>
          </View>
        </CustomModal>
        <View>
          <View className="flex items-center justify-center">
            <Image className="w-[100] h-[100]" source={loginSocialImage} resizeMode="cover" />
            <Text style={{ fontSize: RFValue(57, 800) }} className="font-bold text-primary">
              Diaristando
            </Text>
          </View>
          <Text
            style={{ fontSize: RFValue(18, 800) }}
            className="px-8 text-center text-primaryDark"
          >
            Te ajudando a conquistar sua independência!
          </Text>
        </View>
        <View className="mt-16">
          {isSignedIn ? (
            <SocialLoginButton
              description={`Sair - ${user?.emailAddresses[0].emailAddress}`}
              onPress={handleSignout}
              type="google"
              isLoading={isLoading}
            />
          ) : (
            <SocialLoginButton
              description="Continuar com Google"
              onPress={handleGoogleLogin}
              type="google"
              isLoading={isLoading}
            />
          )}
          {errorLogin && (
            <Text style={{ fontSize: RFValue(14, 800) }} className="text-tertiaryDanger">
              Falha ao realizar login. Tente novamente.
            </Text>
          )}
        </View>
      </View>
      <View className="absolute bottom-0 flex items-center justify-center w-full p-2 h-[52px] border-t-[1px] border-[#BEBDBD]">
        <Text className="text-center text-[#8E8E8E]" style={{ fontSize: RFValue(14, 800) }}>
          Diaristando {currentYear}
          {'\n'}
          Todos os direitos reservados. v 0.0.1
        </Text>
      </View>
    </>
  );
}
