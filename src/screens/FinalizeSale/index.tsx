import React, { useState } from 'react';
import {
  View, Text, TextInput, Platform, ScrollView, TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import api from '../../services/api';
import { useCart } from '../../hooks/useCart';
import { colors } from '../../styles.global';
import ModalLoad from '../../components/ModalLoad';

type RootStackParamList = {
  Sell: undefined
}

type TypesPayment = 'Pagar Hoje' | 'Agendar Pagamento' | 'Pagamento Parcial'

interface Props{
  navigation: StackNavigationProp<RootStackParamList, 'Sell'>
}
const FinalizeSale: React.FC<Props> = ({ navigation }) => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(true);
  const [date, setDate] = useState<Date>(new Date());
  const [nameClient, setNameClient] = useState<string>();
  const [load, setLoad] = useState<boolean>(false);
  const [showSelectPayment, setshowSelectPayment] = useState<boolean>(false);
  const [selectPayment, setSelectPayment] = useState<TypesPayment | undefined>();
  const [error, setError] = useState<string>();
  const [remainingAmount, setRemainingAmount] = useState<string >('');
  const [amountPaid, setAmountPaid] = useState<string >('');

  const {
    cart, amountCart, clearCart,
  } = useCart();

  function handleAmountPaid(value: string) {
    setAmountPaid(value);
    setRemainingAmount(String(Number(amountCart - Number(value)).toFixed(2)));
  }

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

    if (!selectPayment) {
      setError('Selecione o pagamento');
      return;
    }

    let payDate: Date = new Date();
    if (selectPayment === 'Agendar Pagamento' || selectPayment === 'Pagamento Parcial') {
      payDate = date;
    }

    if (selectPayment === 'Pagamento Parcial') {
      if (!amountPaid) {
        setError('Diga o valor que será pago na venda');
        return;
      }
      if (!remainingAmount) {
        setError('Diga o valor que faltará ser pago');
        return;
      }
    }

    setLoad(true);
    try {
      const { status } = await api.post('/sales', {
        payDate: payDate.toISOString(),
        nameCliente: nameClient,
        confirmPay: selectPayment === 'Pagar Hoje',
        partialPayment: selectPayment === 'Pagamento Parcial',
        products: cart,
        amountPaid: selectPayment === 'Pagamento Parcial' ? amountPaid : null,
        remainingAmount: selectPayment === 'Pagamento Parcial' ? remainingAmount : null,
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
    <LinearGradient
      colors={colors.backgroundLinear}
      style={styles.container}
    >
      <ModalLoad visible={load} />
      <LinearGradient colors={colors.primaryColorLinear} style={styles.header}>
        <Text style={styles.title}>Finalize a venda</Text>
      </LinearGradient>

      <ScrollView style={styles.scroll}>

        <View style={styles.boxInput}>
          <Text style={styles.label}>Nome cliente</Text>
          <TextInput
            placeholder="Nome do cliente ..."
            style={styles.input}
            autoCompleteType="off"
            autoCapitalize="words"
            value={nameClient}
            onChangeText={setNameClient}
          />
        </View>

        <View style={styles.boxInput}>
          <Text style={styles.label}>Pagamento</Text>
          <TouchableOpacity
            onPress={() => setshowSelectPayment(!showSelectPayment)}
            style={styles.buttonSelect}
          >
            <Text style={styles.textSelect}>{selectPayment || 'Selecionar Pagamento'}</Text>
          </TouchableOpacity>
          {showSelectPayment && (
          <Picker
            style={styles.inputSelect}
            selectedValue={selectPayment}
            mode="dialog"
            onValueChange={(value) => {
              // @ts-ignore
              setSelectPayment(String(value));
              setshowSelectPayment(false);
            }}
          >
            <Picker.Item label="Pagar hoje" value="Pagar Hoje" />
            <Picker.Item label="Agendar Pagamento" value="Agendar Pagamento" />
            <Picker.Item label="Pagamento Parcial" value="Pagamento Parcial" />
          </Picker>
          )}
        </View>

        {selectPayment === 'Agendar Pagamento' && (
          <View style={styles.boxInput}>
            <Text style={styles.label}>Data do pagamento</Text>

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
        )}

        {selectPayment === 'Pagamento Parcial' && (
          <>
            <View style={styles.boxInput}>
              <Text style={styles.label}>Pagando Hoje</Text>
              <TextInput
                placeholder="Valor pago na venda ..."
                keyboardType="decimal-pad"
                style={styles.input}
                autoCompleteType="off"
                autoCapitalize="words"
                value={amountPaid}
                onChangeText={handleAmountPaid}
              />
            </View>

            <View style={styles.boxInput}>
              <Text style={styles.label}>Data para pagar valor restante</Text>

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

            <View style={styles.boxInput}>
              <Text style={styles.label}>Valor restante à ser pago</Text>
              <TextInput
                placeholder="Valor restante ..."
                style={styles.input}
                autoCompleteType="off"
                autoCapitalize="words"
                keyboardType="decimal-pad"
                editable={false}
                value={remainingAmount}
                onChangeText={setRemainingAmount}
              />
            </View>
          </>
        )}

      </ScrollView>
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

export default FinalizeSale;
