import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';

import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { PersonalInfo } from '@/components/StepSignup/PersonalInfo';
import { StepIndicator } from '@/components/StepsIndicator/Step/StepIndicator';

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigation = useNavigation();

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      navigation.navigate('PersonalInfo' as never);
      console.log('Complete!');
    }
  };

  return (
    <View className="flex-1">
      <FocusAwareStatusBar backgroundColor="#ffffff" />
      <StepIndicator currentStep={currentStep} totalSteps={1} />
      {currentStep === 1 && <PersonalInfo onNext={handleNextStep} />}
    </View>
  );
}
