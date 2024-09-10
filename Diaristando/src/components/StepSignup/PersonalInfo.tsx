import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { Formik } from 'formik';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Yup from 'yup';

import { RootStackParamList } from '@/navigation/appNavigation';

type PersonalInfoRouteProp = RouteProp<RootStackParamList, 'PersonalInfo'>;
type SocialLoginNavigationProp = NavigationProp<RootStackParamList, 'SignedOff'>;

export function PersonalInfo() {
  const validationSchema = Yup.object().shape({
    nomeCompleto: Yup.string().required('*Este campo é obrigatório'),
    email: Yup.string().email('*E-mail inválido').required('*Por favor, digite seu e-mail'),
    telefone: Yup.string().required('*Telefone é inválido'),
    dataNascimento: Yup.string().required('*Por favor, digite sua data de nascimento'),
    cep: Yup.string().required('*CEP inválido'),
    genero: Yup.string().required('*Por favor, selecione um gênero'),
    nomeOpcional: Yup.string().optional(),
  });

  const navigation = useNavigation<SocialLoginNavigationProp>();
  const route = useRoute<PersonalInfoRouteProp>();

  const { email, nomeCompleto } = route.params || { email: '', nomeCompleto: '' };

  return (
    <Formik
      initialValues={{
        nomeCompleto: nomeCompleto || '',
        email: email || '',
        telefone: '',
        dataNascimento: '',
        cep: '',
        genero: '',
        nomeOpcional: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Formulário submetido com sucesso!', values);
        navigation.navigate('SignedOff', { screen: 'Home' });
        console.log('Complete!');
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
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View className="flex-1 mx-6">
              <View className="items-center gap-2 pb-3">
                <Text className="text-h5 pt-8 leading-[20.25px] font-bold text-dark1">
                  Informações Pessoais
                </Text>
              </View>

              <View className="flex gap-4 py-3 pt-2">
                <Text className="text-paragraph">Nome Completo</Text>
                <TextInput
                  placeholder="Nome Completo"
                  onChangeText={handleChange('nomeCompleto')}
                  onBlur={handleBlur('nomeCompleto')}
                  value={values.nomeCompleto}
                  className={`border ${touched.nomeCompleto && errors.nomeCompleto ? 'border-gray-500' : 'border-gray-300'} rounded-md p-2`}
                  editable={false}
                />
                {touched.nomeCompleto && errors.nomeCompleto && (
                  <Text className="text-sm text-red-500">{errors.nomeCompleto}</Text>
                )}

                <Text className="pt-2 text-paragraph">E-mail</Text>
                <TextInput
                  placeholder="email@email.com.br"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  className={`border ${touched.email && errors.email ? 'border-gray-500' : 'border-gray-300'} rounded-md p-2`}
                  editable={false}
                />
                {touched.email && errors.email && (
                  <Text className="text-sm text-red-500">{errors.email}</Text>
                )}

                <Text className="pt-2 text-paragraph">Telefone*</Text>
                <TextInput
                  placeholder="9 XXXX-XXXX"
                  onChangeText={handleChange('telefone')}
                  onBlur={handleBlur('telefone')}
                  value={values.telefone}
                  keyboardType="phone-pad"
                  className={`border ${touched.telefone && errors.telefone ? 'border-gray-500' : 'border-gray-300'} rounded-md p-2`}
                />
                {touched.telefone && errors.telefone && (
                  <Text className="text-sm text-red-500">{errors.telefone}</Text>
                )}

                <Text className="pt-2 text-paragraph">Data de nascimento*</Text>
                <TextInput
                  placeholder="DD/MM/AAAA"
                  onChangeText={handleChange('dataNascimento')}
                  onBlur={handleBlur('dataNascimento')}
                  value={values.dataNascimento}
                  className={`border ${touched.dataNascimento && errors.dataNascimento ? 'border-gray-500' : 'border-gray-300'} rounded-md p-2`}
                />
                {touched.dataNascimento && errors.dataNascimento && (
                  <Text className="text-sm text-red-500">{errors.dataNascimento}</Text>
                )}

                <Text className="pt-2 text-paragraph">CEP*</Text>
                <TextInput
                  placeholder="XXXXX-XXX"
                  onChangeText={handleChange('cep')}
                  onBlur={handleBlur('cep')}
                  value={values.cep}
                  className={`border ${touched.cep && errors.cep ? 'border-gray-500' : 'border-gray-300'} rounded-md p-2`}
                />
                {touched.cep && errors.cep && (
                  <Text className="text-sm text-red-500">{errors.cep}</Text>
                )}

                <Text className="pt-2 text-paragraph">Qual seu gênero?*</Text>
                <View
                  className={`border ${touched.genero && errors.genero ? 'border-gray-500' : 'border-gray-300'} rounded-md`}
                >
                  <Picker
                    selectedValue={values.genero}
                    onValueChange={(itemValue) => setFieldValue('genero', itemValue)}
                    className="text-black"
                  >
                    <Picker.Item label="Selecione" value="" />
                    <Picker.Item label="Feminino" value="feminino" />
                    <Picker.Item label="Masculino" value="masculino" />
                    <Picker.Item label="Não-binário" value="nao-binario" />
                  </Picker>
                </View>
                {touched.genero && errors.genero && (
                  <Text className="text-sm text-tertiaryDanger">{errors.genero}</Text>
                )}

                <Text className="pt-2 text-paragraph">Como podemos te chamar? (Opcional)</Text>
                <TextInput
                  placeholder="Esse nome ficará visível para os clientes"
                  onChangeText={handleChange('nomeOpcional')}
                  onBlur={handleBlur('nomeOpcional')}
                  value={values.nomeOpcional}
                  className="p-2 border border-gray-300 rounded-md"
                />
              </View>

              <View className="flex-row justify-between pb-10 mt-4">
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="w-[146px] h-[43px] bg-light border border-primary rounded-md flex items-center justify-center"
                >
                  <Text className="text-center text-primary">Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  className={`w-[146px] h-[43px] rounded-md flex items-center justify-center ${isValid && dirty ? 'bg-light border border-primary' : 'bg-light border border-gray-300'}`}
                  disabled={!(isValid && dirty)}
                >
                  <Text
                    className={`text-center ${isValid && dirty ? 'text-primary' : 'text-gray-400'}`}
                  >
                    Continuar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}
