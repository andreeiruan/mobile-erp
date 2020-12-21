import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react-native';
import api from '../../services/api';

import {
  Container, BoxInfoSales,
  TextAmountSales, BoxSelectMonth, ButtonPN,
  TextButton, ButtonMonth, ScrollSale, BoxSale,
  TextSale, ButtonSale, TextDateSale, TextTitleSales,
  BoxDaySale,
} from './styles';
import ModalSale from '../../components/ModalSale';
import { colors } from '../../styles.global';
import Loading from '../../animations/loading.json';

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
  const [sales, setSales] = useState<any>();
  const [salesDay, setSalesDay] = useState<string[]>([]);
  const [loadSale, setLoadSale] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [idSale, setIdSale] = useState<string>('');
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [saleAmount, setSaleAmount] = useState<number>(0);

  async function getSales() {
    setLoadSale(true);
    const { data } = await api.get('/sales', {
      params: {
        month,
      },
    });

    setSales(data.sales);

    setSalesDay(Object.keys(data.sales).sort((a, b) => Number(b) - Number(a)));

    setSaleAmount(data.amountSale);

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
        {loadSale ? (
          <Lottie
            source={Loading}
            style={{ height: 250, alignSelf: 'center' }}
            autoPlay
            resizeMode="center"
          />
        ) : (
          <>
            {salesDay.map((day) => (
              <BoxDaySale key={day}>
                <TextDateSale>{new Date().getDate() === Number(day) ? 'Hoje' : `${day}/${month}`}</TextDateSale>
                {sales[day].map((sale: Sale) => (
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
              </BoxDaySale>
            ))}
          </>
        )}

      </ScrollSale>

    </Container>
  );
};

export default Sales;
