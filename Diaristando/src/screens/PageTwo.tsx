import { StyleSheet, Text, View } from 'react-native';

export function PageTwo() {
  return (
    <View style={styles.container}>
      <Text>Diaristando App página 2!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
