import React, { useState } from 'react';
import {
  Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback,
  Image, View, TouchableOpacity, Text,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import api from '../../services/api';

import { styles } from './styles';

import LogoPng from '../../assets/logo.png';

import StandardButton from '../../components/StandardButton';

import useAuth from '../../hooks/useAuth';
import { colors } from '../../styles.global';

type RootStackParamList = {
  SignUp: undefined
  Sales: undefined
}

interface Props{
  navigation: StackNavigationProp<RootStackParamList, 'SignUp'>
}

const Login: React.FC<Props> = ({ navigation }: Props) => {
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
      return navigation.navigate('Sales');
    } catch {
      setLoad(false);
      return setError('Houve um erro inesperado');
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, width: '100%' }}
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={colors.backgroundLinear}
          style={styles.container}
        >
          <Image source={LogoPng} style={styles.logo} />
          <TextInput
            style={styles.textTitle}
            editable={false}
            placeholder="Login"
            placeholderTextColor={colors.primaryFontColor}
          />
          <View style={styles.boxForm}>

            <View style={styles.boxInput}>
              <Entypo
                name="email"
                size={24}
                color={colors.secondaryFontColor}
                style={styles.iconInput}
              />
              <TextInput
                style={styles.input}
                placeholderTextColor={colors.secondaryFontColor}
                placeholder="Email ..."
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                autoCompleteType="email"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.boxInput}>
              <Entypo
                name="key"
                size={24}
                style={styles.iconInput}
                color={colors.secondaryFontColor}
              />
              <TextInput
                style={styles.input}
                placeholderTextColor={colors.secondaryFontColor}
                placeholder="Senha ..."
                value={pass}
                onChangeText={setPass}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                secureTextEntry
              />
            </View>

          </View>

          <StandardButton onPress={handleSubmit} label="Entrar" load={load} />
          <TextInput
            style={styles.textError}
            editable={false}
            value={error}
          />

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.textForgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.textSignUp}>Não tem uma conta? Registre-se</Text>
          </TouchableOpacity>

        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
