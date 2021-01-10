import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  Modal, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import Product from '../Product';
import { colors } from '../../styles.global';

interface IProduct{
  id: string
  unitaryValue: number
  discountUnitary: number
  amount: number
  userId: string
  productId: string
  saleId: string
  createdAt: string
  updatedAt: string
}

interface Sale{
  id: string
  payDate: string
  saleTotal: number
  discount: number
  userId: string
  confirmPay: boolean
  nameCliente: string
  salesProducts: IProduct[]
  createdAt: string
  updatedAt: string,
  partialPayment: boolean
  remainingAmount: number | null
  amountPaid: number | null
}

interface Props{
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  sale: Sale | undefined
}

const ModalSale: React.FC<Props> = ({ visible, setVisible, sale }: Props) => {
  const [saleDate, setSaleDate] = useState<string | null>();
  const [payDate, setPayDate] = useState<string | null>();

  useEffect(() => {
    if (sale?.createdAt) {
      setSaleDate(new Date(sale?.createdAt).toLocaleDateString());
    }

    if (sale?.payDate) {
      setPayDate(new Date(sale?.payDate).toLocaleDateString());
    }
  }, [sale]);

  return (
    <Modal
      animationType="slide"
      transparent
      style={styles.containerModal}
      visible={visible}
    >
      <View
        style={styles.box}
      >

        <View style={styles.container}>
          <View style={styles.row}>
            <View
              style={styles.boxInfo}
            >
              <Text style={styles.textNameClient}>{sale?.nameCliente}</Text>
              <View style={styles.boxInfoSale}>
                <Text style={styles.textInfo}>{`Data da venda: ${saleDate}`}</Text>
                <Text style={styles.textInfo}>
                  {`Pagamento: ${sale?.partialPayment ? 'Parcial' : sale?.confirmPay ? 'Pago' : 'Agendado'}`}
                </Text>

                {sale?.partialPayment ? (
                  <View style={styles.boxPartial}>
                    <View style={styles.boxDate}>
                      <Text style={styles.textInfo}>{`Pago: R$ ${sale.amountPaid?.toFixed(2)}`}</Text>
                      <Text style={styles.textInfo}>{`Data: ${saleDate}`}</Text>
                    </View>
                    <View style={styles.boxDate}>
                      <Text style={styles.textInfo}>{`Falta: R$ ${sale.remainingAmount?.toFixed(2)}`}</Text>
                      <Text style={styles.textInfo}>{`Data: ${payDate}`}</Text>
                    </View>
                  </View>
                ) : (
                  <>
                    {sale?.confirmPay
                      ? (<Text style={styles.textInfo}>{`Data do Pagamento: ${payDate}`}</Text>)
                      : (<Text style={styles.textInfo}>{`Agendado para: ${payDate}`}</Text>)}
                  </>
                )}

              </View>

            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setVisible(!visible)}
              style={styles.buttonClose}
            >
              <AntDesign
                name="closecircleo"
                size={35}
                style={{ marginTop: -15 }}
                color={colors.titleFontColor}
              />
            </TouchableOpacity>

          </View>
          <ScrollView style={{
            width: '100%',
            backgroundColor: colors.menuColor,
            marginTop: 15,
          }}
          >
            {sale ? (
              <>
                {sale.salesProducts.map((product) => (
                  <Product
                    key={product.id}
                    id={product.productId}
                    unitaryValue={product.unitaryValue}
                    amount={product.amount}
                    discount={product.discountUnitary}
                  />
                ))}
              </>
            ) : <></>}
          </ScrollView>

          <LinearGradient colors={colors.primaryColorLinear} style={styles.footer}>
            <Text style={styles.textSaleTotal}>{`R$ ${sale?.saleTotal.toFixed(2)}`}</Text>
            <Text style={styles.textDiscount}>{`Descontos: R$ ${sale?.discount.toFixed(2)}`}</Text>
          </LinearGradient>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSale;
