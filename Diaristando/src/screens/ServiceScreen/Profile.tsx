import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';

import { Logo, Plus } from '@/assets/svgs';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import ServiceNavigationHeader from '@/components/ServiceNavigationHeader';
import { TabsEnum } from '@/enums/ServiceProfile';
import { DiaristaRootStackParamList } from '@/navigation/diarista/diaristaNavigation';
import ServiceCard from '@/screens/ServiceScreen/components/ServiceCard/ServiceCard';

type PersonalInfoNavigationProp = NavigationProp<DiaristaRootStackParamList>;

const Service = () => {
    const mockList: string[] = [];

    const [tabSelected, setTabSelected] = useState<TabsEnum>(TabsEnum.SCHEDULED);
    const { navigate } = useNavigation<PersonalInfoNavigationProp>();

    function handleOpenForm() {
        navigate('Feedback', { update: false });
    }

    return (
        <>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <ServiceNavigationHeader callBackChangeTab={(newTab) => setTabSelected(newTab)} />

            <FlatList
                style={{ flex: 1 }}
                data={mockList}
                keyExtractor={(item) => item}
                renderItem={() => <ServiceCard tabSelected={tabSelected} />}
                contentContainerStyle={styles.container}
                ListEmptyComponent={() => {
                    switch (tabSelected) {
                        case 0:
                            return (
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity
                                        style={styles.empityButton}
                                        onPress={handleOpenForm}
                                    >
                                        <Plus />
                                        <Text style={styles.emptyText}>Registrar novo serviço</Text>
                                    </TouchableOpacity>
                                    <View style={styles.emptyView}>
                                        <Logo />
                                        <Text style={styles.emptyTextView}>
                                            Parece que não há serviços agendados
                                        </Text>
                                        <Text style={{ color: 'red' }}>Em desenvolvimento</Text>
                                    </View>
                                </View>
                            );
                        case 1:
                            return (
                                <View style={{ flex: 1 }}>
                                    <View style={styles.emptyView}>
                                        <Logo />
                                        <Text style={styles.emptyTextView}>
                                            Parece que não há serviços realizados
                                        </Text>
                                        <Text style={{ color: 'red' }}>Em desenvolvimento</Text>
                                    </View>
                                </View>
                            );
                        case 2:
                            return (
                                <View style={{ flex: 1 }}>
                                    <View style={styles.emptyView}>
                                        <Logo />
                                        <Text style={styles.emptyTextView}>
                                            Parece que não há serviços cancelados
                                        </Text>
                                        <Text style={{ color: 'red' }}>Em desenvolvimento</Text>
                                    </View>
                                </View>
                            );
                        case 3:
                            return (
                                <View style={{ flex: 1 }}>
                                    <View style={styles.emptyView}>
                                        <Logo />
                                        <Text style={styles.emptyTextView}>
                                            Parece que não há serviços não realizados
                                        </Text>
                                        <Text style={{ color: 'red' }}>Em desenvolvimento</Text>
                                    </View>
                                </View>
                            );
                    }
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        marginTop: 16,
        paddingBottom: Dimensions.get('screen').height * 0.05,
    },
    header: {
        flexDirection: 'row',
        marginTop: 8,
        minHeight: 70,
    },
    profilePicContainer: {
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userInfo: {
        marginLeft: 12,
        flex: 1,
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    ratingRow: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    rating: {
        fontSize: 20,
        color: '#1D4ED8',
    },
    profile: {
        marginRight: 5,
        height: 16,
        width: 16,
        color: '#1D4ED8',
    },
    genero: {
        fontSize: 14,
        color: 'black',
    },
    tags: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 12,
        gap: 10,
    },
    tag: {
        height: 26,
        backgroundColor: '#172554',
        padding: 4,
        borderRadius: 4,
    },
    tagText: {
        color: '#DBEAFE',
        fontSize: 14,
        lineHeight: 18,
    },
    addressInfo: {
        marginTop: 16,
        fontWeight: 'bold',
    },
    address: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#000000',
        marginTop: 24,
        marginBottom: 12,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    propertyInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    propertyItem: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 12,
    },
    propertyText: {
        fontSize: 16,
        fontFamily: 'Roboto',
    },
    icon: {
        width: 24,
        height: 24,
        color: '#1D4ED8',
    },
    mapContainer: {
        height: 221,
        borderRadius: 8,
        overflow: 'hidden',
        marginVertical: 24,
    },
    whatsappButton: {
        height: 48,
        backgroundColor: '#1D4ED8',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    whatsappButtonText: {
        color: '#DBEAFE',
        fontSize: 14,
        fontWeight: 'semibold',
    },
    empityButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        height: 40,
        borderWidth: 2,
        borderColor: '#1D4ED8',
        borderRadius: 8,
    },
    emptyText: {
        color: '#1D4ED8',
        fontWeight: 'bold',
    },
    emptyView: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#D3D3D3',
        borderRadius: 8,
        marginTop: 16,
    },
    emptyTextView: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        textAlign: 'center',
    },
});

export { Service };
