import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TabRoutes } from './routes/tabRoutes';

import { Signup } from '@/screens/LoginScreen/Signup';

const SignedOffStack = createNativeStackNavigator();

export type SignedOffRootStackParamList = {
  SignedOff: { screen: 'Home' | 'SocialLogin' };
  Signup: { email: string; fullName: string };
};

export default function SignedOffNavigator() {
  return (
    <SignedOffStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SignedOffStack.Screen
        name="SignedOff"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <SignedOffStack.Screen name="Signup" component={Signup} />
    </SignedOffStack.Navigator>
  );
}
