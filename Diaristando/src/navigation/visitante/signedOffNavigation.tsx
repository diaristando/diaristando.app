import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TabRoutes } from './routes/tabRoutes';

import { Signup } from '@/screens/LoginScreen/Signup';
import { SocialLogin } from '@/screens/SocialLogin/SocialLogin';
import { ChoicePerfil } from '@/screens/ChoicePerfil/ChoicePerfil';

const SignedOffStack = createNativeStackNavigator();

export type SignedOffRootStackParamList = {
    SignedOff: { screen: 'Home' | 'SocialLogin' | 'Services' | 'Search' | 'Profile' };
    choicePerfil: { email: string; fullName: string; imageUrl: string };
    Signup: { email: string; fullName: string; isToggled: string; imageUrl: string };
};

export default function SignedOffNavigator() {
    return (
        <SignedOffStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <SignedOffStack.Screen name="SignedOff" component={TabRoutes} />
            <SignedOffStack.Screen name="SocialLogin" component={SocialLogin} />
            <SignedOffStack.Screen name="choicePerfil" component={ChoicePerfil} />
            <SignedOffStack.Screen name="Signup" component={Signup} />
        </SignedOffStack.Navigator>
    );
}
