import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        backgroundColor: '#F9FAFB',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#76737333',
    },
    header: {
        height: 80,
        backgroundColor: '#60A5FA',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    headerTitle: {
        lineHeight: 18.2,
        fontSize: 14,
    },
    headerSubTitle: {
        lineHeight: 18.75,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    body: {
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    bodyTitle: {
        marginBottom: 14,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 18.75,
        color: '#1D2024',
    },
    footer: {
        paddingTop: 10,
        paddingBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});
