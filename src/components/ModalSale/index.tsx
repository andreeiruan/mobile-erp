import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  ContainerModal, Container, Box, ButtonClose, TextTitle, BoxInfo, TextValueSale,
  BoxValueSale, ScrollProducts, TextDiscount, TextInfo,
} from './styles';
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
    <ContainerModal
      animationType="slide"
      transparent
      visible={visible}
    >
      <Container>
        <Box colors={[colors.backgroundColor, colors.backgroundColor]}>
          <ButtonClose activeOpacity={0.7} onPress={() => setVisible(!visible)}>
            <AntDesign name="closecircleo" size={35} color={colors.primaryColor} />
          </ButtonClose>
          <TextTitle>{sale?.nameCliente}</TextTitle>
          <BoxInfo>
            <TextInfo>{`Data da venda: ${treatDate(saleDate || '')}`}</TextInfo>
            {sale?.confirmPay ? (
              <TextInfo>{`Data do pagamento: ${treatDate(payDate || '')}`}</TextInfo>
            ) : (<TextInfo>{`Pagamento agendado: ${treatDate(payDate || '')}`}</TextInfo>)}
          </BoxInfo>

          <ScrollProducts>
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
          </ScrollProducts>

          <BoxValueSale>
            <TextValueSale>{`R$ ${sale?.saleTotal.toFixed(2)}`}</TextValueSale>
            <TextDiscount>{`Total descontos: R$ ${sale?.discount.toFixed(2)}`}</TextDiscount>
          </BoxValueSale>
        </Box>
      </Container>

    </ContainerModal>
  );
};

export default ModalSale;
