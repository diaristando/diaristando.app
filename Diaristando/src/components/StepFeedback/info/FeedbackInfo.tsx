import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import * as yup from 'yup';

import { TextInput } from '@/components/TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { FeedbackState, setFeedback } from '@/store/slices/feedbackSlice';

type Props = {
    handleOpenModal: () => void;
};

const schema = yup.object({
    service: yup.string().required('Informe a data do serviço.'),
    time: yup.string().required('Informe o horário do serviço.'),
});

export function FeedbackInfo({ handleOpenModal }: Props) {
    const [selected, setSelected] = useState('padrao');
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
    const [formattedPrice, setFormattedPrice] = useState('');

    const dispatch = useDispatch();
    const feedback = useSelector((state: RootState) => state.feedback);

    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    function handleTimeChange(
        event: DateTimePickerEvent,
        selectedTime: Date | undefined,
        setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
    ) {
        setShowTimePicker(false);
        if (selectedTime) {
            const hours = selectedTime.getHours().toString().padStart(2, '0');
            const minutes = selectedTime.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes}`;

            setFieldValue('time', formattedTime);
        }
    }

    function formatCurrency(text: string) {
        let cleanValue = text.replace(/\D/g, '');

        if (cleanValue.length > 2) {
            cleanValue = cleanValue.replace(/(\d)(\d{2})$/, '$1,$2');
            cleanValue = cleanValue.replace(/(?=(\d{3})+(\D))\B/g, '.');
        }

        return cleanValue;
    }

    function handlePriceChange(
        text: string,
        setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
    ) {
        const formatted = formatCurrency(text);
        setFormattedPrice(formatted);
        setFieldValue('reciveValue', formatted);
    }

    return (
        <Formik
            initialValues={{
                service: '',
                time: '',
                description: '',
                reciveValue: '',
                typeService: '',
            }}
            validationSchema={schema}
            onSubmit={(values) => {
                const { service, ...rest } = values;

                const dateServiceFormatted = new Date(service).toISOString();

                const payload: FeedbackState = {
                    service: dateServiceFormatted,
                    ...rest,
                };

                dispatch(setFeedback(payload));

                handleOpenModal();
            }}
        >
            {({ handleSubmit, setFieldValue, values, errors }) => (
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    keyboardVerticalOffset={100}
                >
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Data do serviço*</Text>
                        <Pressable onPress={() => setShowDatePicker(true)}>
                            <View
                                style={[
                                    styles.datePickerContainer,
                                    {
                                        borderWidth: 1.5,
                                        borderColor: '#000',
                                    },
                                ]}
                            >
                                {showDatePicker && (
                                    <RNDateTimePicker
                                        value={values.service ? new Date(values.service) : maxDate}
                                        onChange={(_, date) => {
                                            setShowDatePicker(false);
                                            setFieldValue('service', date);
                                        }}
                                        maximumDate={maxDate}
                                    />
                                )}

                                <Text style={{ color: '#172554' }}>
                                    {values.service
                                        ? new Date(values.service).toLocaleDateString('pt-BR')
                                        : 'DD/MM/AAAA'}
                                </Text>
                            </View>
                        </Pressable>
                        {errors.service && <Text style={styles.errorText}>{errors.service}</Text>}
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Hora do serviço*</Text>
                        <Pressable onPress={() => setShowTimePicker(true)}>
                            <View
                                style={[
                                    styles.datePickerContainer,
                                    {
                                        borderWidth: 1.5,
                                        borderColor: '#000',
                                    },
                                ]}
                            >
                                {showTimePicker && (
                                    <RNDateTimePicker
                                        mode="time"
                                        value={new Date()}
                                        onChange={(event, selectedTime) =>
                                            handleTimeChange(event, selectedTime, setFieldValue)
                                        }
                                    />
                                )}

                                <Text style={{ color: '#172554' }}>
                                    {values.time ? values.time : 'HH:MM'}
                                </Text>
                            </View>
                        </Pressable>
                        {errors.time && <Text style={styles.errorText}>{errors.time}</Text>}
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="R$ 0,00"
                            label="Valor a receber"
                            value={formattedPrice}
                            onChangeText={(text) => handlePriceChange(text, setFieldValue)}
                            style={styles.textInput}
                            keyboardType="numeric"
                        />
                    </View>
                    <Text style={styles.label}>Tipo do serviço*</Text>
                    <View style={styles.row}>
                        <Pressable
                            style={[
                                styles.toggleButton,
                                selected === 'padrao' && {
                                    backgroundColor: '#1D4ED8',
                                    borderWidth: 0,
                                },
                            ]}
                            onPress={() => {
                                setSelected('padrao');
                                setFieldValue('typeService', 'padrao');
                            }}
                        >
                            <Text
                                style={[
                                    styles.toggleText,
                                    selected === 'padrao' && styles.activeText,
                                ]}
                            >
                                Limpeza Pesada
                            </Text>
                        </Pressable>
                        <Pressable
                            style={[
                                styles.toggleButton,
                                selected === 'pesado' && {
                                    backgroundColor: '#1D4ED8',
                                    borderWidth: 0,
                                },
                            ]}
                            onPress={() => {
                                setSelected('pesado');
                                setFieldValue('typeService', 'pesado');
                            }}
                        >
                            <Text
                                style={[
                                    styles.toggleText,
                                    selected === 'pesado' && styles.activeText,
                                ]}
                            >
                                Limpeza Pesada
                            </Text>
                        </Pressable>
                    </View>
                    <View style={[styles.inputContainer]}>
                        <TextInput
                            label="Observações adicionais"
                            placeholder="Campo opcional"
                            numberOfLines={5}
                            value={values.description}
                            onChangeText={(text) => setFieldValue('description', text)}
                            inputContainer={{ height: 150 }}
                            multiline
                            style={[styles.textInput, { textAlignVertical: 'top' }]}
                        />
                    </View>
                    <TouchableOpacity style={styles.Buttoncontainer} onPress={() => handleSubmit()}>
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
        color: '#172554',
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
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
        gap: 10,
        alignItems: 'center',
    },
    toggleButton: {
        width: '48%',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    activeButton: {
        width: '48%',
        backgroundColor: '#1D4ED8',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    toggleText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    activeText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    datePickerContainer: {
        borderRadius: 8,
        padding: 8,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    errorText: {
        fontSize: 12,
        color: '#FF0000',
        position: 'absolute',
        bottom: -20,
        left: 8,
    },
});
