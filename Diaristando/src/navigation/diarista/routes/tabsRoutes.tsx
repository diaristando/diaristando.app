import { Feather } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Home } from '@/screens/HomeScreen/Home';
import Profile from '@/screens/ServiceScreen/Profile';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F9FAFB',
          borderTopWidth: 0,
          height: 60,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Services"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="vacuum-outline" size={size} color={color} />
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
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
          tabBarLabel: 'Perfil',
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}
