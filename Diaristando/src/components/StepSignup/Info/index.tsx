import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Info() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('text.componentInfo.title')}</Text>
      <Text style={styles.description}>{t('text.componentInfo.description')}</Text>
      <Text style={styles.guidance}>{t('text.componentInfo.guidance')}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleContinue} style={styles.button}>
          <Text style={styles.buttonText}>{t('button.proceed')}</Text>
        </TouchableOpacity>
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0070f3',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#4A4A4A',
  },
  guidance: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    color: '#A0A0A0',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#0070f3',
    width: '45%',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
