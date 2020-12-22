import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View, Text, SafeAreaView, TextInput, Platform, ScrollView, TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';
import api from '../../services/api';

type RootStackParamList = {
  Sell: { products: ProductOnCart[], amountCart: number }
}

interface ProductOnCart{
  id: string
  name: string
  amount: number
  unitaryValue: number
  unitaryDiscount: number
  amountTotal: number
}

interface Props{
  route: RouteProp<RootStackParamList, 'Sell'>
  navigation: StackNavigationProp<RootStackParamList, 'Sell'>
}
const ShoppingCart: React.FC<Props> = ({ route, navigation }) => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(true);
  const [date, setDate] = useState<Date>(new Date());
  const [nameClient, setNameClient] = useState<string>();
  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const { products, amountCart } = route.params;

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
        products,
      });

      if (status !== 201) {
        setLoad(false);
        setError('Houve um erro inesperado');
        return;
      }

      setLoad(false);
      // @ts-ignore
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
        {products.map((p) => (
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
