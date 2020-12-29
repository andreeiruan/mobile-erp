import React, { useEffect, useState } from 'react';
import {
  FlatList, Image,
  Text, TouchableOpacity, View,
} from 'react-native';
import Lottie from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../services/api';

import { styles } from './styles';

import ModalSale from '../../components/ModalSale';

import { colors } from '../../styles.global';

import Loading from '../../animations/loading.json';

import previousMonth from '../../assets/previousMonth.png';
import nextMonth from '../../assets/nextMonth.png';

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
  updatedAt: string,
  partialPayment: boolean
  remainingAmount: number | null
  amountPaid: number | null
}

const Sales: React.FC = () => {
  const [sales, setSales] = useState<any>();
  const [sale, setSale] = useState<Sale>();
  const [salesDay, setSalesDay] = useState<string[]>([]);
  const [loadSale, setLoadSale] = useState<boolean>(false);
  const [loadFlatList, setLoadFlatList] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [saleAmount, setSaleAmount] = useState<number>(0);

  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  function addMonth() {
    if (month === 12) {
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  }
  function removeMonth() {
    if (month === 1) {
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  }

  async function handleRefreshList() {
    setLoadFlatList(true);
    const { data } = await api.get('/sales', {
      params: {
        month,
      },
    });

    setSales(data.sales);

    setSalesDay(Object.keys(data.sales).sort((a, b) => Number(b) - Number(a)));

    setSaleAmount(data.amountSale);

    setLoadFlatList(false);
  }

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

  async function getSale(id: string) {
    const { data } = await api.get(`/sales/${id}`);

    setSale(data);
  }

  useEffect(() => {
    getSales();
  }, [month]);

  async function showModalSale(id: string) {
    await getSale(id);
    setModalVisible(true);
  }

  return (
    <LinearGradient
      colors={colors.backgroundLinear}
      style={styles.container}
    >
      <ModalSale
        visible={modalVisible}
        setVisible={setModalVisible}
        sale={sale || undefined}
      />

      <View style={styles.header} />
      <LinearGradient
        colors={colors.primaryColorLinear}
        style={styles.boxInfoSales}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={removeMonth}
        >
          <Image source={previousMonth} />
        </TouchableOpacity>
        <View style={styles.boxInfo}>
          <Text style={styles.titleInfo}>{`Vendas ${months[month - 1]}`}</Text>

          <View style={styles.row}>
            <Text style={styles.text}>Total de vendas</Text>
            <Text style={styles.textInfo}>{`R$ ${saleAmount.toFixed(2)}`}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Total de gastos</Text>
            <Text style={styles.textInfo}>{`R$ ${saleAmount.toFixed(2)}`}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Lucro total</Text>
            <Text style={styles.textInfo}>{`R$ ${saleAmount.toFixed(2)}`}</Text>
          </View>

        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={addMonth}
        >
          <Image source={nextMonth} />
        </TouchableOpacity>
      </LinearGradient>
      {loadSale ? (
        <Lottie
          source={Loading}
          style={{ height: 200, alignSelf: 'center', marginTop: '12%' }}
          autoPlay
          resizeMode="center"
        />
      ) : (
        <FlatList
          style={styles.flatListSales}
          key="list"
          data={salesDay}
        // onEndReached={} // todo: pagination
        // onEndReachedThreshold={}
          onRefresh={handleRefreshList}
          refreshing={loadFlatList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.boxSale} key={item}>
              <Text style={styles.textDateSale}>{new Date().getDate() === Number(item) ? 'Hoje' : `${item}/${month}`}</Text>
              {sales[item].map((s: Sale) => (
                <TouchableOpacity
                  key={s.id}
                  style={styles.buttonSale}
                  activeOpacity={0.7}
                  onPress={() => showModalSale(s.id)}
                >
                  <View style={styles.shadow}>
                    <LinearGradient
                      colors={[colors.menuColor, colors.menuColor]}
                      style={styles.sale}
                    >
                      <Text style={styles.textSales}>{s.nameCliente}</Text>
                      <Text style={styles.textSales}>{`R$ ${s?.saleTotal.toFixed(2)}`}</Text>
                      <Text style={styles.textSales}>{s.confirmPay ? 'Pago' : 'Agendado'}</Text>
                    </LinearGradient>
                  </View>
                </TouchableOpacity>

              ))}
            </View>
          )}
        />
      )}

    </LinearGradient>
  );
};

export default Sales;
