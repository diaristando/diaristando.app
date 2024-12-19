import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
    },
    title: {
        marginRight: 5,
        fontSize: 14,
        lineHeight: 18.2,
    },
    value: {
        width: Dimensions.get('screen').width * 0.6,
        fontSize: 14,
        lineHeight: 18.2,
    },
});
