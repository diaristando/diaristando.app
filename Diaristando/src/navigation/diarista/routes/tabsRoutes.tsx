import { Feather } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Home } from '@/screens/HomeScreen/Home';
import ServiceProfile from '@/screens/ServiceScreen/Service';
import { SocialLogin } from '@/screens/SocialLogin/SocialLogin';

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
        component={ServiceProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="cleaning-services" size={size} color={color} />
          ),
          tabBarLabel: 'Serviços',
        }}
      />
      <Tab.Screen
        name="DiaristaTab"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="LogoutTab"
        component={SocialLogin}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="log-out" size={size} color={color} />,
          tabBarLabel: 'Logout',
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}
