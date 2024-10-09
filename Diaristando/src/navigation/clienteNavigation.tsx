import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Home } from '@/screens/HomeScreen/Home';

const ClienteNavigation = createNativeStackNavigator();

export default function ClienteNavigator() {
  return (
    <ClienteNavigation.Navigator>
      <ClienteNavigation.Screen name="Home" component={Home} />
    </ClienteNavigation.Navigator>
  );
}
