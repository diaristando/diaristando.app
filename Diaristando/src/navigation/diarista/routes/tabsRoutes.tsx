import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { FeedbackService } from '@/screens/FeedbackService/FeedbackService';
import { Home } from '@/screens/HomeScreen/Home';
import { Profile } from '@/screens/ProfileScreen/Profile';
import { Service } from '@/screens/ServiceScreen/Profile';

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
                component={Service}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="vacuum-outline" size={24} color={color} />
                    ),
                    tabBarLabel: 'Serviços',
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    tabBarLabel: 'Início',
                }}
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" size={size} color={color} />
                    ),
                    tabBarLabel: 'Busca',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                    tabBarLabel: 'Perfil',
                }}
            />
            <Tab.Screen
                name="Feedback"
                component={FeedbackService}
                options={{ tabBarButton: () => null }}
            />
        </Tab.Navigator>
    );
}
