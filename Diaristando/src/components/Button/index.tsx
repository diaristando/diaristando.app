import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  text: string;
  height?: number;
  width?: number;
  reverse?: boolean;
  onPress: () => void;
};
export function Button({ text, reverse = false, height = 34, onPress, width = 100 }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        reverse ? { ...styles.reverseContainer } : { ...styles.container },
        { height, width, alignItems: 'center', justifyContent: 'center', padding: 8 },
      ]}
      onPress={onPress}
    >
      <Text style={reverse ? styles.reverseText : styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D4ED8',
    borderRadius: 4,
  },
  reverseContainer: {
    backgroundColor: 'white',
    borderColor: '#1D4ED8',
    borderWidth: 1,
    borderRadius: 4,
  },
  text: {
    color: '#DBEAFE',
    lineHeight: 16,
    fontSize: 14,
  },
  reverseText: {
    color: '#1D4ED8',
    lineHeight: 16,
    fontSize: 14,
  },
});
