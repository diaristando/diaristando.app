import '../styles/global.css';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export function Inicio() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 items-center justify-center gap-6 bg-primaryMedium">
      <Text className="text-h1 font-bold text-secondaryLight">Diaristando Roboto Bold</Text>
      <Text className="text-h3 font-bold text-secondaryLight">Diaristando Roboto Regular</Text>
      <StatusBar style="auto" />
    </View>
  );
}
