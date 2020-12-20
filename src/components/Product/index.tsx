import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';
import api from '../../services/api';

import { Container } from './styles';

interface Props{
  id: string
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

const Product: React.FC<Props> = ({ id }: Props) => {
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
    <Container>
      <Text>{product?.name}</Text>
    </Container>
  );
};

export default Product;
