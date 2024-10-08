import React from 'react';
import {
  TouchableHighlight,
  Text,
  ActivityIndicator,
  View,
  Image,
  ImageSourcePropType,
  StyleSheet,
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
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#fff" />
          </View>
        ) : (
          <View style={styles.contentContainer}>
            {hasIcon && (
              <View style={styles.iconContainer}>
                <Image style={styles.icon} source={iconsMap[type]} />
              </View>
            )}
            <View style={styles.textContainer}>
              <Text style={styles.text}>{description}</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CB3F24',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0.5,
    borderRadius: 8,
    height: 40,
    width: '100%',
  },
  loadingContainer: {
    alignItems: 'center',
    flex: 1,
  },
  contentContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#DBEAFE',
  },
  icon: {
    width: 26,
    height: 26,
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
