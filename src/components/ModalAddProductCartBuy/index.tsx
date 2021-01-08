import { AntDesign, Ionicons } from '@expo/vector-icons';
import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import {
  View, Text, Modal, TouchableOpacity, Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
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

const ModalAddProductCartBuy: React.FC<Props> = ({
  product, visible, setVisible, addCart,
}: Props) => {
  const [amount, setAmount] = useState<number>(0);
  const [amountValue, setAmountValue] = useState<number>(0);
  const [unitaryValue, setUnitaryValue] = useState<number | string>('');
  const [discount, setDiscount] = useState<number | string>('');

  useEffect(() => {
    sumAmountValue(amount);
  }, [discount, unitaryValue, amount]);

  function sumAmountValue(amountResult: number) {
    setAmountValue(amountResult * Number(unitaryValue));
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

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
    >

      {product ? (
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>

          <View style={styles.container}>

            <View style={styles.row}>

              <View style={styles.boxInfo}>
                <Text style={styles.textNameProduct}>{product.name}</Text>
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
                <AntDesign name="closecircleo" size={40} color={colors.titleFontColor} />
              </TouchableOpacity>

            </View>

            <View style={styles.boxForm}>

              <Text style={styles.labelInput}>Valor unitário</Text>
              <TextInput
                value={String(unitaryValue)}
                onChangeText={setUnitaryValue}
                placeholder="Valor unitário"
                style={styles.input}
              />

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
                  setUnitaryValue('');
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

export default ModalAddProductCartBuy;
