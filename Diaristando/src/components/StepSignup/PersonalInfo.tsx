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
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import dddsBr from '../../../assets/ddd-br.json';

import { RootStackParamList } from '@/navigation/appNavigation';
import { setUser } from '@/store/slices/userSlice';
import { applyCepMask, applyPhoneMask } from '@/utils/masks';

type SocialLoginNavigationProp = NavigationProp<RootStackParamList, 'SignedOff'>;

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
  genero: Yup.string().optional(),
  nomeSocial: Yup.string()
    .optional()
    .matches(/^[a-zA-Z0-9 ]*$/, '*Este campo não aceita caracteres especiais'),
});

export function PersonalInfo({ email, fullName }: PersonalInfoProps) {
  const navigation = useNavigation<SocialLoginNavigationProp>();
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
        genero: null,
        nomeSocial: '',
        ddd: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const { ddd, telefone, ...rest } = values;
        const phoneWithDdd = `${values.ddd}${values.telefone}`;
        const payload = { ddd, ...rest, telefone: phoneWithDdd };
        dispatch(
          setUser({
            name: payload.nome,
            email: payload.email,
            telefone: payload.telefone,
            ddd: payload.ddd,
            dataNascimento: payload.dataNascimento,
            cep: payload.cep,
            genero: payload.genero || '',
            nomeSocial: payload.nomeSocial || '',
          }),
        );
        console.log('Formulário submetido com sucesso!', payload);
        navigation.navigate('SignedOff', { screen: 'Home' });
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
          <View className="flex-1 px-6">
            <Text className="text-h5 leading-[20.25px] font-bold text-primaryDark text-center">
              Informações Pessoais
            </Text>
            <View className="flex">
              <View className="mt-[30px] relative">
                <Text className="text-base text-disabledGray">Nome Completo</Text>
                <TextInput
                  placeholder="Nome Completo"
                  placeholderTextColor="#909090"
                  value={values.nome}
                  className="bg-[#D9D9D9] rounded p-2 h-[40px] text-[14px]"
                  editable={false}
                />
              </View>
              <View className="mt-[30px] relative">
                <Text className="text-base text-disabledGray">E-mail</Text>
                <TextInput
                  placeholder="email@email.com.br"
                  placeholderTextColor="#909090"
                  value={values.email}
                  keyboardType="email-address"
                  className="bg-[#D9D9D9] text-[#909090] rounded p-2 h-[40px] text-[14px]"
                  editable={false}
                  maxLength={50}
                />
              </View>
              <View className="mt-[30px] relative">
                <Text className="text-base">Telefone*</Text>
                <View className="flex flex-row w-full h-[40px] gap-4">
                  <View className="items-center justify-around border-[1.5px] border-gray rounded p-2 h-[40px] w-[70px] overflow-hidden">
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
                        inputAndroidContainer: {
                          flexDirection: 'row',
                          width: 70,
                          height: 40,
                          padding: 10,
                          alignItems: 'center',
                        },
                      }}
                      Icon={() => (
                        <View className="p-2">
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
                    className="border-[1.5px] border-gray rounded p-2 h-[40px] flex-1 text-[14px]"
                  />
                </View>
                {touched.telefone && errors.telefone && (
                  <Text className="absolute text-sm text-errorRed -bottom-7 left-2">
                    {errors.telefone}
                  </Text>
                )}
              </View>
              <View className="mt-[30px] relative">
                <Text className="text-base">Data de nascimento*</Text>
                <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
                  <View className="border-[1.5px] border-gray rounded p-2 h-[40px] flex flex-row items-center justify-between">
                    {showDatePicker && (
                      <RNDateTimePicker
                        value={values.dataNascimento ? new Date(values.dataNascimento) : maxDate}
                        className="bg-red-200"
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
                  <Text className="absolute text-sm text-errorRed -bottom-7 left-2">
                    {errors.dataNascimento}
                  </Text>
                )}
              </View>
              <View className="mt-[30px] relative">
                <Text className="text-base">CEP*</Text>
                <TextInput
                  placeholder="XXXXX-XXX"
                  placeholderTextColor="#767373"
                  onChangeText={handleChange('cep')}
                  onBlur={handleBlur('cep')}
                  maxLength={9}
                  value={applyCepMask(values.cep)}
                  className="border-[1.5px] border-gray rounded p-2 h-[40px] text-[14px]"
                />
                {touched.cep && errors.cep && (
                  <Text className="absolute text-sm text-errorRed -bottom-7 left-2">
                    {errors.cep}
                  </Text>
                )}
              </View>

              <View className="mt-[30px] relative">
                <Text className="text-base">Qual seu gênero?</Text>
                <View className="border-[1.5px] border-gray rounded h-[40px]">
                  <RNPickerSelect
                    placeholder={{ label: 'Selecione', value: null }}
                    value={values.genero}
                    onValueChange={(itemValue: string) => {
                      setFieldValue('genero', itemValue);
                    }}
                    items={[
                      { label: 'Feminino', value: 'FEMININO' },
                      { label: 'Masculino', value: 'MASCULINO' },
                      { label: 'Não-binário', value: 'NAO_BINARIO' },
                      { label: 'Prefiro não informar', value: '' },
                    ]}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      inputAndroid: { color: 'black', fontSize: 14 },
                      placeholder: { color: '#767373' },
                      inputAndroidContainer: {
                        flexDirection: 'row',
                        width: '100%',
                        height: 40,
                        padding: 10,
                        alignItems: 'center',
                      },
                    }}
                    Icon={() => (
                      <View className="p-2">
                        <AntDesign name="down" size={14} color="blue" />
                      </View>
                    )}
                  />
                </View>
                {touched.genero && errors.genero && (
                  <Text className="text-sm text-errorRed">{errors.genero}</Text>
                )}
              </View>
              <View className="mt-[30px] relative">
                <Text className="text-base">Como podemos te chamar? (Opcional)</Text>
                <TextInput
                  placeholder="Esse nome ficará visível para os clientes"
                  placeholderTextColor="#868686"
                  onChangeText={handleChange('nomeSocial')}
                  onBlur={handleBlur('nomeSocial')}
                  value={values.nomeSocial}
                  className="p-2 border-[1.5px] rounded border-gray h-[40px] text-[14px]"
                />
              </View>
              {touched.nomeSocial && errors.nomeSocial && (
                <Text className="absolute text-sm text-errorRed -bottom-7 left-2">
                  {errors.nomeSocial}
                </Text>
              )}
            </View>
            <View className="flex flex-row pb-12 mt-[34px] gap-x-10">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="justify-center flex-1 border-2 rounded-lg h-11 lex bg-light border-primary"
              >
                <Text className="text-center text-primary">Voltar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                className={`justify-center flex-1 h-11 rounded-lg bg-light border-2 ${isValid && dirty ? ' border-primary' : 'border-gray'}`}
                disabled={!(isValid && dirty)}
              >
                <Text className={`text-center ${isValid && dirty ? 'text-primary' : 'text-gray'}`}>
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
