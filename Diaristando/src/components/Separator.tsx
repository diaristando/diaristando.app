import { View, StyleSheet } from 'react-native';

type SeparatorProps = {
  color?: string;
  height?: number;
};

export const Separator = ({ color = '#C0C0C0', height = 2 }: SeparatorProps) => (
  <View style={[styles.separator, { backgroundColor: color, height }]} />
);

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    borderRadius: 9999,
    marginTop: 8,
    marginBottom: 3,
  },
});
