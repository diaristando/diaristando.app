import { Image, Text, View } from 'react-native';

export function SocialLogin() {
  return (
    <View className="flex-1 mx-6 py-10">
      <View>
        <Image source={require('../../assets/diaristando-image.png')} />
        <Text>Login</Text>
      </View>
    </View>
  );
}
