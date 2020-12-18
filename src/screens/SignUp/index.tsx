import React, { useState } from 'react';
import {
  Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback,
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import api from '../../services/api';

import {
  BoxForm, Container, Logo, TextTitle, BoxInput, IconInput, Input,
  TextError,
} from './styles';

import LogoPng from '../../assets/logo.png';
import AtPng from '../../assets/at.png';
import PassPng from '../../assets/pass.png';
import UserPng from '../../assets/user.png';
import StandardButton from '../../components/StandardButton';

type RootStackParamList = {
  Login: undefined
  ConfirmationEmailSignUp: { userID: string }
}

interface Props{
  navigation: StackNavigationProp<RootStackParamList, 'ConfirmationEmailSignUp'>
}

const SignUp: React.FC<Props> = ({ navigation }: Props) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [error, setError] = useState<string>('');
  const [load, setLoad] = useState<boolean>(false);

  async function handleSubmit(): Promise<any> {
    setLoad(true);

    if (!name) {
      setLoad(false);
      return setError('Insira seu nome');
    }

    if (!email) {
      setLoad(false);
      return setError('Insira seu email');
    }

    if (!email.includes('@') || !email.includes('.com')) {
      setLoad(false);
      return setError('Insira um email válido');
    }

    if (!password) {
      setLoad(false);
      return setError('Insira uma senha');
    }

    if (password !== confirmPassword) {
      setLoad(false);
      return setError('As senhas não batem');
    }
    try {
      const { data, status } = await api.post('/signup', {
        name,
        email,
        password,
        confirmPassword,
      });

      if (status === 409) {
        setLoad(false);
        return setError('Email já cadastrado, tente outro');
      }

      if (status !== 201) {
        setLoad(false);
        return setError('Houve um erro inesperado, tente novamente');
      }

      setLoad(false);
      return navigation.navigate('ConfirmationEmailSignUp', { userID: data.id });
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
          <TextTitle editable={false} placeholder="Registrar-se" placeholderTextColor="#2AB5D1" />
          <BoxForm>
            <BoxInput>
              <IconInput source={UserPng} />
              <Input
                placeholder="Nome ..."
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                autoCompleteType="name"
                autoCorrect={false}
              />
            </BoxInput>
            <BoxInput>
              <IconInput source={AtPng} />
              <Input
                placeholder="Email ..."
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="email"
                keyboardType="email-address"
              />
            </BoxInput>
            <BoxInput>
              <IconInput source={PassPng} />
              <Input
                placeholder="Senha ..."
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                secureTextEntry
              />
            </BoxInput>
            <BoxInput>
              <IconInput source={PassPng} />
              <Input
                placeholder="Confirme sua senha ..."
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                secureTextEntry
              />
            </BoxInput>
          </BoxForm>

          <StandardButton onPress={handleSubmit} label="Registrar" load={load} />
          <TextError value={error} />

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
