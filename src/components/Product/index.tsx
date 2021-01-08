import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import api from '../../services/api';

import { styles } from './styles';

interface Props{
  id: string,
  unitaryValue: number
  amount: number
  discount?: number
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
}) => {
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
      </View>
      {discount !== undefined ? (
        <Text style={styles.text}>
          { `Valor da venda R$ ${unitaryValue.toFixed(2)}`}
        </Text>
      ) : (
        <Text style={styles.text}>
          { `Valor da compra R$ ${unitaryValue.toFixed(2)}`}
        </Text>
      )}

      {discount ? (
        <>
          <Text style={styles.text}>{`Desconto por unidade: R$ ${discount.toFixed(2)}`}</Text>
          <View style={styles.row}>
            <Text style={styles.text}>{`Quantidade: ${amount}`}</Text>
            <Text style={styles.text}>
              {`Total: R$ ${Number(amount * (unitaryValue - discount)).toFixed(2)}`}
            </Text>
          </View>
        </>
      ) : (<></>)}

      {!discount && (
        <>
          <Text style={styles.text}>{`Valor de venda: R$ ${product?.saleValue.toFixed(2)}`}</Text>
          <View style={styles.row}>
            <Text style={styles.text}>{`Quantidade: ${amount}`}</Text>
            <Text style={styles.text}>{`Total: R$ ${Number(amount * unitaryValue).toFixed(2)}`}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Product;
