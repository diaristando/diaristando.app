import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export interface StepComoFuncionaProps {
  step: string;
  children: React.ReactNode;
}

export function StepComoFunciona({ step, children }: StepComoFuncionaProps) {
  return (
    <View style={styles.container}>
      <View style={styles.stepCircle}>
        <Text style={styles.stepText}>{step}</Text>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#0070f3',
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0070f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    fontWeight: 'bold',
    lineHeight: 16,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
  },
});
