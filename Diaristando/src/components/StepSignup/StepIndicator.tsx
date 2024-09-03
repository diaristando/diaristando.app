import React from 'react';
import { View, Text } from 'react-native';

export function StepIndicator({ currentStep }) {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <View className="flex-1 items-center">
        <Text
          className={`text-lg font-bold ${currentStep === 1 ? 'text-blue-600' : 'text-gray-400'}`}
        >
          Etapa 1
        </Text>
        <View
          className={`h-2 rounded-full w-full mt-2 ${currentStep === 1 ? 'bg-blue-600' : 'bg-gray-300'}`}
        />
      </View>
      <View className="w-4" />
      <View className="flex-1 items-center">
        <Text
          className={`text-lg font-bold ${currentStep === 2 ? 'text-blue-600' : 'text-gray-400'}`}
        >
          Etapa 2
        </Text>
        <View
          className={`h-2 rounded-full w-full mt-2 ${currentStep === 2 ? 'bg-blue-600' : 'bg-gray-300'}`}
        />
      </View>
    </View>
  );
}
