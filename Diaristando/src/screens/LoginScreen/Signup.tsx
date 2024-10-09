import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { PersonalInfo } from '@/components/StepSignup/PersonalInfo';
import { Index } from '@/components/StepsIndicator/Step';
import { RootStackParamList } from '@/navigation/appNavigation';

type SignupRouterProp = RouteProp<RootStackParamList, 'Signup'>;

const renderStep = (currentStep: number, props: { email: string; fullName: string }) => {
  switch (currentStep) {
    case 1:
      return <PersonalInfo email={props.email} fullName={props.fullName} />;
    default:
      return null;
  }
};

export function Signup() {
  const route = useRoute<SignupRouterProp>();
  const { email, fullName } = route.params || { email: '', fullName: '' };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
    >
      <FocusAwareStatusBar backgroundColor="#ffffff" />
      <View style={styles.indexContainer}>
        <Index currentStep={1} totalSteps={1} />
      </View>
      {renderStep(1, { email, fullName })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
  },
  indexContainer: {
    marginVertical: 16,
  },
});
