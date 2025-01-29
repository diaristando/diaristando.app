import { Feather, Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';

import { LoginPromptModal } from '@/components/CardGuest';
import { Home } from '@/screens/HomeScreen/Home';
import { Service } from '@/screens/ServiceScreen/Profile';
import { Search } from '@/screens/Search/Search';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
    const [isLoginPromptVisible, setLoginPromptVisible] = useState(false);

    const handleTabPress = (route: string) => {
        if (route !== 'Home') {
            setLoginPromptVisible(true);
            return false;
        }
        return true;
    };

    return (
        <>
            <LoginPromptModal
                isVisible={isLoginPromptVisible}
                onRequestClose={() => setLoginPromptVisible(false)}
                targetRoute="SocialLogin"
            />

            <Tab.Navigator
                initialRouteName="Home"
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
                            <MaterialCommunityIcons name="vacuum-outline" size={24} color={color} />
                        ),
                        tabBarLabel: 'Serviços',
                    }}
                    listeners={{
                        tabPress: (e) => {
                            if (!handleTabPress('Services')) {
                                e.preventDefault();
                            }
                        },
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
                    listeners={{
                        tabPress: (e) => {
                            if (!handleTabPress('Home')) {
                                e.preventDefault();
                            }
                        },
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons name="search-sharp" size={size} color={color} />
                        ),
                        tabBarLabel: 'Busca',
                    }}
                    listeners={{
                        tabPress: (e) => {
                            if (!handleTabPress('Search')) {
                                e.preventDefault();
                            }
                        },
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Service}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="user" size={size} color={color} />
                        ),
                        tabBarLabel: 'Perfil',
                    }}
                    listeners={{
                        tabPress: (e) => {
                            if (!handleTabPress('Profile')) {
                                e.preventDefault();
                            }
                        },
                    }}
                />
            </Tab.Navigator>
        </>
    );
}
