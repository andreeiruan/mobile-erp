import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import {
  View, Text, Modal, TouchableOpacity, TextInput, Keyboard,
  TouchableWithoutFeedback, Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles } from './styles';
import { colors } from '../../styles.global';

interface Product{
  id: string
  name: string
  brand: string
  saleValue: number
  amount: number
  userId: string
  createdAt: Date
  updatedAt: Date
}

interface Props{
  product: Product
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  addCart: any
}

const ModalAddProductCart: React.FC<Props> = ({
  product, visible, setVisible, addCart,
}: Props) => {
  const [amount, setAmount] = useState<number>(0);
  const [amountDeliveried, setAmountDeliveried] = useState<number>(0);
  const [amountValue, setAmountValue] = useState<number>(0);
  const [discount, setDiscount] = useState<number | string>('');
  const [deliveried, setDeliveried] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(true);
  const [date, setDate] = useState<Date>(new Date());

  function onChangeDate(event: Event, selectedDate: Date): void {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  }

  useEffect(() => {
    sumAmountValue(amount);
  }, [discount]);

  function sumAmountValue(amountResult: number) {
    if (discount) {
      setAmountValue(amountResult * (product.saleValue - Number(discount)));
    } else {
      setAmountValue(amountResult * product.saleValue);
    }
  }

  function addAmount() {
    const amountResult = amount + 1;
    setAmount(amountResult);
    sumAmountValue(amountResult);
  }

  function removeAmount() {
    const amountResult = amount - 1;
    setAmount(amountResult);
    sumAmountValue(amountResult);
  }

  function addAmountDeliveried() {
    if (amountDeliveried === amount) {
      setAmountDeliveried(amount);
    } else {
      const amountResult = amountDeliveried + 1;
      setAmountDeliveried(amountResult);
    }
  }

  function removeAmountDeliveried() {
    if (amountDeliveried === 0) {
      setAmountDeliveried(amount);
    } else {
      const amountResult = amountDeliveried - 1;
      setAmountDeliveried(amountResult);
    }
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
    >

      {product ? (
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>

          <View style={styles.container}>

            <View style={styles.row}>

              <View style={styles.boxInfo}>
                <Text style={styles.textNameProduct}>{product.name}</Text>
                <Text style={styles.valueProduct}>{`R$ ${product.saleValue?.toFixed(2)}`}</Text>
              </View>

              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => {
                  setVisible(!visible);
                  setAmount(0);
                  setAmountValue(0);
                  setDiscount(0);
                }}
              >
                <AntDesign name="closecircleo" size={35} color={colors.highlightedFontColor} />
              </TouchableOpacity>

            </View>

            <View style={styles.boxForm}>
              <Text style={styles.labelInput}>Quantidade</Text>

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

              <Text style={styles.labelInput}>Desconto por unidade</Text>

              <TextInput
                style={styles.input}
                placeholderTextColor={colors.secondaryColor}
                keyboardType="decimal-pad"
                value={String(discount)}
                onChangeText={setDiscount}
                placeholder="Digite o desconto ..."
              />

              <View style={styles.boxDeliveried}>

                <TouchableOpacity
                  style={styles.buttonDeliveried}
                  activeOpacity={0.7}
                  onPress={() => setDeliveried(!deliveried)}
                >
                  <View style={styles.boxButtonDeliveried}>
                    <Text style={styles.textButtonDeliveried}>Agendar entrega</Text>
                    <SimpleLineIcons
                      name="arrow-down"
                      size={18}
                      color={colors.primaryFontColor}
                      style={{ marginTop: 5, marginLeft: 5 }}
                    />
                  </View>
                </TouchableOpacity>

                {deliveried && (
                <View style={styles.boxSchedule}>

                  <Text style={styles.labelInput}>Quantidade para entrega</Text>

                  <View style={[styles.boxAmount, { marginLeft: '10%' }]}>

                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.buttonAmount}
                      onPress={removeAmountDeliveried}
                    >
                      <Ionicons name="remove" size={28} color={colors.primaryFontColor} />
                    </TouchableOpacity>

                    <Text style={styles.textAmount}>{amountDeliveried}</Text>

                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.buttonAmount}
                      onPress={addAmountDeliveried}
                    >
                      <Ionicons name="add" size={28} color={colors.primaryFontColor} />
                    </TouchableOpacity>

                  </View>

                  <Text style={styles.labelInput}>Data para entregar</Text>

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

              </View>
            </View>

            <View style={styles.footer}>

              <View style={styles.boxAmountTotal}>
                <Text style={styles.money}>R$</Text>
                <Text style={styles.amountTotal}>{isNaN(amountValue) ? '0.00' : amountValue.toFixed(2)}</Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                disabled={amount === 0}
                onPress={() => {
                  addCart({
                    id: product.id,
                    name: product.name,
                    amount,
                    unitaryValue: product.saleValue,
                    unitaryDiscount: discount === '' ? 0 : discount,
                    amountTotal: amountValue,
                  });
                  setVisible(false);
                  setAmount(0);
                  setAmountValue(0);
                  setDiscount(0);
                }}
              >
                <Ionicons name="add-circle-outline" size={50} color={colors.primaryFontColor} />
              </TouchableOpacity>

            </View>

          </View>

        </TouchableWithoutFeedback>
      ) : (<> </>)}

    </Modal>
  );
};

export default ModalAddProductCart;
