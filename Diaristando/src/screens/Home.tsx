import '../styles/global.css';
import '../../config/translator';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { Separator } from '../components/Separator';

export function Home() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 mx-6 py-10">
      <View className="flex gap-2 pb-3">
        <Text className="text-h4 font-bold text-primary">{t('h1-boas-vindas')}</Text>
        <Text className="text-small font-bold text-dark1">{t('h2-boas-vindas')}</Text>
      </View>
      <Separator />
    </View>
  );
}
