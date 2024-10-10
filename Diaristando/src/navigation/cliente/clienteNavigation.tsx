import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TabRoutes } from './routes/tabRoutes';

const ClienteNavigation = createNativeStackNavigator();

export default function ClienteNavigator() {
  return (
    <ClienteNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ClienteNavigation.Screen
        name="Home"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </ClienteNavigation.Navigator>
  );
}
