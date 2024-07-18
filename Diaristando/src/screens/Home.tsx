import '../styles/global.css';

import { Text, View } from 'react-native';

import { Separator } from '../components/Separator';

export function Home() {
  return (
    <View className="flex-1 mx-6 py-10">
      <View className="flex gap-2 pb-3">
        <Text className="text-h4 font-bold text-primary">Boas vindas ao Diaristando!</Text>
        <Text className="text-small font-bold text-dark1">
          Te ajudando a conquistar sua independência!
        </Text>
      </View>
      <Separator />
    </View>
  );
}
