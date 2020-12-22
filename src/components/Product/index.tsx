import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import {
  BoxProduct, NameProduct, TextProduct, Row,
} from './styles';

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
    <BoxProduct>
      <NameProduct>{product?.name}</NameProduct>
      <Row>
        <TextProduct>{`Quantidade: ${amount}`}</TextProduct>
        <TextProduct>{`Valor unitário: R$ ${unitaryValue}`}</TextProduct>
      </Row>
      <TextProduct>{`Desconto por unidade: R$ ${discount.toFixed(2)}`}</TextProduct>
    </BoxProduct>
  );
};

export default Product;
