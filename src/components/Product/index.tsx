import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { BoxProduct, TextProduct } from './styles';

interface Props{
  id: string,
  unitaryValue: number
  amount: number
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

const Product: React.FC<Props> = ({ id, unitaryValue, amount }: Props) => {
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
    <BoxProduct>
      <TextProduct>{product?.name}</TextProduct>
      <TextProduct style={{ marginLeft: '10%' }}>{`R$ ${unitaryValue}`}</TextProduct>
      <TextProduct style={{ marginLeft: '38%' }}>{amount}</TextProduct>
    </BoxProduct>
  );
};

export default Product;
