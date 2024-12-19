import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DBEAFE',
    },
    containerHeaderLine: {
        paddingHorizontal: 24,
        paddingTop: 18,
        paddingBottom: 12,
        gap: 10,
    },
    headerTitle: {
        fontSize: 14,
        color: '#1D2024',
    },
    headerLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tabContainer: {
        paddingLeft: 24,
    },
    tabTextSelected: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1D4ED8',
    },
    tabText: {
        fontSize: 16,
        color: '#767373',
    },
    scrollViewContent: {
        paddingTop: 16,
        paddingRight: 24,
    },
    bottomSelectorTab: {
        marginTop: 8,
        height: 3,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        backgroundColor: '#1D4ED8',
    },
});
