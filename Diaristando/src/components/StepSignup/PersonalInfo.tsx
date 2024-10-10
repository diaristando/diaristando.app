import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import dddsBr from '../../../assets/ddd-br.json';

import { DiaristaRootStackParamList } from '@/navigation/diarista/diaristaNavigation';
import { setUser, UserState, Genero } from '@/store/slices/userSlice';
import { applyCepMask, applyPhoneMask } from '@/utils/masks';

type PersonalInfoNavigationProp = NavigationProp<DiaristaRootStackParamList>;

type PersonalInfoProps = {
  email: string;
  fullName: string;
};

const validationSchema = Yup.object().shape({
  nome: Yup.string().required('*Este campo é obrigatório'),
  email: Yup.string().email('*E-mail inválido').required('*Por favor, digite seu e-mail'),
  telefone: Yup.string()
    .required('*Telefone inválido')
    .matches(/^\d{9}$/, '*Telefone inválido'),
  ddd: Yup.string()
    .required('*Por favor, selecione o DDD')
    .matches(/^\d{2}$/, '*DDD inválido'),
  dataNascimento: Yup.string().required('*Por favor, informe sua data de nascimento'),
  cep: Yup.string()
    .required('*CEP inválido')
    .matches(/^\d{8}$/, '*CEP inválido'),
  genero: Yup.string()
    .oneOf(Object.values(Genero), '*Selecione um gênero válido')
    .required('*Por favor, selecione seu gênero'),
  nomeSocial: Yup.string()
    .optional()
    .matches(/^[a-zA-Z0-9 ]*$/, '*Este campo não aceita caracteres especiais'),
});

