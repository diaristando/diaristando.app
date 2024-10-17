import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export interface StepsCardProps {
  step: string;
  children: React.ReactNode;
}

export function StepsCard({ step, children }: StepsCardProps) {
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
    borderColor: '#1D4ED8',
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1D4ED8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#DBEAFE',
    fontSize: 20,
  },
});
