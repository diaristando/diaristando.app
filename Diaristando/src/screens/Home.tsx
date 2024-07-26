import '@/styles/global.css';
import '@/../config/translator';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { Separator } from '../components/Separator';
import { StepComoFunciona } from '../components/StepComoFunciona';

export function Home() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 mx-6 py-10">
      <View className="flex gap-2 pb-3">
        <Text className="text-h4 leading-[26.7px] font-bold text-primary">
          {t('h1-boas-vindas')}
        </Text>
        <Text className="text-small leading-[16.41px] font-bold text-dark1">
          {t('h2-boas-vindas')}
        </Text>
      </View>
      <Separator />
      <View className="flex gap-2 py-3">
        <Text className="text-[16px] leading-[18.75px] font-bold text-black">
          {t('h2-como-funciona')}
        </Text>
        <Text className="text-small leading-[18.2px] text-black">{t('p-como-funciona')}</Text>
        <View className="my-3 gap-2">
          <StepComoFunciona step="01">
            <Text className="text-small leading-[18.2px] flex-1 text-black">
              Cadastre-se facilmente via redes sociais.
            </Text>
          </StepComoFunciona>
          <StepComoFunciona step="02">
            <Text className="text-small leading-[18.2px] flex-1 text-black">
              Encontre clientes e agende os serviços.
            </Text>
          </StepComoFunciona>
          <StepComoFunciona step="03">
            <Text className="text-small leading-[18.2px] flex-1 text-black">
              No dia agendado, vá ao local do serviço e faça o check-in.
            </Text>
          </StepComoFunciona>
          <StepComoFunciona step="04">
            <Text className="text-small leading-[18.2px]  flex-1 text-black">
              Após o serviço realize o checkout, e{' '}
              <Text className="font-bold">receba em até 3 horas.</Text>
            </Text>
          </StepComoFunciona>
        </View>
      </View>
    </View>
  );
}
