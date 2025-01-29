import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
    text: string;
    height?: number;
    width?: number | string;
    reverse?: boolean;
    destructive?: boolean;
    onPress: () => void;
};
export function Button({
    text,
    reverse = false,
    height = 34,
    destructive = false,
    onPress,
    width = 100,
}: ButtonProps) {
    const getContainerStyle = () => {
        if (destructive) return styles.destructiveContainer;
        if (reverse) return styles.reverseContainer;
        return styles.container;
    };

    const getTextStyle = () => {
        if (destructive) return styles.destructiveText;
        if (reverse) return styles.reverseText;
        return styles.text;
    };

    return (
        <TouchableOpacity
            style={[
                getContainerStyle(),
                { height, width, alignItems: 'center', justifyContent: 'center', padding: 8 },
            ]}
            onPress={onPress}
        >
            <Text style={getTextStyle()}>{text}</Text>
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
    destructiveContainer: {
        backgroundColor: 'transparent',
        borderColor: '#B91C1C',
        borderWidth: 1,
        borderRadius: 4,
    },
    destructiveText: {
        color: '#B91C1C',
        lineHeight: 16,
        fontSize: 14,
    },
});
