import '../../../config/translator';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, StyleSheet } from 'react-native';

import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Separator } from '@/components/Separator';
import { StepsCard } from '@/components/StepsCard';
import ServiceScreen from '@/screens/HomeScreen/components/ServiceSection/Service';

export function Home() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.header}>
        <Text style={styles.title}>{t('h1-boas-vindas')}</Text>
        <Text style={styles.subtitle}>{t('h2-boas-vindas')}</Text>
        <Separator />
        <View style={styles.content}>
          <Text style={styles.heading}>{t('h2-como-funciona')}</Text>
          <Text style={styles.paragraph}>{t('p-como-funciona')}</Text>
          <View style={styles.stepsContainer}>
            <StepsCard step="01">
              <Text style={styles.stepText}>Cadastre-se facilmente via rede social.</Text>
            </StepsCard>
            <StepsCard step="02">
              <Text style={styles.stepText}>
                Encontre clientes ou diaristas de acordo com sua localização.
              </Text>
            </StepsCard>
            <StepsCard step="03">
              <Text style={styles.stepText}>
                Registre os serviços no app e gerencie o agendamento pelo aplicativo.
              </Text>
            </StepsCard>
            <StepsCard step="04">
              <Text style={styles.stepText}>Forneça o feedback sobre o serviço.</Text>
            </StepsCard>
          </View>
        </View>
      </View>
      <ServiceScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  header: {
    flex: 1,
    gap: 8,
    paddingBottom: 12,
  },
  title: {
    fontSize: 24,
    lineHeight: 26.7,
    fontWeight: 'bold',
    color: '#1D4ED8',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 16.41,
    fontWeight: 'bold',
    color: '#333333',
  },
  content: {
    flex: 1,
    gap: 8,
    paddingVertical: 12,
  },
  heading: {
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 'bold',
    color: '#000000',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 18.2,
    color: '#000000',
  },
  stepsContainer: {
    gap: 8,
    marginVertical: 12,
  },
  stepText: {
    fontSize: 14,
    lineHeight: 18.2,
    flex: 1,
    color: '#000000',
  },
});
