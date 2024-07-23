import '../styles/global.css';
import '../../config/translator';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { Separator } from '../components/Separator';
import { StepComoFunciona } from '../components/StepComoFunciona';

export function Home() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 mx-6 py-10">
      <View className="flex gap-2 pb-3">
        <Text className="text-h4 font-bold text-primary">{t('h1-boas-vindas')}</Text>
        <Text className="text-small font-bold text-dark1">{t('h2-boas-vindas')}</Text>
      </View>
      <Separator />
      <View className="flex gap-2 py-3">
        <Text className="text-base font-bold text-dark1">{t('h2-como-funciona')}</Text>
        <Text className="text-small text-dark1">{t('p-como-funciona')}</Text>
        <View className="my-3 gap-2">
          <StepComoFunciona step="01" description="Cadastre-se facilmente via redes sociais" />
          <StepComoFunciona
            step="02"
            description="Encontre clientes e agende os serviços.
"
          />
          <StepComoFunciona
            step="03"
            description="No dia agendado, vá ao local do serviço e faça o check-in."
          />
          <StepComoFunciona
            step="04"
            description="Após o serviço realize o checkout, e receba em até 3 horas."
          />
        </View>
      </View>
    </View>
  );
}
