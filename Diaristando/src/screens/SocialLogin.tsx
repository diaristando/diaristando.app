import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export function SocialLogin() {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View className="flex-1 bg-primaryLight">
      <View className="mx-6 py-12 ">
        <View className="flex items-center justify-center">
          <Image
            className="w-[100] h-[100]"
            source={require('../assets/images/diaristando-image-login-social.png')}
            resizeMode="cover"
          />
          <Text className="text-[57px] font-bold text-primary">Diaristando</Text>
        </View>
        <Text className="text-h6 text-primaryDark text-center">
          Te ajudando a conquistar sua independência!
        </Text>
        <View className="mt-16">
          <Pressable
            onPress={handlePress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            className={`bg-[#CB3F24] flex flex-row items-center p-[2px] rounded ${isPressed ? 'opacity-80' : 'opacity-100'}`}
          >
            <View className="bg-primaryLight p-2 mr-[38] rounded-tl rounded-bl">
              <Image
                className="w-[26] h-[26] "
                source={require('../assets/images/google-icon.png')}
              />
            </View>
            <Text className="text-small text-light">Continuar com Google</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
