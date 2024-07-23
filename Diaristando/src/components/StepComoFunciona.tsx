import { Text, View } from 'react-native';

export interface StepComoFuncionaProps {
  step: string;
  children: React.ReactNode;
}

export function StepComoFunciona({ step, children }: StepComoFuncionaProps) {
  return (
    <View className="border-2 border-primary p-2 rounded-lg flex-row gap-2 items-center ">
      <View className="p-2 bg-primary rounded-full items-center justify-center aspect-square">
        <Text className="text-h5 font-bold leading-tight text-white">{step}</Text>
      </View>
      {children}
    </View>
  );
}
