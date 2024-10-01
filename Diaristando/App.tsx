import { ClerkProvider } from '@clerk/clerk-expo';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Provider } from 'react-redux';

import AppNavigation from '@/navigation/appNavigation';
import tokenCache from '@/storage/token';
import { store } from '@/store';

import './config/translator';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

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
