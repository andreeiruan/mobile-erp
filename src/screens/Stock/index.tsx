import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { colors } from '../../styles.global';

import {
  BoxProduct,
  BoxSearch, Column, Container, InputSearch, Row,
  ScrollProducts, TextValue, TextBrand,
  TextName, TextAmount,
} from './styles';

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

const Stock: React.FC = () => {
  const [products, setProducts] = useState<Product[]>();
  const [name, setName] = useState<string>('');

  async function getProducts() {
    const { data } = await api.get('/products', { params: { name } });

    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, [name]);

  return (
    <Container>
      <BoxSearch>
        {/* <TextSearch>Pesquisa</TextSearch> */}
        <InputSearch
          placeholder="Pesquisa ..."
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          keyboardType="email-address"
        />
      </BoxSearch>
      <ScrollProducts>
        {products?.map((p) => (
          <BoxProduct key={p.id} colors={[colors.primaryColor, colors.secondaryColor]}>
            <Row>
              <Column>
                <TextName>{p.brand}</TextName>
                <TextBrand>{p.name}</TextBrand>
              </Column>
              <Column>
                <TextAmount>{p.amount}</TextAmount>
                <TextValue>{`R$ ${p.saleValue}`}</TextValue>
              </Column>
            </Row>
          </BoxProduct>
        ))}
      </ScrollProducts>
    </Container>
  );
};

export default Stock;
