import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { AntDesign } from '@expo/vector-icons';

import {
  ContainerModal, Container, Box, ButtonClose, Row, TextInfo, BoxInfo,
  TableHeader, TextTableHeader, Hr,
} from './styles';
import api from '../../services/api';
import Product from '../Product';
import { treatDate } from '../../utils/treats';
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
  const [payDate, setPayDate] = useState<string | null>();

  async function getSale() {
    const { data } = await api.get(`/sales/${idSale}`);

    setSale(data);

    if (sale?.createdAt) {
      setSaleDate(new Date(sale?.createdAt).toLocaleDateString());
    }

    if (sale?.payDate) {
      setPayDate(new Date(sale?.payDate).toLocaleDateString());
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
        <Box colors={[colors.borderColors, '#5D6F6D']}>
          <ButtonClose activeOpacity={0.7} onPress={() => setVisible(!visible)}>
            <AntDesign name="closecircleo" size={35} color="#fff" />
          </ButtonClose>
          <Row>
            <BoxInfo>
              <TextInfo>{sale?.nameCliente}</TextInfo>
            </BoxInfo>
            <BoxInfo>
              {sale ? <TextInfo>{`R$ ${sale?.saleTotal.toFixed(2)}`}</TextInfo> : <></>}
            </BoxInfo>
          </Row>
          <Row>
            <BoxInfo>
              <TextInfo>Descontos</TextInfo>
            </BoxInfo>

            <BoxInfo>
              {sale ? <TextInfo>{`R$ ${sale?.discount.toFixed(2)}`}</TextInfo> : <></>}
            </BoxInfo>
          </Row>
          {saleDate ? (
            <Row>
              <BoxInfo>
                <TextInfo>Data da venda</TextInfo>
              </BoxInfo>
              <BoxInfo>
                {/* @ts-ignore */}
                <TextInfo>{treatDate(saleDate)}</TextInfo>
              </BoxInfo>
            </Row>
          ) : (<></>)}
          {payDate ? (
            <Row>
              <BoxInfo>
                <TextInfo>Data do pagamento</TextInfo>
              </BoxInfo>
              <BoxInfo>
                {/* @ts-ignore */}
                <TextInfo>{treatDate(payDate)}</TextInfo>
              </BoxInfo>
            </Row>
          ) : (<></>)}

          <TableHeader>
            <TextTableHeader>Produto</TextTableHeader>
            <TextTableHeader>Valor Unitário</TextTableHeader>
            <TextTableHeader>Qntd</TextTableHeader>
          </TableHeader>
          <Hr />
          {sale ? (
            <>
              {sale.salesProducts.map((product) => (
                <Product
                  key={product.id}
                  id={product.productId}
                  unitaryValue={product.unitaryValue}
                  amount={product.amount}
                />
              ))}
            </>
          ) : <></>}
        </Box>
      </Container>

    </ContainerModal>
  );
};

export default ModalSale;
