import React from 'react';
import {
  TouchableHighlight,
  Text,
  ActivityIndicator,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';

const googleIcon = require('../../assets/images/google-icon.png');

type IconType = 'google' | 'facebook';
type IconsMap = { [key: string]: ImageSourcePropType };
type BackgroundMap = { [key: string]: string };

interface SocialLoginButtonProps {
  description: string;
  isLoading?: boolean;
  onPress: () => void;
  type: IconType;
}

const iconsMap: IconsMap = {
  google: googleIcon,
};

const backgroundMap: BackgroundMap = {
  google: '#CB3F24',
};

export function SocialLoginButton({
  description,
  isLoading = false,
  onPress,
  type,
  ...rest
}: SocialLoginButtonProps) {
  return (
    <TouchableHighlight disabled={isLoading} onPress={onPress} {...rest}>
      <View
        className={`bg-[${backgroundMap[type]}] flex flex-row items-center p-0.5 rounded h-10 w-full`}
      >
        {isLoading ? (
          <View className="flex-1 items-center">
            <ActivityIndicator size="small" color="#fff" />
          </View>
        ) : (
          <View className="flex-1 flex-row items-center relative">
            <View className="bg-primaryLight rounded-tl rounded-bl h-full w-10 items-center flex justify-center absolute">
              <Image className="w-[26] h-[26]" source={iconsMap[type]} />
            </View>
            <View className="flex-1 justify-center">
              <Text className="text-small text-light text-center">{description}</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
}
