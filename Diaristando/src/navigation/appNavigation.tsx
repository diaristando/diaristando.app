import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { PersonalInfo } from '@/components/StepSignup/PersonalInfo';
import { Home } from '@/screens/HomeScreen/Home';
import { Signup } from '@/screens/LoginScreen/Signup';
import { SocialLogin } from '@/screens/SocialLogin';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SocialLogin" component={SocialLogin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
