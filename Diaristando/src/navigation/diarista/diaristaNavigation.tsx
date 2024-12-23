import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TabRoutes } from './routes/tabsRoutes';

import { FeedbackService } from '@/screens/FeedbackService/FeedbackService';

export type DiaristaRootStackParamList = {
    DiaristaTab: { screen: 'Services' | 'Home' | 'Search' | 'Profile' };
    Feedback: {
        update: boolean;
    };
};

const DiaristaNavigation = createNativeStackNavigator<DiaristaRootStackParamList>();

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
            <DiaristaNavigation.Screen name="Feedback" component={FeedbackService} />
        </DiaristaNavigation.Navigator>
    );
}
