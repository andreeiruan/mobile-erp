import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';

import { useCart } from '../../hooks/useCart';
import api from '../../services/api';
import { colors } from '../../styles.global';

import { styles } from './styles';

type RootParamList = {
  RegisterStock: undefined
}

interface Props {
  navigation: StackNavigationProp<RootParamList>
}

const NewProduct: React.FC<Props> = ({ navigation }) => {
  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState<string>();
  const [saleValue, setSaleValue] = useState<number | string>('');
  const [unitaryValue, setUnitaryValue] = useState<number | string>('');

  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const { addCart } = useCart();

  function addAmount() {
    const amountResult = amount + 1;
    setAmount(amountResult);
  }

  function removeAmount() {
    const amountResult = amount - 1;
    if (amountResult < 1) {
      setAmount(1);
      return;
    }
    setAmount(amountResult);
  }

  async function handleSave() {
    if (!name) {
      setError('O produto precisa de um nome');
      return;
    }

    if (!saleValue) {
      setError('O produto precisa de um valor de venda');
      return;
    }

    if (!unitaryValue) {
      setError('Diga quanto você pagou pelo produto');
      return;
    }

    if (!amount || amount === 0) {
      setError('Diga a quantidade do produto nessa compra');
      return;
    }

    try {
      setLoad(true);
      const { data, status } = await api.post('/products', {
        name,
        brand: 'nothing',
        saleValue,
        amount: 0,
      });

      if (status !== 201) {
        setError('Houve um erro inesperado');
        setLoad(false);
        return;
      }

      addCart({
        name,
        amount,
        id: data.id,
        unitaryValue: Number(unitaryValue),
        amountTotal: amount * Number(unitaryValue),
      });

      setLoad(false);
      navigation.navigate('RegisterStock');
    } catch {
      setError('Houve um erro inesperado');
    }
  }

  return (
    <View style={styles.container}>

      <LinearGradient colors={colors.primaryColorLinear} style={styles.header}>
        <Text style={styles.title}>Novo produto</Text>
      </LinearGradient>

      <View style={styles.boxForm}>

        <View style={styles.boxInput}>
          <Text style={styles.label}>Nome do Produto</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do produto"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.boxInput}>
          <Text style={styles.label}>Valor unitário da compra</Text>
          <TextInput
            style={styles.input}
            placeholder="Valor unitário da compra"
            value={String(unitaryValue)}
            onChangeText={setUnitaryValue}
          />
        </View>

        <View style={styles.boxInput}>
          <Text style={styles.label}>Valor de Venda</Text>
          <TextInput
            style={styles.input}
            placeholder="Valor de Venda"
            value={String(saleValue)}
            onChangeText={setSaleValue}
          />
        </View>

        <View style={styles.boxInput}>
          <Text style={styles.label}>Quantidade comprada</Text>
          <View style={styles.boxAmount}>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonAmount}
              onPress={removeAmount}
            >
              <Ionicons name="remove" size={28} color={colors.primaryFontColor} />
            </TouchableOpacity>

            <Text style={styles.textAmount}>{amount}</Text>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonAmount}
              onPress={addAmount}
            >
              <Ionicons name="add" size={28} color={colors.primaryFontColor} />
            </TouchableOpacity>

          </View>

        </View>

      </View>

      <TouchableOpacity
        disabled={!!load}
        style={styles.buttonSave}
        onPress={handleSave}
        activeOpacity={0.7}
      >
        <LinearGradient colors={colors.primaryColorLinear} style={styles.buttonSave}>
          <Text style={styles.textSave}>
            Salvar produto
          </Text>
          <Text style={styles.textSave}>
            e adicionar ao carrinho
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.textError}>{error}</Text>

    </View>
  );
};

export default NewProduct;
