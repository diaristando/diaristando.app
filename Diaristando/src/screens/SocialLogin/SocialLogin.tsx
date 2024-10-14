import { useAuth, useOAuth, useUser } from '@clerk/clerk-expo';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import * as Link from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch } from 'react-redux';

import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { CustomModal } from '@/components/Modal';
import { SocialLoginButton } from '@/components/SocialLoginButton';
import { SignedOffRootStackParamList } from '@/navigation/visitante/signedOffNavigation';
import { clearUser } from '@/store/slices/userSlice';

const successLogin = require('../../assets/animations/success.json');
const loginSocialImage = require('../../assets/images/diaristando-image-login-social.png');

WebBrowser.maybeCompleteAuthSession();

const currentYear = new Date().getFullYear();

type SocialLoginNavigationProp = NavigationProp<SignedOffRootStackParamList, 'Signup'>;

export function SocialLogin() {
  const animation = useRef<LottieView>(null);
  const dispatch = useDispatch();
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
      dispatch(clearUser());
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
      navigation.getParent()?.navigate('Signup', {
        email: user.emailAddresses[0].emailAddress,
        fullName: user.fullName || '',
      });
    }, 3000);
  }, [user, tempTrigger]);

  return (
    <>
      <View style={styles.container}>
        <FocusAwareStatusBar barStyle="light-content" backgroundColor="#DBEAFE" />
        <CustomModal
          isOpen={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
          }}
          duration={3000}
        >
          <View style={styles.modalContent}>
            <LottieView
              autoPlay
              ref={animation}
              style={styles.lottieAnimation}
              source={successLogin}
              loop={false}
            />
            <Text style={styles.successMessage}>Login realizado com sucesso!</Text>
          </View>
        </CustomModal>
        <View>
          <View style={styles.logoContainer}>
            <Image style={styles.loginImage} source={loginSocialImage} resizeMode="cover" />
            <Text style={styles.appTitle}>Diaristando</Text>
          </View>
          <Text style={styles.tagline}>Te ajudando a conquistar sua independência!</Text>
        </View>
        <View style={styles.buttonsContainer}>
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
            <Text style={styles.errorText}>Falha ao realizar login. Tente novamente.</Text>
          )}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Diaristando {currentYear}
          {'\n'}
          Todos os direitos reservados. v 0.0.1
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    backgroundColor: '#DBEAFE',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 8,
  },
  lottieAnimation: {
    width: 149,
    height: 133,
  },
  successMessage: {
    fontSize: RFValue(16, 800),
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginImage: {
    width: 100,
    height: 100,
  },
  appTitle: {
    fontSize: RFValue(57, 800),
    fontWeight: 'bold',
    color: '#1D4ED8',
  },
  tagline: {
    fontSize: RFValue(18, 800),
    textAlign: 'center',
    color: '#172554',
    paddingHorizontal: 32,
  },
  buttonsContainer: {
    marginTop: 64,
  },
  errorText: {
    fontSize: RFValue(14, 800),
    color: '#FF0000',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 52,
    borderTopWidth: 1,
    borderTopColor: '#BEBDBD',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  footerText: {
    fontSize: RFValue(14, 800),
    color: '#8E8E8E',
    textAlign: 'center',
  },
});
