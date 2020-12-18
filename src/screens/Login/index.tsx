import React, { useState } from 'react';
import {
  Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback,
} from 'react-native';

import api from '../../services/api';

import {
  BoxForm, Container, Logo, TextTitle, BoxInput, IconInput, Input,
  TextError,
  TextForgotPassword,
  ButtonForgotPassword,
  ButtonSignUp,
  TextSignUp,
} from './styles';

import LogoPng from '../../assets/logo.png';
import AtPng from '../../assets/at.png';
import PassPng from '../../assets/pass.png';
import StandardButton from '../../components/StandardButton';
import useAuth from '../../hooks/useAuth';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [load, setLoad] = useState<boolean>(false);

  const { signIn } = useAuth();

  async function handleSubmit(): Promise<any> {
    setLoad(true);
    if (!email) {
      setLoad(false);
      return setError('Insira seu email');
    }

    if (!pass) {
      setLoad(false);
      return setError('Insira sua senha');
    }

    try {
      const { data, status } = await api.post('/signin', { email, password: pass });

      if (status === 404) {
        setLoad(false);
        return setError('Usuário não encontrado');
      }

      if (status === 401) {
        setLoad(false);
        return setError('Email ou senha inválidos');
      }

      setLoad(false);
      await signIn(data.token);
      return data;
    } catch {
      setLoad(false);
      return setError('Houve um erro inesperado');
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, width: '100%', backgroundColor: '#F0F0F0' }}
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Logo source={LogoPng} />
          <TextTitle editable={false} placeholder="Login" placeholderTextColor="#2AB5D1" />
          <BoxForm>

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
                value={pass}
                onChangeText={setPass}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                secureTextEntry
              />
            </BoxInput>

          </BoxForm>

          <StandardButton onPress={handleSubmit} label="Entrar" load={load} />
          <TextError editable={false} value={error} />

          <ButtonForgotPassword activeOpacity={0.7}>
            <TextForgotPassword>Esqueceu sua senha?</TextForgotPassword>
          </ButtonForgotPassword>

          <ButtonSignUp activeOpacity={0.7}>
            <TextSignUp>Não tem uma conta? Registre-se</TextSignUp>
          </ButtonSignUp>

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
