import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useSelector } from 'react-redux';

import { Home } from '@/screens/HomeScreen/Home';
import UserProfile from '@/screens/ProfileScreen/Profile';
import { SocialLogin } from '@/screens/SocialLogin';
import { RootState } from '@/store';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        headerShown: false,
      }}
    >
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
      {isAuthenticated && (
        <Tab.Screen
          name="Profile"
          component={UserProfile}
          options={{
            tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
            tabBarLabel: 'Perfil',
          }}
        />
      )}
    </Tab.Navigator>
  );
}
