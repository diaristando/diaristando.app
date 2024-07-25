import { useAuth, useOAuth, useUser } from '@clerk/clerk-expo';
import * as Link from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { SocialLoginButton } from '@/components/SocialLoginButton';

const loginSocialImage = require('../assets/images/diaristando-image-login-social.png');

WebBrowser.maybeCompleteAuthSession();

export function SocialLogin() {
  const { user } = useUser();
  const { isSignedIn, signOut } = useAuth();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const googleOAuth = useOAuth({ strategy: 'oauth_google' });

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const redirectUrl = Link.createURL('/');
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl });

      if (oAuthFlow.authSessionResult?.type === 'success') {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
      }
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

  return (
    <View className="flex-1 bg-primaryLight">
      <View className="mx-6 py-12 ">
        <View className="flex items-center justify-center">
          <Image className="w-[100] h-[100]" source={loginSocialImage} resizeMode="cover" />
          <Text className="text-[57px] font-bold text-primary">Diaristando</Text>
        </View>
        <Text className="text-h6 text-primaryDark text-center">
          Te ajudando a conquistar sua independência!
        </Text>

        <View className="mt-16">
          {isSignedIn && (
            <View className="my-4 ">
              <Text className="text-sm text-primaryDark text-center">
                Olá, {user?.fullName} - {user?.emailAddresses[0].emailAddress}
              </Text>
            </View>
          )}
          {isSignedIn ? (
            <SocialLoginButton
              description="Sair"
              onPress={signOut}
              type="google"
              isLoading={isLoading}
              hasIcon={false}
            />
          ) : (
            <SocialLoginButton
              description="Continuar com Google"
              onPress={handleGoogleLogin}
              type="google"
              isLoading={isLoading}
            />
          )}
        </View>
      </View>
    </View>
  );
}
