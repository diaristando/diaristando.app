import { ClerkProvider } from '@clerk/clerk-expo';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigation from '@/navigation/appNavigation';
import tokenCache from '@/storage/token';
import { store } from '@/store';

import './config/translator';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function App() {
    const [, setExpoPushToken] = useState('');
    const [, setChannels] = useState<Notifications.NotificationChannel[]>([]);
    const [, setNotification] = useState<Notifications.Notification | undefined>(undefined);
    const notificationListener = useRef<Notifications.Subscription>();
    const responseListener = useRef<Notifications.Subscription>();

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
    });

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });

    useEffect(() => {
        registerForPushNotificationsAsync().then((token) => token && setExpoPushToken(token));

        if (Platform.OS === 'android') {
            // TODO: Make the typation later
            Notifications.getNotificationChannelsAsync().then((value: any) =>
                setChannels(value ?? []),
            );
        }

        notificationListener.current = Notifications.addNotificationReceivedListener(
            (notification: Notifications.Notification | undefined) => {
                setNotification(notification);
            },
        );

        responseListener.current = Notifications.addNotificationResponseReceivedListener(
            // TODO: Make the typation later
            (response: any) => {
                console.log(JSON.stringify(response));
            },
        );

        return () => {
            notificationListener.current &&
                Notifications.removeNotificationSubscription(notificationListener.current);
            responseListener.current &&
                Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    if (!fontsLoaded) {
        return <></>;
    }

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        </ClerkProvider>
    );
}

async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }

        try {
            const projectId =
                Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;

            if (!projectId) {
                throw new Error('Project ID not found');
            }

            token = (
                await Notifications.getExpoPushTokenAsync({
                    projectId,
                })
            ).data;

            console.log(token);
        } catch (e) {
            token = `${e}`;
        }
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}
