import React, { useEffect, useState } from 'react';
import {
  FlatList, Image,
  LogBox,
  Text, TouchableOpacity, View,
} from 'react-native';
import Lottie from 'lottie-react-native';
import { MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
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
type RootStackParamList = {
  Sell: undefined
}

interface Props{
  navigation: StackNavigationProp<RootStackParamList, 'Sell'>
}

const Sales: React.FC<Props> = ({ navigation }) => {
  const [sales, setSales] = useState<any>();
  const [sale, setSale] = useState<Sale>();
  const [salesDay, setSalesDay] = useState<string[]>([]);
  const [loadSale, setLoadSale] = useState<boolean>(false);
  const [loadFlatList, setLoadFlatList] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);

  const [saleAmount, setSaleAmount] = useState<number>(0);
  const [numberSales, setNumberSales] = useState<number>(0);

  const [shipmentAmount, setShipmentAmount] = useState<number>(0);
  const [numberShipments, setNumberShipments] = useState<number>(0);

  const [balanceAmount, setBalanceAmount] = useState<number>(0);
  const [balancePercentage, setBalancePercentage] = useState<number>(0);

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
        year: month - 1 > new Date().getMonth()
          ? new Date().getFullYear() - 1 : new Date().getFullYear(),
      },
    });

    setSales(data.sales);
    if (data.sales) {
      setSalesDay(Object.keys(data.sales).sort((a, b) => Number(b) - Number(a)));
      await getReportFinancialSimple();
    }

    setLoadFlatList(false);
  }

  async function getSales() {
    LogBox.ignoreAllLogs();
    setLoadSale(true);
    const { data } = await api.get('/sales', {
      params: {
        month,
        year: month - 1 > new Date().getMonth()
          ? new Date().getFullYear() - 1 : new Date().getFullYear(),
      },
    });

    setSales(data.sales);
    if (data.sales) {
      setSalesDay(Object.keys(data.sales).sort((a, b) => Number(b) - Number(a)));
      await getReportFinancialSimple();
    }

    setLoadSale(false);
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

  async function getReportFinancialSimple() {
    const { data } = await api.get('/report/financial/simple', {
      params: {
        month,
        year: month - 1 > new Date().getMonth()
          ? new Date().getFullYear() - 1 : new Date().getFullYear(),
      },
    });

    if (data.reportSaleMonth) {
      const { reportSaleMonth, reportPurchasesMonth, balance } = data;

      setSaleAmount(reportSaleMonth.amountValue || 0);
      setNumberSales(reportSaleMonth.numberSales || 0);

      setShipmentAmount(reportPurchasesMonth.amountValue || 0);
      setNumberShipments(reportPurchasesMonth.numberPurchases || 0);

      setBalanceAmount(balance.balanceAmount || 0);
      setBalancePercentage(balance.balancePercentage || 0);
    }
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

      <LinearGradient
        colors={colors.primaryColorLinear}
        style={styles.boxInfoSales}
      >
        <View style={styles.boxSelectMonth}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={removeMonth}
          >
            <Image source={previousMonth} />
          </TouchableOpacity>

          <Text style={styles.titleInfo}>{`Vendas ${months[month - 1]}`}</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={addMonth}
          >
            <Image source={nextMonth} />
          </TouchableOpacity>
        </View>

      </LinearGradient>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scrollInfoValues}
      >

        <View style={styles.boxInfoValue}>
          <Text style={styles.text}>Vendas</Text>
          <Text style={styles.textInfo}>{numberSales}</Text>
          <Text style={styles.textInfo}>{`R$ ${saleAmount.toFixed(2)}`}</Text>
        </View>

        <View style={styles.boxInfoValue}>
          <Text style={styles.text}>Compras</Text>
          <Text style={styles.textInfo}>{numberShipments}</Text>
          <Text style={styles.textInfo}>{`R$ ${shipmentAmount.toFixed(2)}`}</Text>
        </View>

        <View style={styles.boxInfoValue}>
          <Text style={styles.text}>Lucro total</Text>
          <Text style={styles.textInfo}>{`R$ ${balanceAmount.toFixed(2)}`}</Text>
          <Text style={styles.textInfo}>{`${balancePercentage}%`}</Text>
        </View>

      </ScrollView>
      {loadSale ? (
        <Lottie
          source={Loading}
          style={{ height: 200, alignSelf: 'center', marginTop: '12%' }}
          autoPlay
          resizeMode="center"
        />
      ) : (
        <>
          {salesDay.length > 0 ? (
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

                      <LinearGradient
                        colors={[colors.menuColor, colors.menuColor]}
                        style={styles.sale}
                      >
                        <View style={styles.column}>
                          <Text style={styles.textNameClient}>{s.nameCliente}</Text>
                          <Text style={[styles.textSales, { fontSize: 14 }]}>{`R$ ${s?.saleTotal.toFixed(2)}`}</Text>
                        </View>
                        <View style={styles.column}>
                          <MaterialCommunityIcons name="logout" size={24} color={colors.primaryFontColor} />
                        </View>
                      </LinearGradient>

                    </TouchableOpacity>

                  ))}
                </View>
              )}
            />
          ) : (
            <View style={styles.boxSad}>
              <Text style={styles.textSad}>Você não tem nenhuma venda ainda esse mês</Text>
              <Entypo name="emoji-sad" size={40} color={colors.primaryFontColor} />
            </View>
          )}
        </>

      )}

      <TouchableOpacity
        onPress={() => navigation.navigate('Sell')}
        activeOpacity={0.7}
        style={styles.buttonSell}
      >
        <MaterialIcons name="add" size={40} color="#fff" />
      </TouchableOpacity>

    </LinearGradient>
  );
};

export default Sales;
