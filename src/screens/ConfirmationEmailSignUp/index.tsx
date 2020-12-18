import React, { useState } from 'react';
import {
  Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback,
} from 'react-native';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import api from '../../services/api';

import {
  BoxForm, Container, Logo, TextTitle, BoxInput, IconInput, Input,
  TextError, TextDescription,
} from './styles';

import StandardButton from '../../components/StandardButton';

import LogoPng from '../../assets/logo.png';
import CodePng from '../../assets/code.png';

type RootStackParamList = {
  SignUp: { userId: string }
  Login: undefined
}

interface Props{
  route: RouteProp<RootStackParamList, 'SignUp'>
  navigation: StackNavigationProp<RootStackParamList, 'Login'>
}

const ConfirmationEmailSignUp: React.FC<Props> = ({ route, navigation }: Props) => {
  const [code, setCode] = useState<string>('');

  const [error, setError] = useState<string>('');
  const [load, setLoad] = useState<boolean>(false);

  async function handleSubmit(): Promise<any> {
    setLoad(true);
    if (!code) {
      setLoad(false);
      return setError('Digite o código de confirmação enviado para seu email');
    }
    try {
      const { data, status } = await api.post('/signup/confirmation', {
        code,
        userId: route.params.userId,
      });

      if (status !== 201) {
        setLoad(false);
        return setError('Houve um erro inesperado, tente novamente');
      }

      console.log(data); // todo: data.token => signIn
      setLoad(false);
      return navigation.navigate('Login');
    } catch {
      setLoad(false);
      return setError('Houve um erro inesperado, tente novamente');
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#F0F0F0' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Logo source={LogoPng} />
          <TextTitle editable={false} placeholder="Confirmação" placeholderTextColor="#2AB5D1" />
          <TextDescription
            editable={false}
            placeholder="Enviamos um código de confirmação para seu email"
            multiline
            placeholderTextColor="#2AB5D1"
          />
          <BoxForm>
            <BoxInput>
              <IconInput source={CodePng} />
              <Input
                placeholder="Código de confirmação..."
                value={code}
                onChangeText={setCode}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                keyboardType="number-pad"
              />
            </BoxInput>
          </BoxForm>

          <StandardButton onPress={handleSubmit} label="Confirmar" load={load} />
          <TextError value={error} multiline />

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ConfirmationEmailSignUp;
