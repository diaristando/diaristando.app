import { Text, View } from 'react-native';

export interface StepComoFuncionaProps {
  step: string;
  description: string;
}

export function StepComoFunciona({ step, description }: StepComoFuncionaProps) {
  return (
    <View className="border-2 border-primary p-2 rounded-lg flex-row gap-2 items-center ">
      <View className="p-2 bg-primary rounded-full items-center justify-center aspect-square">
        <Text className="text-h5 font-bold leading-tight text-white">{step}</Text>
      </View>
      <Text className="text-small leading-snug flex-1">{description}</Text>
    </View>
  );
}
