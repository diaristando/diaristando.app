import { Text, View } from 'react-native';

export interface StepComoFuncionaProps {
  step: string;
  children: React.ReactNode;
}

export function StepComoFunciona({ step, children }: StepComoFuncionaProps) {
  return (
    <View className="flex-row items-center gap-2 p-2 border-2 rounded-lg border-primary">
      <View className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-primary aspect-square">
        <Text className="font-bold leading-tight text-center text-primaryLight text-h5">
          {step}
        </Text>
      </View>
      {children}
    </View>
  );
}
