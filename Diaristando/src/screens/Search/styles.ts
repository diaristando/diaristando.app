import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        minHeight: '100%',
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    inputContainer: {
        marginTop: 10,
    },
    pickerContainer: {
        borderRadius: 8,
        height: 50,
    },
    pickerAndroid: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        padding: 10,
    },
    pickerIcon: {
        padding: 8,
    },
    emptyView: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#D3D3D3',
        borderRadius: 8,
        marginBottom: 100,
        paddingHorizontal: 15,
    },
    emptyTextView: {
        color: '#1D2024',
        fontSize: 16,
        marginTop: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
});
