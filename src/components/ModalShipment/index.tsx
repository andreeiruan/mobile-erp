import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  Modal, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
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

interface IShipment{
  id: string
  amountValue: number
  provider: string
  userId: string
  shipmentProducts: IProduct[]
  createdAt: string
  updatedAt: string
}

interface Props{
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  shipment: IShipment | undefined
}

const ModalShipment: React.FC<Props> = ({ visible, setVisible, shipment }: Props) => {
  const [shipmentDate, setShipmentDate] = useState<string | null>();

  useEffect(() => {
    if (shipment?.createdAt) {
      setShipmentDate(new Date(shipment?.createdAt).toLocaleDateString());
    }
  }, [shipment]);

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
              <Text style={styles.textProvider}>{shipment?.provider}</Text>
              <View style={styles.boxInfoShipment}>
                <Text style={styles.textInfo}>{`Data da compra: ${shipmentDate}`}</Text>
                <Text style={styles.textInfo}>{`Valor total: ${shipment?.amountValue.toFixed(2)}`}</Text>
              </View>

            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setVisible(!visible)}
              style={styles.buttonClose}
            >
              <AntDesign
                name="closecircleo"
                size={45}
                style={{ marginTop: -25 }}
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
            {shipment ? (
              <>
                {shipment.shipmentProducts.map((product) => (
                  <Product
                    key={product.id}
                    id={product.productId}
                    unitaryValue={product.unitaryValue}
                    amount={product.amount}
                  />
                ))}
              </>
            ) : <></>}
          </ScrollView>

          {/* <LinearGradient colors={colors.primaryColorLinear} style={styles.footer}>
            <Text style={styles.textSaleTotal}>{`R$ ${sale?.saleTotal.toFixed(2)}`}</Text>
            <Text style={styles.textDiscount}>{`Descontos: R$ ${sale?.discount.toFixed(2)}`}</Text>
          </LinearGradient> */}
        </View>
      </View>
    </Modal>
  );
};

export default ModalShipment;
