import React, { useEffect, useState } from 'react';
import {
  FlatList, Image,
  LogBox,
  Text, TouchableOpacity, View,
} from 'react-native';
import Lottie from 'lottie-react-native';
import { MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import api from '../../services/api';

import { styles } from './styles';

import { colors } from '../../styles.global';

import Loading from '../../animations/loading.json';

import previousMonth from '../../assets/previousMonth.png';
import nextMonth from '../../assets/nextMonth.png';
import ModalShipment from '../../components/ModalShipment';

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

interface IShipment{
  id: string
  amountValue: number
  provider: string
  userId: string
  shipmentProducts: IProduct[]
  createdAt: string
  updatedAt: string
}

type RootStackParamList = {
  RegisterStock: undefined
}

interface Props{
  navigation: StackNavigationProp<RootStackParamList>
}

const Shipment: React.FC<Props> = ({ navigation }) => {
  const [shipments, setShipments] = useState<IShipment[]>([]);
  const [shipment, setShipment] = useState<IShipment>();
  const [loadShipment, setLoadShipment] = useState<boolean>(false);
  const [loadFlatList, setLoadFlatList] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [shipementAmount, setShipmentAmount] = useState<number>(0);

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
    const { data } = await api.get('/shipments', {
      params: {
        month,
        year: month - 1 > new Date().getMonth()
          ? new Date().getFullYear() - 1 : new Date().getFullYear(),
      },
    });

    setShipments(data);

    setLoadFlatList(false);
  }

  async function getShipments() {
    LogBox.ignoreAllLogs();
    setLoadShipment(true);
    const { data } = await api.get('/shipments', {
      params: {
        month,
        year: month - 1 > new Date().getMonth()
          ? new Date().getFullYear() - 1 : new Date().getFullYear(),
      },
    });

    setShipments(data);

    setLoadShipment(false);
  }

  async function getShipment(id: string) {
    const { data } = await api.get(`/shipments/${id}`);

    setShipment(data);
  }

  useEffect(() => {
    getShipments();
  }, [month]);

  useEffect(() => {
    if (shipments.length > 0) {
      setShipmentAmount(shipments?.map((s) => s.amountValue).reduce((s, n) => s + n));
    }
  }, [shipments]);

  async function showModalShipment(id: string) {
    await getShipment(id);
    setModalVisible(true);
  }

  return (
    <LinearGradient
      colors={colors.backgroundLinear}
      style={styles.container}
    >
      <ModalShipment
        visible={modalVisible}
        setVisible={setModalVisible}
        shipment={shipment || undefined}
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

          <Text style={styles.titleInfo}>{`${months[month - 1]}`}</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={addMonth}
          >
            <Image source={nextMonth} />
          </TouchableOpacity>
        </View>

      </LinearGradient>

      <View style={styles.boxInfoValue}>
        <Text style={styles.text}>Total em compras</Text>
        <Text style={styles.textInfo}>{`R$ ${shipementAmount.toFixed(2)}`}</Text>
      </View>

      {loadShipment ? (
        <Lottie
          source={Loading}
          style={{ height: 200, alignSelf: 'center', marginTop: '12%' }}
          autoPlay
          resizeMode="center"
        />
      ) : (
        <>
          {shipments.length > 0 ? (
            <FlatList
              style={styles.flatListShipments}
              key="list"
              data={shipments}
          // onEndReached={} // todo: pagination
          // onEndReachedThreshold={}
              onRefresh={handleRefreshList}
              refreshing={loadFlatList}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.boxShipments} key={item.id}>

                  <TouchableOpacity
                    key={item.id}
                    style={styles.buttonShipments}
                    activeOpacity={0.7}
                    onPress={() => showModalShipment(item.id)}
                  >

                    <LinearGradient
                      colors={[colors.menuColor, colors.menuColor]}
                      style={styles.shipment}
                    >
                      <View style={styles.column}>
                        <Text style={styles.textProvider}>{item.provider}</Text>
                        <Text style={[styles.textShipments, { fontSize: 14 }]}>
                          {`R$ ${item.amountValue.toFixed(2)}`}
                        </Text>
                      </View>
                      <View style={styles.column}>
                        <MaterialCommunityIcons
                          name="logout"
                          size={24}
                          color={colors.primaryFontColor}
                        />
                      </View>
                    </LinearGradient>

                  </TouchableOpacity>

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
        onPress={() => navigation.navigate('RegisterStock')}
        activeOpacity={0.7}
        style={styles.buttonSell}
      >
        <MaterialIcons name="add" size={40} color="#fff" />
      </TouchableOpacity>

    </LinearGradient>
  );
};

export default Shipment;
