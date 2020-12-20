import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { AntDesign, FontAwesome, Foundation } from '@expo/vector-icons';

import {
  ContainerModal, Container, Box, ButtonClose, Row, TextInfo, BoxInfo,
} from './styles';
import api from '../../services/api';
import Product from '../Product';

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
  updatedAt: string
}

interface Props{
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  idSale: string
}

const ModalSale: React.FC<Props> = ({ visible, setVisible, idSale }: Props) => {
  const [sale, setSale] = useState<Sale | null >();
  const [saleDate, setSaleDate] = useState<string | null>();

  async function getSale() {
    const { data } = await api.get(`/sales/${idSale}`);

    setSale(data);

    if (sale?.createdAt) {
      setSaleDate(new Date(sale?.createdAt).toLocaleDateString());
    }
  }

  useEffect(() => {
    if (idSale) {
      getSale();
    }
  }, [idSale]);

  return (
    <ContainerModal
      animationType="slide"
      transparent
      visible={visible}
    >
      <Container>
        <Box>
          <ButtonClose activeOpacity={0.7} onPress={() => setVisible(!visible)}>
            <AntDesign name="closecircleo" size={35} color="#fff" />
          </ButtonClose>
          <Row>
            <BoxInfo>
              <FontAwesome name="user-o" size={40} color="#fff" />
              <TextInfo>{sale?.nameCliente}</TextInfo>
            </BoxInfo>
            <BoxInfo>
              <FontAwesome name="money" size={40} color="#fff" />
              {sale ? <TextInfo>{`R$ ${sale?.saleTotal.toFixed(2)}`}</TextInfo> : <></>}
            </BoxInfo>
            {/* <TextInfo>{`R$ ${sale?.saleTotal.toFixed(2)}`}</TextInfo> */}
          </Row>
          <Row>
            <BoxInfo>
              <Foundation name="calendar" size={40} color="#fff" />
              <TextInfo>{saleDate}</TextInfo>
            </BoxInfo>
            <BoxInfo>
              <Foundation name="calendar" size={40} color="#fff" />
              <TextInfo>{sale?.payDate}</TextInfo>
            </BoxInfo>
          </Row>
          {sale ? (
            <>
              {sale.salesProducts.map((product) => (
                <Product key={product.id} id={product.productId} />
              ))}
            </>
          ) : <></>}
        </Box>
      </Container>

    </ContainerModal>
  );
};

export default ModalSale;
