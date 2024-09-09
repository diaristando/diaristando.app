import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native'; // useRoute para pegar parâmetros de navegação
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

  const navigation = useNavigation();
  const route = useRoute();

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
        navigation.navigate(Home);
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
          keyboardVerticalOffset={100} // Ajuste a altura conforme necessário
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View className="flex-1 mx-6">
              <View className="items-center gap-2 pb-3">
                <Text className="text-h5 pt-8 leading-[20.25px] font-bold text-dark1">
                  Informações Pessoais
                </Text>
              </View>

              {/* Formulário */}
              <View className="flex gap-4 py-3 pt-2">
                {/* Nome Completo */}
                <Text className="text-paragraph">Nome Completo</Text>
                <TextInput
                  placeholder="Nome Completo"
                  onChangeText={handleChange('nomeCompleto')}
                  onBlur={handleBlur('nomeCompleto')}
                  value={values.nomeCompleto}
                  className={`border ${touched.nomeCompleto && errors.nomeCompleto ? 'border-gray-500' : 'border-gray-300'} rounded-md p-2`}
                  editable={false} // Desabilitado para edição
                />
                {touched.nomeCompleto && errors.nomeCompleto && (
                  <Text className="text-red-500 text-sm">{errors.nomeCompleto}</Text>
                )}

                {/* Email */}
                <Text className="text-paragraph pt-2">E-mail</Text>
                <TextInput
                  placeholder="email@email.com.br"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  className={`border ${touched.email && errors.email ? 'border-gray-500' : 'border-gray-300'} rounded-md p-2`}
                  editable={false} // Desabilitado para edição
                />
                {touched.email && errors.email && (
                  <Text className="text-red-500 text-sm">{errors.email}</Text>
                )}

                {/* Telefone */}
                <Text className="text-paragraph pt-2">Telefone*</Text>
                <TextInput
                  placeholder="9 XXXX-XXXX"
                  onChangeText={handleChange('telefone')}
                  onBlur={handleBlur('telefone')}
                  value={values.telefone}
                  keyboardType="phone-pad"
                  className={`border ${touched.telefone && errors.telefone ? 'border-gray-500' : 'border-gray-300'} rounded-md p-2`}
                />
                {touched.telefone && errors.telefone && (
                  <Text className="text-red-500 text-sm">{errors.telefone}</Text>
                )}

                {/* Data de Nascimento */}
                <Text className="text-paragraph pt-2">Data de nascimento*</Text>
                <TextInput
                  placeholder="DD/MM/AAAA"
                  onChangeText={handleChange('dataNascimento')}
                  onBlur={handleBlur('dataNascimento')}
                  value={values.dataNascimento}
                  className={`border ${touched.dataNascimento && errors.dataNascimento ? 'border-gray-500' : 'border-gray-300'} rounded-md p-2`}
                />
                {touched.dataNascimento && errors.dataNascimento && (
                  <Text className="text-red-500 text-sm">{errors.dataNascimento}</Text>
                )}

                {/* CEP */}
                <Text className="text-paragraph pt-2">CEP*</Text>
                <TextInput
                  placeholder="XXXXX-XXX"
                  onChangeText={handleChange('cep')}
                  onBlur={handleBlur('cep')}
                  value={values.cep}
                  className={`border ${touched.cep && errors.cep ? 'border-gray-500' : 'border-gray-300'} rounded-md p-2`}
                />
                {touched.cep && errors.cep && (
                  <Text className="text-red-500 text-sm">{errors.cep}</Text>
                )}

                {/* Gênero */}
                <Text className="text-paragraph pt-2">Qual seu gênero?*</Text>
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
                  <Text className="text-tertiaryDanger text-sm">{errors.genero}</Text>
                )}

                {/* Nome Opcional */}
                <Text className="text-paragraph pt-2">Como podemos te chamar? (Opcional)</Text>
                <TextInput
                  placeholder="Esse nome ficará visível para os clientes"
                  onChangeText={handleChange('nomeOpcional')}
                  onBlur={handleBlur('nomeOpcional')}
                  value={values.nomeOpcional}
                  className="border border-gray-300 rounded-md p-2"
                />
              </View>

              {/* Botões de Ação */}
              <View className="flex-row justify-between mt-4 pb-10">
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="w-[146px] h-[43px] bg-light border border-primary rounded-md flex items-center justify-center"
                >
                  <Text className="text-primary text-center">Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleSubmit}
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
