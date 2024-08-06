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

interface SocialLoginButtonProps {
  description: string;
  isLoading?: boolean;
  onPress: () => void;
  type: IconType;
  hasIcon?: boolean;
}

const iconsMap: IconsMap = {
  google: googleIcon,
};

export function SocialLoginButton({
  description,
  isLoading = false,
  onPress,
  type,
  hasIcon = true,
  ...rest
}: SocialLoginButtonProps) {
  return (
    <TouchableHighlight disabled={isLoading} onPress={onPress} {...rest}>
      <View className="bg-[#CB3F24] flex flex-row items-center p-0.5 rounded h-[40px] w-full">
        {isLoading ? (
          <View className="items-center flex-1">
            <ActivityIndicator size="small" color="#fff" />
          </View>
        ) : (
          <View className="relative flex-row items-center flex-1">
            {hasIcon && (
              <View className="absolute flex items-center justify-center w-10 h-full rounded-tl rounded-bl bg-primaryLight">
                <Image className="w-[26] h-[26]" source={iconsMap[type]} />
              </View>
            )}

            <View className="justify-center flex-1">
              <Text className="text-center text-small text-light">{description}</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
}
