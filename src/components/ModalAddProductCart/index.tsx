import { AntDesign, Ionicons } from '@expo/vector-icons';
import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';

import {
  View, Text, Modal, TouchableOpacity, TextInput,
} from 'react-native';

import { styles } from './styles';

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
  const [amountValue, setAmountValue] = useState<number>(0);
  const [discount, setDiscount] = useState<number | string>('');

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

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
    >
      {product ? (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => {
              setVisible(!visible);
              setAmount(0);
              setAmountValue(0);
              setDiscount(0);
            }}
          >
            <AntDesign name="closecircleo" size={35} color="#fff" />
          </TouchableOpacity>
          <View style={styles.boxInfo}>
            <Text style={styles.textNameProduct}>{product.name}</Text>
            <Text style={styles.valueProduct}>{`R$ ${product.saleValue?.toFixed(2)}`}</Text>
          </View>
          <TextInput
            style={styles.inputDiscount}
            placeholderTextColor="#fff"
            keyboardType="decimal-pad"
            value={String(discount)}
            onChangeText={setDiscount}
            placeholder="Desconto por unidade..."
          />
          <View style={styles.boxAmount}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonAmount}
              onPress={removeAmount}

            >
              <Ionicons name="ios-remove-circle-outline" size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.textAmount}>{amount}</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonAmount}
              onPress={addAmount}
            >
              <Ionicons name="add-circle-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={styles.boxAmountTotal}>
              <Text style={styles.money}>R$</Text>
              <Text style={styles.amountTotal}>{isNaN(amountValue) ? '0.00' : amountValue.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonAmount}
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
              <Ionicons name="add-circle-outline" size={35} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (<> </>)}

    </Modal>
  );
};

export default ModalAddProductCart;
