import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Info() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('Home');
  };
  return (
    <View className="flex-1 justify-center items-center p-4 bg-white">
      <Text className="text-xl font-bold mb-4 text-primary">{t('text.componentInfo.title')}</Text>
      <Text className="text-base text-center mb-4 text-gray-700">
        {t('text.componentInfo.description')}
      </Text>
      <Text className="text-sm text-center mb-6 text-gray-500">
        {t('text.componentInfo.guidance')}
      </Text>
      <View className="w-full flex-row justify-between">
        <TouchableOpacity onPress={handleContinue} className="bg-primary w-[45%] p-3 rounded-lg">
          <Text className="text-white text-center">{t('button.proceed')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
