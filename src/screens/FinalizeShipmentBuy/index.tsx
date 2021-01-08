import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import api from '../../services/api';
import { useCart } from '../../hooks/useCart';
import { colors } from '../../styles.global';
import ModalLoad from '../../components/ModalLoad';

type RootStackParamList = {
  StockControl: undefined
}

interface Props{
  navigation: StackNavigationProp<RootStackParamList, 'StockControl'>
}
const FinalizeShipmentBuy: React.FC<Props> = ({ navigation }) => {
  const [Provider, setProvider] = useState<string>();
  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const {
    cart, amountCart, clearCart,
  } = useCart();

  async function handleSubmit() {
    if (!Provider) {
      setError('Diga onde você comprou esses produtos');
      return;
    }

    setLoad(true);
    try {
      const { status } = await api.post('/shipments', {
        products: cart,
        provider: Provider,
      });

      if (status !== 201) {
        setLoad(false);
        setError('Houve um erro inesperado');
        return;
      }

      clearCart();
      setLoad(false);
      navigation.navigate('StockControl');
    } catch {
      setLoad(false);
      setError('Houve um erro inesperado');
    }
  }

  return (
    <LinearGradient
      colors={colors.backgroundLinear}
      style={styles.container}
    >
      <ModalLoad visible={load} />
      <LinearGradient colors={colors.primaryColorLinear} style={styles.header}>
        <Text style={styles.title}>Finalize a remessa</Text>
      </LinearGradient>

      <View style={styles.boxInput}>
        <Text style={styles.label}>Fornecedor</Text>
        <TextInput
          placeholder="Fornecedor"
          style={styles.input}
          autoCompleteType="off"
          autoCapitalize="words"
          value={Provider}
          onChangeText={setProvider}
        />
      </View>

      <LinearGradient
        colors={colors.secondaryColorLinear}
        style={styles.buttonSale}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleSubmit}
          disabled={load}
        >
          <>
            <View style={styles.boxPriceText}>
              <Text style={styles.money}>R$</Text>
              <Text style={styles.priceCart}>{amountCart.toFixed(2)}</Text>
            </View>
            <Text style={styles.textButtonSale}>Finalizar Venda</Text>
          </>
        </TouchableOpacity>
      </LinearGradient>
      <Text style={styles.textError}>{error}</Text>
    </LinearGradient>
  );
};

export default FinalizeShipmentBuy;
