import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { StepIndicator } from '@/components/StepsIndicator/Step/StepIndicator';

export default function BankInfo() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100} // Ajuste a altura conforme necessário
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 mx-6">
          <StepIndicator currentStep={2} />

          <View className="flex-1 justify-center items-center">
            <Text className="text-h5 pt-8 text-lg font-bold">Dados Bancários</Text>
          </View>

          <View className="flex-row justify-between mt-4">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-[146px] h-[43px] bg-white border border-blue-500 rounded-md flex items-center justify-center"
            >
              <Text className="text-blue-500 text-center">Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
