import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Home } from '@/screens/HomeScreen/Home';

const DiaristaNavigation = createNativeStackNavigator();

export default function DiaristaNavigator() {
  return (
    <DiaristaNavigation.Navigator>
      <DiaristaNavigation.Screen name="Home" component={Home} />
    </DiaristaNavigation.Navigator>
  );
}
