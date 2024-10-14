import { View, StyleSheet } from 'react-native';

type SeparatorProps = {
  color?: string;
  height?: number;
};

export const Separator = ({ color = '#DBEAFE', height = 2 }: SeparatorProps) => (
  <View style={[styles.separator, { backgroundColor: color, height }]} />
);

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    borderRadius: 9999,
  },
});
