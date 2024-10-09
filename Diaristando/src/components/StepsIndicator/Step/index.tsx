import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

export function Index({ currentStep, totalSteps }: StepIndicatorProps) {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      {steps.map((step) => (
        <View key={step} style={styles.stepContainer}>
          <Text
            style={[
              styles.stepText,
              currentStep === step ? styles.activeStepText : styles.inactiveStepText,
            ]}
          >
            {`Etapa ${step}`}
          </Text>
          <View
            style={[
              styles.stepIndicator,
              currentStep === step ? styles.activeStepIndicator : styles.inactiveStepIndicator,
            ]}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 16,
  },
  stepContainer: {
    alignItems: 'center',
    flex: 1,
  },
  stepText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activeStepText: {
    color: '#0070f3',
  },
  inactiveStepText: {
    color: '#A0A0A0',
  },
  stepIndicator: {
    height: 8,
    borderRadius: 9999,
    width: 40,
    marginTop: 8,
  },
  activeStepIndicator: {
    backgroundColor: '#0070f3',
  },
  inactiveStepIndicator: {
    backgroundColor: '#A0A0A0',
  },
});
