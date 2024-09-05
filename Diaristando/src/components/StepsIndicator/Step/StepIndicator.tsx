import React from 'react';
import { View, Text } from 'react-native';

export function StepIndicator({ currentStep }) {
  return (
    <View className="flex-row justify-between items-center mb-4 text-small p-3">
      <View className="flex-1 items-center">
        <Text
          className={`text-lg font-bold ${currentStep === 1 ? 'text-primary' : 'text-gray'}`}
        >
          Etapa 1
        </Text>
        <View
          className={`h-2 rounded-full w-full mt-2 ${currentStep === 1 ? 'bg-primary' : 'bg-gray'}`}
        />
      </View>
      <View className="w-4" />
      <View className="flex-1 items-center">
        <Text
          className={`text-lg font-bold ${currentStep === 2 ? 'text-primary' : 'text-gray'}`}
        >
          Etapa 2
        </Text>
        <View
          className={`h-2 rounded-full w-full mt-2 ${currentStep === 2 ? 'bg-primary' : 'bg-gray'}`}
        />
      </View>
    </View>
  );
}
