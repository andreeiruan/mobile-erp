import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  FlatList, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import api from '../../services/api';
import { colors } from '../../styles.global';

import { styles } from './styles';

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

type RootParamList = {
  RegisterStock: { products: Product[]}
}

interface Props {
  navigation: StackNavigationProp<RootParamList, 'RegisterStock'>
}

const Stock: React.FC<Props> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState<string>('');
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  async function getProducts() {
    const { data } = await api.get('/products', { params: { name } });

    setProducts(data);
    setSearchProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (!name) {
      getProducts();
    } else {
      let listProducts: Product[] = products;
      listProducts = listProducts.filter((p) => p.name.includes(name));
      setSearchProducts(listProducts);
    }
  }, [name]);

  async function handleRefresh() {
    setRefreshing(true);

    await getProducts();
    setRefreshing(false);
  }

  return (
    <LinearGradient
      colors={colors.backgroundLinear}
      style={styles.container}
    >

      <View style={styles.boxSearch}>
        <Text style={styles.label}>Pesquisa</Text>
        <View style={styles.boxInput}>
          <FontAwesome
            name="search"
            style={styles.iconInput}
            size={24}
            color={colors.secondaryFontColor}
          />
          <TextInput
            placeholder="Pesquisa ..."
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="email"
            keyboardType="email-address"
            style={styles.inputSearch}
          />
        </View>
      </View>

      <FlatList
        key="list"
        data={searchProducts}
        style={styles.flatListProduct}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} activeOpacity={0.7} style={styles.boxProduct}>

            <View style={styles.row}>
              <Text style={[styles.textAmount,
                { color: item.amount < 1 ? colors.errorFontColor : colors.primaryFontColor }]}
              >
                {item.amount}
              </Text>
              <Text style={styles.textName}>{item.name}</Text>

              <Text style={styles.textValue}>{`R$ ${item.saleValue}`}</Text>
            </View>

          </TouchableOpacity>
        )}
      />

      <LinearGradient style={styles.buttonRegister} colors={colors.primaryColorLinear}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('RegisterStock', { products: products || [] })}
        >
          <Text style={styles.textRegister}>Registrar compra de estoque</Text>
        </TouchableOpacity>
      </LinearGradient>

    </LinearGradient>
  );
};

export default Stock;
