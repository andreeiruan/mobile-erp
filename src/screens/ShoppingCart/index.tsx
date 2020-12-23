import React, { useState } from 'react';
import {
  View, Text, SafeAreaView, TextInput, Platform, ScrollView, TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import api from '../../services/api';
import { useCart } from '../../hooks/useCart';

type RootStackParamList = {
  Sell: undefined
}

interface Props{
  navigation: StackNavigationProp<RootStackParamList, 'Sell'>
}
const ShoppingCart: React.FC<Props> = ({ navigation }) => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(true);
  const [date, setDate] = useState<Date>(new Date());
  const [nameClient, setNameClient] = useState<string>();
  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const {
    cart, removeCart, amountCart, clearCart,
  } = useCart();

  function onChangeDate(event: Event, selectedDate: Date): void {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  }

  async function handleSubmit() {
    if (!nameClient) {
      setError('Diga o nome do cliente');
      return;
    }
    setLoad(true);
    try {
      const { status } = await api.post('/sales', {
        payDate: date.toISOString(),
        nameCliente: nameClient,
        confirmPay: date.getDate() === new Date().getDate()
        && date.getMonth() === new Date().getMonth(),
        products: cart,
      });

      if (status !== 201) {
        setLoad(false);
        setError('Houve um erro inesperado');
        return;
      }

      clearCart();
      setLoad(false);
      navigation.navigate('Sell');
    } catch {
      setLoad(false);
      setError('Houve um erro inesperado');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Nome do cliente ..."
        style={styles.inputNameCliente}
        autoCompleteType="off"
        autoCapitalize="words"
        value={nameClient}
        onChangeText={setNameClient}
      />

      <View style={styles.boxDate}>
        <Text style={styles.labelDate}>Data do pagamento</Text>

        {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour
          mode="date"
          minimumDate={new Date()}
          locale="pt-BR"
          // @ts-ignore
          onChange={onChangeDate}
          style={styles.datePicker}
        />
        )}
      </View>
      <ScrollView style={styles.scrollProducts}>
        {cart.map((p) => (
          <View style={styles.boxProduct} key={p.id}>
            <View style={styles.row}>
              <Text style={styles.nameProduct}>{p.name}</Text>
              <Text style={styles.unitaryValue}>{`R$ ${p.unitaryValue.toFixed(2)}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.amount}>{p.amount}</Text>
              <Text style={styles.discount}>{`R$ - ${p.unitaryDiscount.toFixed(2)}`}</Text>
            </View>
            <Text style={styles.amountValue}>{`R$ ${p.amountTotal.toFixed(2)}`}</Text>
            <Ionicons onPress={() => removeCart(p.id)} name="trash-sharp" size={24} color="black" />
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonSale}
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
      <Text style={styles.textError}>{error}</Text>
    </SafeAreaView>
  );
};

export default ShoppingCart;
