import { View, StyleSheet } from 'react-native';

export const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: '#DBEAFE',
    borderRadius: 9999,
  },
});
