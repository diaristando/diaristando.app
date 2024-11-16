import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TabRoutes } from './routes/tabsRoutes';

const DiaristaNavigation = createNativeStackNavigator();

export type DiaristaRootStackParamList = {
  DiaristaTab: { screen: 'Services' | 'Home' | 'Search' | 'Service' };
};

export default function DiaristaNavigator() {
  return (
    <DiaristaNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DiaristaNavigation.Screen
        name="DiaristaTab"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </DiaristaNavigation.Navigator>
  );
}
