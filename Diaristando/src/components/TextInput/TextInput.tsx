import {
    Text,
    View,
    TextInput as RNTextInput,
    TextInputProps,
    StyleSheet,
    StyleProp,
    TextStyle,
    ViewProps,
} from 'react-native';

type Props = TextInputProps & {
    label?: string;
    editable?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
    inputContainer?: ViewProps['style'];
};

export function TextInput({
    label,
    editable,
    multiline = false,
    numberOfLines = 1,
    inputContainer = { height: 70 },
    ...textInputProps
}: Props) {
    return (
        <View style={inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <RNTextInput
                style={multiline && styles.multiline}
                placeholderTextColor="#172554"
                multiline={multiline}
                numberOfLines={numberOfLines}
                editable={editable}
                {...textInputProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
    },
    multiline: {
        height: 160,
        textAlignVertical: 'top',
    },
});
