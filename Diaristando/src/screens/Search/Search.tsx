import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';

import { Logo, SvgSearch } from '@/assets/svgs';

import estados from '../../../assets/locale/estados-br.json';
import { AntDesign } from '@expo/vector-icons';
import { Button } from '@/components/Button';
import { api } from '@/services/api';

export function Search() {
    const [state, setState] = useState<string>();
    const [city, setCity] = useState<string>();

    console.log(state);

    async function SearchService() {
        const { data } = await api.get('/api/v2/usuario', {
            params: {
                estado: state,
                cidade: city,
            },
        });

        console.log('eviado com sucesso', data);
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
                <Text style={styles.title}>Encontre um serviço próximo de você</Text>
                <View style={styles.inputContainer}>
                    <View
                        style={[
                            styles.pickerContainer,
                            {
                                borderWidth: 1,
                                borderColor: '#767373',
                                justifyContent: 'center',
                            },
                        ]}
                    >
                        <RNPickerSelect
                            placeholder={{
                                label: 'Selecione um Estado',
                                value: '',
                                color: '#767373',
                            }}
                            value={state}
                            onValueChange={setState}
                            items={Object.keys(estados).map((estados, index) => ({
                                key: `${estados}-${index}`,
                                label: estados,
                                value: estados,
                            }))}
                            useNativeAndroidPickerStyle={false}
                            style={{
                                inputAndroid: { color: '#868686', fontSize: 14 },
                                placeholder: { color: '#868686' },
                                inputAndroidContainer: styles.pickerAndroid,
                            }}
                            Icon={() => (
                                <View style={styles.pickerIcon}>
                                    <AntDesign name="down" size={20} color="blue" />
                                </View>
                            )}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View
                        style={[
                            styles.pickerContainer,
                            {
                                borderWidth: 1,
                                borderColor: '#767373',
                                padding: 8,
                                alignItems: 'center',
                                flexDirection: 'row',
                            },
                        ]}
                    >
                        <View style={{ marginRight: 15, marginLeft: 10 }}>
                            <SvgSearch />
                        </View>
                        <TextInput
                            placeholder="Digite a Cidade"
                            placeholderTextColor="#767373"
                            value={city}
                            onChangeText={setCity}
                            style={{ color: '#767373' }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.emptyView}>
                        <Logo />
                        <Text style={styles.emptyTextView}>
                            Selecione uma localização para se conectar com os clientes da área
                        </Text>
                        <Text style={{ color: 'red' }}>Em desenvolvimento</Text>
                    </View>

                    <View style={{ width: '100%', position: 'absolute', bottom: 20 }}>
                        {/* foi entregado, porem, falta mudar a tela para a de procurados */}

                        <Button width={'100%'} height={50} text="Buscar" onPress={SearchService} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
