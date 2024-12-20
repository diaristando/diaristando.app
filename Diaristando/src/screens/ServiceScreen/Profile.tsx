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
    const [mockList, setMockList] = useState(['1']);

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
                                    </View>
                                </View>
                            );
                    }
                }}
            />

            {/* <CustomModal
                    isOpen={confirmModal}
                    onClose={() => {
                        setConfirmModal(false);
                    }}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 12,
                            paddingHorizontal: 36,
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 14 }}>
                            Ótimo! Você estará em contato com clientes que buscam seus serviços
                        </Text>
                        <Text style={{ textAlign: 'center', fontSize: 14 }}>
                            Clique em 'Continuar' para ser direcionada ao WhatsApp.
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between',
                                marginTop: 10,
                            }}
                        >
                            <Button text="Cancelar" onPress={() => setConfirmModal(false)} reverse />
                            <Button text="Continuar" onPress={() => setConfirmModal(false)} />
                        </View>
                    </View>
                </CustomModal>

                <View style={styles.header}>
                    <View style={styles.profilePicContainer}>
                        <ProfilePic
                            imageUrl="https://api.dicebear.com/9.x/fun-emoji/svg"
                            isEditable={false}
                            handleUpload={() => console.log('Foto carregada')}
                            height={63}
                            width={63}
                        />
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>
                            Alexandra Beatriz da Silva Campos e Oliveira Costa Lima
                        </Text>
                        <View style={styles.ratingRow}>
                            <Text style={styles.rating}>★★★★☆</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('@/assets/icons/user.png')}
                                    style={styles.profile}
                                />
                                <Text style={styles.genero}>Feminino</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.tags}>
                    <TouchableOpacity style={styles.tag}>
                        <Text style={styles.tagText}>Apartamento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tag}>
                        <Text style={styles.tagText}>Limpeza Padrão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tag}>
                        <Text style={styles.tagText}>Semanal</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.addressInfo}>
                    <Separator color="#00000033" height={1} />
                    <Text style={styles.address}>
                        Rua dos bobos, 123, casa 3, Valqueire, Rio de Janeiro
                    </Text>
                    <View style={styles.propertyInfo}>
                        <View style={styles.propertyItem}>
                            <Image source={require('@/assets/icons/bed.png')} style={styles.icon} />
                            <Text style={styles.propertyText}>4 quartos</Text>
                        </View>
                        <View style={styles.propertyItem}>
                            <Image source={require('@/assets/icons/size.png')} style={styles.icon} />
                            <Text style={styles.propertyText}>600 m²</Text>
                        </View>
                        <View style={styles.propertyItem}>
                            <Image
                                source={require('@/assets/icons/outdoor-garden.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.propertyText}>2 Varandas</Text>
                        </View>
                        <View style={styles.propertyItem}>
                            <Image
                                source={require('@/assets/icons/bathroom.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.propertyText}>6 Banheiros</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.mapContainer}>
                    <Map markers={markers} />
                </View>

                <TouchableOpacity style={styles.whatsappButton} onPress={() => setConfirmModal(true)}>
                    <Text style={styles.whatsappButtonText}>Contato via WhatsApp</Text>
                </TouchableOpacity> */}
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