export function PersonalInfo({ email, fullName }: PersonalInfoProps) {
  const navigation = useNavigation<PersonalInfoNavigationProp>();
  const dispatch = useDispatch();
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const today = new Date();
  const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

  return (
    <Formik
      initialValues={{
        nome: fullName,
        email,
        telefone: '',
        dataNascimento: '',
        cep: '',
        genero: '',
        nomeSocial: '',
        ddd: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const { telefone, ddd, dataNascimento, ...rest } = values;
        const phoneWithDdd = `${ddd}${telefone}`;
        const dataNascimentoFormatted = new Date(dataNascimento).toISOString();

        const payload: UserState = {
          ...rest,
          telefone: phoneWithDdd,
          dataNascimento: dataNascimentoFormatted,
        };

        dispatch(setUser(payload));
        console.log('Formulário submetido com sucesso!', payload);
        navigation.navigate('Home', { screen: 'DiaristaTab' });
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
        isValid,
        dirty,
      }) => (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={100}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Informações Pessoais</Text>
            <View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Nome Completo</Text>
                <TextInput
                  placeholder="Nome Completo"
                  placeholderTextColor="#909090"
                  value={values.nome}
                  style={styles.disabledInput}
                  editable={false}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  placeholder="email@email.com.br"
                  placeholderTextColor="#909090"
                  value={values.email}
                  keyboardType="email-address"
                  style={styles.disabledInput}
                  editable={false}
                  maxLength={50}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Telefone*</Text>
                <View style={styles.phoneContainer}>
                  <View style={styles.dddContainer}>
                    <RNPickerSelect
                      placeholder={{ label: 'DDD', value: null }}
                      value={values.ddd}
                      onValueChange={(itemValue: string) => {
                        setFieldValue('ddd', itemValue);
                      }}
                      items={Object.keys(dddsBr).map((ddd, index) => ({
                        key: `${ddd}-${index}`,
                        label: ddd,
                        value: ddd,
                      }))}
                      useNativeAndroidPickerStyle={false}
                      style={{
                        inputAndroid: { color: 'black', fontSize: 14 },
                        placeholder: { color: '#767373' },
                        inputAndroidContainer: styles.dddPicker,
                      }}
                      Icon={() => (
                        <View style={styles.pickerIcon}>
                          <AntDesign name="down" size={14} color="blue" />
                        </View>
                      )}
                    />
                  </View>
                  <TextInput
                    placeholder="9 XXXX-XXXX"
                    placeholderTextColor="#767373"
                    onChangeText={handleChange('telefone')}
                    onBlur={handleBlur('telefone')}
                    maxLength={11}
                    value={applyPhoneMask(values.telefone)}
                    style={styles.textInput}
                  />
                </View>
                {touched.telefone && errors.telefone && (
                  <Text style={styles.errorText}>{errors.telefone}</Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Data de nascimento*</Text>
                <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
                  <View style={styles.datePickerContainer}>
                    {showDatePicker && (
                      <RNDateTimePicker
                        value={values.dataNascimento ? new Date(values.dataNascimento) : maxDate}
                        onChange={(_, date) => {
                          setShowDatePicker(false);
                          setFieldValue('dataNascimento', date);
                        }}
                        maximumDate={maxDate}
                      />
                    )}
                    <Text>
                      {values.dataNascimento
                        ? new Date(values.dataNascimento).toLocaleDateString('pt-BR')
                        : 'DD/MM/AAAA'}
                    </Text>
                    <Feather name="calendar" size={18} color="blue" />
                  </View>
                </TouchableWithoutFeedback>
                {touched.dataNascimento && errors.dataNascimento && (
                  <Text style={styles.errorText}>{errors.dataNascimento}</Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>CEP*</Text>
                <TextInput
                  placeholder="XXXXX-XXX"
                  placeholderTextColor="#767373"
                  onChangeText={handleChange('cep')}
                  onBlur={handleBlur('cep')}
                  maxLength={9}
                  value={applyCepMask(values.cep)}
                  style={styles.textInput}
                />
                {touched.cep && errors.cep && <Text style={styles.errorText}>{errors.cep}</Text>}
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Qual seu gênero?*</Text>
                <View style={styles.pickerContainer}>
                  <RNPickerSelect
                    placeholder={{ label: 'Selecione', value: '' }}
                    value={values.genero}
                    onValueChange={(itemValue: Genero) => {
                      setFieldValue('genero', itemValue);
                    }}
                    items={[
                      { label: 'Feminino', value: Genero.FEMININO },
                      { label: 'Masculino', value: Genero.MASCULINO },
                      { label: 'Não-binário', value: Genero.NAO_BINARIO },
                    ]}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      inputAndroid: { color: 'black', fontSize: 14 },
                      placeholder: { color: '#767373' },
                      inputAndroidContainer: styles.pickerAndroid,
                    }}
                    Icon={() => (
                      <View style={styles.pickerIcon}>
                        <AntDesign name="down" size={14} color="blue" />
                      </View>
                    )}
                  />
                </View>
                {touched.genero && errors.genero && (
                  <Text style={styles.errorText}>{errors.genero}</Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Como podemos te chamar? (Opcional)</Text>
                <TextInput
                  placeholder="Esse nome ficará visível para os clientes"
                  placeholderTextColor="#868686"
                  onChangeText={handleChange('nomeSocial')}
                  onBlur={handleBlur('nomeSocial')}
                  value={values.nomeSocial}
                  style={styles.textInput}
                />
              </View>
              {touched.nomeSocial && errors.nomeSocial && (
                <Text style={styles.errorText}>{errors.nomeSocial}</Text>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>Voltar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={[
                  styles.submitButton,
                  { borderColor: isValid && dirty ? '#0070f3' : '#A0A0A0' },
                ]}
                disabled={!(isValid && dirty)}
              >
                <Text
                  style={[
                    styles.submitButtonText,
                    { color: isValid && dirty ? '#0070f3' : '#A0A0A0' },
                  ]}
                >
                  Concluir
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    lineHeight: 20.25,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginVertical: 16,
  },
  inputContainer: {
    marginTop: 30,
    position: 'relative',
  },
  label: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  disabledInput: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    padding: 8,
    height: 40,
    fontSize: 14,
    color: '#909090',
  },
  phoneContainer: {
    flexDirection: 'row',
    gap: 16,
    height: 40,
  },
  dddContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#A0A0A0',
    borderRadius: 8,
    padding: 8,
    width: 70,
    height: 40,
    overflow: 'hidden',
  },
  dddPicker: {
    flexDirection: 'row',
    width: 70,
    height: 40,
    alignItems: 'center',
    padding: 10,
  },
  pickerIcon: {
    padding: 8,
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: '#A0A0A0',
    borderRadius: 8,
    padding: 8,
    height: 40,
    fontSize: 14,
    flex: 1,
  },
  errorText: {
    fontSize: 12,
    color: '#FF0000',
    position: 'absolute',
    bottom: -20,
    left: 8,
  },
  datePickerContainer: {
    borderWidth: 1.5,
    borderColor: '#A0A0A0',
    borderRadius: 8,
    padding: 8,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pickerContainer: {
    borderWidth: 1.5,
    borderColor: '#A0A0A0',
    borderRadius: 8,
    height: 40,
  },
  pickerAndroid: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 34,
    paddingBottom: 48,
  },
  backButton: {
    justifyContent: 'center',
    flex: 1,
    borderWidth: 2,
    borderRadius: 8,
    height: 44,
    backgroundColor: '#F5F5F5',
    borderColor: '#0070f3',
  },
  backButtonText: {
    textAlign: 'center',
    color: '#0070f3',
  },
  submitButton: {
    justifyContent: 'center',
    flex: 1,
    height: 44,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  submitButtonText: {
    textAlign: 'center',
  },
});
