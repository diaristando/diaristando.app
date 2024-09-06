import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';

import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
//import BankInfo from '@/components/StepSignup/BankInfo';
import { PersonalInfo } from '@/components/StepSignup/PersonalInfo';
import { StepIndicator } from '@/components/StepsIndicator/Step/StepIndicator';

export function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigation = useNavigation();

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      navigation.navigate('Home');
      console.log('Complete!');
    }
  };

  return (
    <View className="flex-1">
      <FocusAwareStatusBar backgroundColor="#ffffff" />
      {/* Usamos o componente StepIndicator com 2 etapas */}
      <StepIndicator currentStep={currentStep} totalSteps={1} />

      {/* Exibe o componente de Informações Pessoais ou Dados Bancários */}
      {currentStep === 1 && <PersonalInfo onNext={handleNextStep} />}

    </View>
  );
}
