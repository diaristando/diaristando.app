import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@/screens/HomeScreen/Home';
import { SocialLogin } from '@/screens/SocialLogin';

const SignedOffStack = createNativeStackNavigator();

export default function SignedOffNavigator() {
  return (
    <SignedOffStack.Navigator>
      <SignedOffStack.Screen name="Home" component={Home} />
      <SignedOffStack.Screen name="SocialLogin" component={SocialLogin} />
    </SignedOffStack.Navigator>
  );
}
