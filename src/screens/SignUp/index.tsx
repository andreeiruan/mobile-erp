import React, { useState } from 'react';
import {
  Image,
  Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, View,
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import api from '../../services/api';

import { styles } from './styles';

import LogoPng from '../../assets/logo.png';

import StandardButton from '../../components/StandardButton';
import { colors } from '../../styles.global';
import useAuth from '../../hooks/useAuth';

type RootStackParamList = {
  Login: undefined
  Sales: undefined
}

interface Props{
  navigation: StackNavigationProp<RootStackParamList, 'Sales'>
}

const SignUp: React.FC<Props> = ({ navigation }: Props) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [error, setError] = useState<string>('');
  const [load, setLoad] = useState<boolean>(false);

  const { signIn } = useAuth();

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
      await signIn(data.token);
      return navigation.navigate('Sales');
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
        <LinearGradient
          style={styles.container}
          colors={colors.backgroundLinear}
        >
          <Image style={styles.logo} source={LogoPng} />
          <TextInput
            style={styles.textTitle}
            editable={false}
            placeholder="Registrar-se"
            placeholderTextColor={colors.primaryFontColor}
          />
          <View style={styles.boxForm}>
            <View style={styles.boxInput}>
              <FontAwesome
                name="user"
                size={24}
                color={colors.primaryFontColor}
                style={styles.iconInput}
              />
              <TextInput
                style={styles.input}
                placeholderTextColor={colors.primaryFontColor}
                placeholder="Nome ..."
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                autoCompleteType="name"
                autoCorrect={false}
              />
            </View>
            <View style={styles.boxInput}>
              <Entypo
                name="email"
                size={24}
                color={colors.primaryFontColor}
                style={styles.iconInput}
              />
              <TextInput
                style={styles.input}
                placeholderTextColor={colors.primaryFontColor}
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
                color={colors.primaryFontColor}
                style={styles.iconInput}
              />
              <TextInput
                style={styles.input}
                placeholderTextColor={colors.primaryFontColor}
                placeholder="Senha ..."
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                secureTextEntry
              />
            </View>
            <View style={styles.boxInput}>
              <Entypo
                name="key"
                size={24}
                color={colors.primaryFontColor}
                style={styles.iconInput}
              />
              <TextInput
                style={styles.input}
                placeholderTextColor={colors.primaryFontColor}
                placeholder="Confirme sua senha ..."
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                secureTextEntry
              />
            </View>
          </View>

          <StandardButton onPress={handleSubmit} label="Registrar" load={load} />
          <TextInput
            style={styles.textError}
            editable={false}
            value={error}
          />

        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
