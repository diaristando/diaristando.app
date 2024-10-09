import '../../../config/translator';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, StyleSheet } from 'react-native';

import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Separator } from '@/components/Separator';
import { StepComoFunciona } from '@/components/StepComoFunciona';

export function Home() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor="#ffffff" />
      <View style={styles.header}>
        <Text style={styles.title}>{t('h1-boas-vindas')}</Text>
        <Text style={styles.subtitle}>{t('h2-boas-vindas')}</Text>
        <Separator />
        <View style={styles.content}>
          <Text style={styles.heading}>{t('h2-como-funciona')}</Text>
          <Text style={styles.paragraph}>{t('p-como-funciona')}</Text>
          <View style={styles.stepsContainer}>
            <StepComoFunciona step="01">
              <Text style={styles.stepText}>Cadastre-se facilmente via redes sociais.</Text>
            </StepComoFunciona>
            <StepComoFunciona step="02">
              <Text style={styles.stepText}>Encontre clientes e agende os serviços.</Text>
            </StepComoFunciona>
            <StepComoFunciona step="03">
              <Text style={styles.stepText}>
                No dia agendado, vá ao local do serviço e faça o check-in.
              </Text>
            </StepComoFunciona>
            <StepComoFunciona step="04">
              <Text style={styles.stepText}>
                Após o serviço realize o checkout, e{' '}
                <Text style={styles.boldText}>receba em até 3 horas.</Text>
              </Text>
            </StepComoFunciona>
          </View>
        </View>
      </View>
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
    color: '#0070f3',
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
  boldText: {
    fontWeight: 'bold',
  },
});
