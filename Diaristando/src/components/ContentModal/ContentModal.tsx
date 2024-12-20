import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { Image, StyleSheet, Text, TextInputProps, View } from 'react-native';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import { Button } from '../Button';
import { ButtonPressableOpacity } from '../ButtonPressableOpacity/ButtonPressableOpacity';
import { TextInput } from '../TextInput/TextInput';

import { DiaristaRootStackParamList } from '@/navigation/diarista/diaristaNavigation';
import { RootState } from '@/store';

type Props = TextInputProps & {
    pressable: () => void;
    confirm: () => void;
};

const error = require('../../assets/animations/alert.gif');

type PersonalInfoNavigationProp = NavigationProp<DiaristaRootStackParamList>;

const schema = yup.object({
    confirmForm: yup.string().required('*Por favor, informe o motivo do cancelamento.'),
});

export function ContentModal({ pressable }: Props) {
    const { navigate } = useNavigation<PersonalInfoNavigationProp>();
    const { nome } = useSelector((state: RootState) => state.user);

    function navigateToFeedback() {
        pressable();
        navigate('Feedback', { update: false });
    }

    function navigateToHome() {
        pressable();
        navigate('DiaristaTab', { screen: 'Home' });
    }

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
                padding: 20,
            }}
        >
            <Text style={{ fontSize: 18, color: '#000', textAlign: 'center' }}>
                {`O agendamento com o ${nome} foi finalizado?`}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    gap: 10,
                }}
            >
                <ButtonPressableOpacity text="Não" onPress={navigateToHome} reverse width={120} />
                <ButtonPressableOpacity
                    width={120}
                    reverse
                    text="Sim"
                    onPress={navigateToFeedback}
                />
            </View>
        </View>
    );
}

export function ConfirCancelModal({ pressable, confirm }: Props) {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
                padding: 20,
            }}
        >
            <Image source={error} />
            <Text style={{ fontSize: 18, color: '#000', textAlign: 'center' }}>
                Deseja cancelar o serviço?
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    gap: 10,
                }}
            >
                <Button text="Sim" height={40} width={120} destructive onPress={confirm} />
                <Button text="Não" height={40} width={120} onPress={pressable} />
            </View>
        </View>
    );
}

export function CancelModal({ confirm }: Props) {
    return (
        <Formik
            initialValues={{ confirmForm: '' }}
            validationSchema={schema}
            onSubmit={(values) => {
                const { confirmForm } = values;
                console.log(confirmForm);

                confirm();
            }}
        >
            {({ handleSubmit, setFieldValue, values, errors }) => (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 12,
                        padding: 10,
                    }}
                >
                    <Text style={{ fontSize: 18, color: '#000' }}>
                        Insira o motivo do cancelamento*
                    </Text>
                    <TextInput
                        numberOfLines={5}
                        inputContainer={{ height: 150 }}
                        multiline
                        value={values.confirmForm}
                        onChangeText={(text) => setFieldValue('confirmForm', text)}
                        errorMessage={errors.confirmForm}
                        style={[styles.textInput, { textAlignVertical: 'top' }]}
                    />
                    <Button
                        text="Confirmar"
                        width="100%"
                        height={40}
                        onPress={() => handleSubmit()}
                    />
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    textInput: {
        marginTop: -25,
        marginBottom: 8,
        borderWidth: 1.5,
        borderColor: '#767373',
        color: '#000',
        borderRadius: 8,
        height: 160,
        padding: 10,
        fontSize: 14,
        flex: 1,
        width: 270,
    },
});
