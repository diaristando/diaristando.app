import React from 'react';
import { View, Text } from 'react-native';

export class StepIndicator extends React.Component<{ currentStep: any; totalSteps: any }> {
  render() {
    const { currentStep, totalSteps } = this.props;
    const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

    return (
      <View className="flex-row items-center justify-between p-3 mb-4 text-small">
        {steps.map((step) => (
          <View key={step} className="items-center flex-1">
            <Text
              className={`text-lg font-bold ${currentStep === step ? 'text-primary' : 'text-gray'}`}
            >
              {`Etapa ${step}`}
            </Text>
            <View
              className={`h-2 rounded-full w-40 mt-2 ${
                currentStep === step ? 'bg-primary' : 'bg-gray'
              }`}
            />
          </View>
        ))}
      </View>
    );
  }
}
