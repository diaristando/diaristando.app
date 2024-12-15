import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput/TextInput';
import { Formik } from 'formik';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object({
    service: yup.string().required('Informe a data de serviço.'),
    time: yup.string().required('Informe o horário de serviço.'),
});

export function FeedbackInfo() {
    return (
        <Formik
            initialValues={{ service: '', time: '' }}
            validationSchema={schema}
            onSubmit={(values) => {}}
        >
            {() => (
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    keyboardVerticalOffset={100}
                >
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="DD/MM/AAAA"
                            label="Data do serviço*"
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="HH:MM"
                            label="Hora do serviço*"
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="R$ 0,00"
                            label="Valor a receber"
                            style={styles.textInput}
                        />
                    </View>
                    <TouchableOpacity style={styles.Buttoncontainer}>
                        <Text style={styles.text}>Enviar</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 10,
        marginBottom: 25,
        width: '100%',
    },
    textInput: {
        borderWidth: 1.5,
        borderColor: '#000',
        color: '#868686',
        borderRadius: 8,
        padding: 8,
        height: 160,
        fontSize: 14,
        flex: 1,
    },
    Buttoncontainer: {
        backgroundColor: '#1D4ED8',
        borderRadius: 6,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#DBEAFE',
        lineHeight: 16,
        fontSize: 16,
    },
});
