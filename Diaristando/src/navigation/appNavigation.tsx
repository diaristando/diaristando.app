import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TabRoutes } from './tabRoutes';

import { PersonalInfo } from '@/components/StepSignup/PersonalInfo';
import { Signup } from '@/screens/LoginScreen/Signup';

export type RootStackParamList = {
  SignedOff: { screen: 'Home' | 'SocialLogin' };
  Signup: undefined;
  SocialLogin: undefined;
  PersonalInfo: { email: string; nomeCompleto: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignedOff" component={TabRoutes} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
