import { Feather } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Home } from '@/screens/HomeScreen/Home';
import Service from '@/screens/ServiceScreen/Profile';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Services"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="cleaning-services" size={size} color={color} />
          ),
          tabBarLabel: 'Serviços',
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="search" size={size} color={color} />,
          tabBarLabel: 'Busca',
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Service}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
          tabBarLabel: 'Perfil',
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}
