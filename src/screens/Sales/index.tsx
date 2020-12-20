import React, { useEffect, useState } from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import api from '../../services/api';

import {
  Container, BoxInfoSales,
  TextAmountSales, BoxSelectMonth, ButtonPN,
  TextButton, ButtonMonth, ScrollSale, BoxSale,
  TextSale, ButtonSale, TextDateSale, TextTitleSales,
} from './styles';
import ModalSale from '../../components/ModalSale';
import { colors } from '../../styles.global';

interface Sale{
  confirmPay: boolean
  createdAt: string
  discount: number
  id: string
  nameCliente: string
  payDate: string
  saleTotal: number
  updatedAt: string
  userId: string
}

const Sales: React.FC = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loadSale, setLoadSale] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [idSale, setIdSale] = useState<string>('');
  const [saleAmount, setSaleAmount] = useState<number>(0);

  async function getSales() {
    setLoadSale(true);
    const monthAtual = new Date().getMonth() + 1;
    const { data } = await api.get('/sales', {
      params: {
        month: monthAtual,
      },
    });

    const salesData = data.map((d: any) => ({
      confirmPay: d.sales_confirmPay,
      createdAt: d.sales_createdAt,
      discount: d.sales_discount,
      id: d.sales_id,
      nameCliente: d.sales_nameCliente,
      payDate: d.sales_payDate,
      saleTotal: d.sales_saleTotal,
      updatedAt: d.sales_updatedAt,
      userId: d.sales_userId,
    }));

    setSales(salesData);

    if (sales.length > 0) {
      setSaleAmount(sales.map((s) => s.saleTotal).reduce((s, n) => s + n));
    }

    setTimeout(() => setLoadSale(false), 1000);
  }
  useEffect(() => {
    getSales();
  }, []);

  function showModalSale(id: string) {
    setIdSale(id);
    setModalVisible(true);
  }

  return (
    <Container>
      <ModalSale visible={modalVisible} setVisible={setModalVisible} idSale={idSale} />
      <BoxInfoSales colors={[colors.primaryColor, colors.secondaryColor]}>
        <TextTitleSales>Vendas</TextTitleSales>
        <TextAmountSales>{`R$ ${saleAmount.toFixed(2)}`}</TextAmountSales>
        <BoxSelectMonth>
          <ButtonPN>
            <TextButton>{'<'}</TextButton>
          </ButtonPN>
          <ButtonMonth>
            <TextButton>Nov</TextButton>
          </ButtonMonth>
          <ButtonMonth>
            <TextButton>Dez</TextButton>
          </ButtonMonth>
          <ButtonMonth>
            <TextButton>Jan</TextButton>
          </ButtonMonth>
          <ButtonPN>
            <TextButton>{'>'}</TextButton>
          </ButtonPN>
        </BoxSelectMonth>
      </BoxInfoSales>

      <ScrollSale>
        <TextDateSale>Hoje</TextDateSale>
        {loadSale ? (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <ShimmerPlaceHolder
                style={{
                  height: '35%',
                  marginTop: 10,
                  width: '90%',
                  alignSelf: 'center',
                  borderRadius: 5,
                }}
                visible={false}
                key={i}
              >
                <BoxSale colors={[colors.primaryColor, colors.secondaryColor]}>
                  <TextSale />
                  <TextSale />
                  <TextSale />
                </BoxSale>
              </ShimmerPlaceHolder>
            ))}
          </>
        ) : (
          <>
            {sales.map((sale) => (
              <ButtonSale
                key={sale.id}
                activeOpacity={0.7}
                onPress={() => showModalSale(sale.id)}
              >
                <BoxSale colors={[colors.primaryColor, colors.secondaryColor]}>
                  <TextSale>{sale.nameCliente}</TextSale>
                  <TextSale>{`R$ ${sale?.saleTotal.toFixed(2)}`}</TextSale>
                  <TextSale>{sale.confirmPay ? 'Pago' : 'Agendado'}</TextSale>
                </BoxSale>
              </ButtonSale>
            ))}
          </>
        )}
      </ScrollSale>

    </Container>
  );
};

export default Sales;
