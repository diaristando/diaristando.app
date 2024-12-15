import {
    Text,
    View,
    TextInput as RNTextInput,
    TextInputProps,
    StyleSheet,
    StyleProp,
    TextStyle,
} from 'react-native';

type Props = TextInputProps & {
    label?: string;
    editable?: boolean;
};

export function TextInput({ label, editable, ...textInputProps }: Props) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <RNTextInput placeholderTextColor="#172554" editable={editable} {...textInputProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 70,
    },
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
    },
});
