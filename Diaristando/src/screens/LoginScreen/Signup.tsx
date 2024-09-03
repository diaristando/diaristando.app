import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FocusAwareStatusBar } from '@/components/FocusAwareStatusBar';
import { Separator } from '@/components/Separator';

export default function Cadastro() {
  const validationSchema = Yup.object().shape({
    nomeCompleto: Yup.string().required('*Este campo é obrigatório'),
    email: Yup.string().email('*E-mail inválido').required('Por favor, digite seu e-mail'),
    telefone: Yup.string().required('*Telefone é inválido'),
    dataNascimento: Yup.string().required('*Por favor, digite sua data de nascimento'),
    cep: Yup.string().required('*CEP inválido'),
    genero: Yup.string().required('*Por favor, selecione um gênero'),
    nomeOpcional: Yup.string('*Este campo não aceita caracteres especiais'),
  });

  return (
    <Formik
      initialValues={{
        nomeCompleto: '',
        email: '',
        telefone: '',
        dataNascimento: '',
        cep: '',
        genero: '',  // Valor inicial do Picker
        nomeOpcional: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched, isValid, dirty }) => (
        <View className="flex-1 mx-6">
          <FocusAwareStatusBar backgroundColor="#ffffff" />

          <View className="items-center gap-2 pb-3">
            <Text className="text-h4 leading-[20.25px] font-bold text-dark1">
              Informações Pessoais
            </Text>
          </View>

          <Separator />

          {/* Formulário */}
          <View className="flex gap-4 py-3">
            <Text>Nome Completo</Text>
            <TextInput
              placeholder="Nome Completo"
              onChangeText={handleChange('nomeCompleto')}
              onBlur={handleBlur('nomeCompleto')}
              value={values.nomeCompleto}
              className={`border ${touched.nomeCompleto && errors.nomeCompleto ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
            />
            {touched.nomeCompleto && errors.nomeCompleto && (
              <Text className="text-red-500 text-sm">{errors.nomeCompleto}</Text>
            )}

            <Text>E-mail</Text>
            <TextInput
              placeholder="email@email.com.br"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              className={`border ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
            />
            {touched.email && errors.email && (
              <Text className="text-red-500 text-sm">{errors.email}</Text>
            )}

            <Text>Telefone?*</Text>
            <TextInput
              placeholder="9 XXXX-XXXX"
              onChangeText={handleChange('telefone')}
              onBlur={handleBlur('telefone')}
              value={values.telefone}
              keyboardType="phone-pad"
              className={`border ${touched.telefone && errors.telefone ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
            />
            {touched.telefone && errors.telefone && (
              <Text className="text-red-500 text-sm">{errors.telefone}</Text>
            )}

            <Text>Data de nascimento*</Text>
            <TextInput
              placeholder="DD/MM/AAAA"
              onChangeText={handleChange('dataNascimento')}
              onBlur={handleBlur('dataNascimento')}
              value={values.dataNascimento}
              className={`border ${touched.dataNascimento && errors.dataNascimento ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
            />
            {touched.dataNascimento && errors.dataNascimento && (
              <Text className="text-red-500 text-sm">{errors.dataNascimento}</Text>
            )}

            <Text>CEP*</Text>
            <TextInput
              placeholder="XXXXX-XXX"
              onChangeText={handleChange('cep')}
              onBlur={handleBlur('cep')}
              value={values.cep}
              className={`border ${touched.cep && errors.cep ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
            />
            {touched.cep && errors.cep && (
              <Text className="text-red-500 text-sm">{errors.cep}</Text>
            )}

            <Text>Qual seu gênero?*</Text>
            <View className={`border ${touched.genero && errors.genero ? 'border-red-500' : 'border-gray-300'} rounded-md`}>
              <Picker
                selectedValue={values.genero}
                onValueChange={(itemValue) => setFieldValue('genero', itemValue)}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Feminino" value="feminino" />
                <Picker.Item label="Masculino" value="masculino" />
                <Picker.Item label="Não-binário" value="nao-binario" />
              </Picker>
            </View>
            {touched.genero && errors.genero && (
              <Text className="text-red-500 text-sm">{errors.genero}</Text>
            )}

            <Text>Como podemos te chamar? (Opcional)</Text>
            <TextInput
              placeholder="Esse nome ficará visível para os clientes"
              onChangeText={handleChange('nomeOpcional')}
              onBlur={handleBlur('nomeOpcional')}
              value={values.nomeOpcional}
              className="border border-gray-300 rounded-md p-2"
            />
          </View>

          {/* Botões */}
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity
              onPress={() => console.log('Voltar')}
              className="bg-white border border-blue-500 rounded-md py-2 px-4"
            >
              <Text className="text-blue-500 text-center">
                Voltar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSubmit}
              className={`rounded-md py-2 px-4 ${isValid && dirty ? 'bg-white border border-gray-500' : 'bg-white border border-gray-300'}`}
              disabled={!(isValid && dirty)}
            >
              <Text className={`text-center ${isValid && dirty ? 'text-gray-500' : 'text-gray-400'}`}>
                Continuar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}
