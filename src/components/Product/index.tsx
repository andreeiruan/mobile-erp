import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import api from '../../services/api';
import { colors } from '../../styles.global';

import { styles } from './styles';

interface Props{
  id: string,
  unitaryValue: number
  amount: number
  discount: number
}

interface IProduct{
  id: string
  name: string
  brand: string
  saleValue: number
  amount: number
  userId: string
  createdAt: string
  updatedAt: string
}

const Product: React.FC<Props> = ({
  id, unitaryValue, amount, discount,
}: Props) => {
  const [product, setProduct] = useState<IProduct | null>();

  async function getProduct() {
    const { data } = await api.get(`/products/${id}`);

    setProduct(data);
  }
  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, []);
  return (
    <View style={styles.boxProduct}>
      <View style={styles.row}>
        <Text style={styles.nameProduct}>{product?.name}</Text>

        <Text style={[styles.text, { color: colors.secondaryFontColor }]}>{`R$ ${unitaryValue.toFixed(2)}`}</Text>
      </View>

      <Text style={styles.text}>{`Desconto por unidade: R$ ${discount.toFixed(2)}`}</Text>

      <View style={styles.row}>
        <Text style={styles.text}>{`Quantidade: ${amount}`}</Text>
        <Text style={styles.text}>{`Total: R$ ${Number(amount * (unitaryValue - discount)).toFixed(2)}`}</Text>
      </View>
    </View>
  );
};

export default Product;
