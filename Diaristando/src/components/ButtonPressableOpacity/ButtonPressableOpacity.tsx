import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonProps = {
    text: string;
    height?: number;
    width?: number;
    reverse?: boolean;
    onPress: () => void;
    pressed?: boolean;
};

export function ButtonPressableOpacity({
    text,
    reverse = false,
    pressed = false,
    height = 34,
    onPress,
    width = 100,
}: ButtonProps) {
    const [isPressed, setIsPressed] = useState(false);

    const buttonStyle = reverse
        ? pressed || isPressed
            ? { ...styles.container }
            : { ...styles.reverseContainer }
        : pressed || isPressed
          ? { ...styles.container }
          : { ...styles.container };

    return (
        <Pressable
            style={[
                buttonStyle,
                { height, width, alignItems: 'center', justifyContent: 'center', padding: 8 },
            ]}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={onPress}
        >
            <Text
                style={
                    reverse
                        ? pressed || isPressed
                            ? styles.text
                            : styles.reverseText
                        : styles.text
                }
            >
                {text}
            </Text>
        </Pressable>
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
