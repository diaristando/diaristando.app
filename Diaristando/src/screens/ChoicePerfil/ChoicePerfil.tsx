import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import diarista from '../../assets/icons/diarista.png';
import cliente from '../../assets/icons/cliente.png';
import { useState } from 'react';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SignedOffRootStackParamList } from '@/navigation/visitante/signedOffNavigation';

import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';

type SignupRouterProp = RouteProp<SignedOffRootStackParamList, 'choicePerfil'>;
type SocialLoginNavigationProp = NavigationProp<SignedOffRootStackParamList, 'Signup'>;

export function ChoicePerfil() {
    const route = useRoute<SignupRouterProp>();
    const { email, fullName } = route.params || { email: '', fullName: '' };
    const { navigate } = useNavigation<SocialLoginNavigationProp>();

    const [isToggled, setIsToggled] = useState('diarista');

    function handlePress(option: string) {
        setIsToggled(option);
        console.log(option);
    }

    function navigateToSignUp() {
        navigate('Signup', {
            email,
            fullName,
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#DBEAFE" />
            <Text style={styles.title}>Boas-vindas ao Diaristando!</Text>
            <Text style={styles.subtitle}>Encontre diaristas e clientes de forma facilitada</Text>
            <View style={styles.center}>
                <Text style={styles.centerTitle}>O que você deseja fazer?</Text>
                <View style={{ flexDirection: 'row', gap: 22, marginTop: 20 }}>
                    <Pressable
                        style={[
                            styles.cardView,
                            isToggled === 'diarista' && { borderWidth: 2, borderColor: '#1D4ED8' },
                        ]}
                        onPress={() => handlePress('diarista')}
                    >
                        <View style={styles.absolute}>
                            <Image source={diarista} />
                            <Text style={styles.absoluteText}>Quero oferecer meus serviços</Text>
                        </View>
                    </Pressable>
                    <Pressable
                        style={[
                            styles.cardView,
                            isToggled === 'cliente' && { borderWidth: 2, borderColor: '#1D4ED8' },
                        ]}
                        onPress={() => handlePress('cliente')}
                    >
                        <View style={styles.absolute}>
                            <Image source={cliente} />
                            <Text style={styles.absoluteText}>Quero contratar um serviço</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <Pressable style={styles.button} onPress={navigateToSignUp}>
                <Text style={styles.buttonText}>Fazer cadastro</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    title: {
        paddingTop: 6,
        fontSize: 22,
        color: '#1D4ED8',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1D2024',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    centerTitle: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardView: {
        height: 160,
        width: 160,
        backgroundColor: '#D8E8FD',
        borderRadius: 10,
    },
    absolute: {
        position: 'absolute',
        bottom: 15,
        left: 10,
    },
    absoluteText: {
        color: '#000',
        fontSize: 20,
        marginTop: 10,
    },
    button: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1D4ED8',
        borderRadius: 12,
        marginBottom: 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
