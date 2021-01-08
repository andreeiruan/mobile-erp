import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api';
import { colors } from '../../styles.global';

import { styles } from './styles';
import InputSearchHeader from '../../components/InputSearchHeader';
import ModalEditProduct from '../../components/ModalEditProduct';

interface Product{
  id: string
  name: string
  brand: string
  saleValue: number
  amount: number
  userId: string
  createdAt: string
  updatedAt: string
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState<string>('');
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [showProduct, setShowProduct] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>({} as Product);

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

  async function getProduct(id: string) {
    const { data } = await api.get(`/products/${id}`);

    setProduct(data);
  }

  async function showModalProduct(id: string) {
    await getProduct(id);
    setShowProduct(true);
  }

  return (
    <LinearGradient
      colors={colors.backgroundLinear}
      style={styles.container}
    >

      <ModalEditProduct
        product={product}
        setVisible={setShowProduct}
        visible={showProduct}
      />

      <InputSearchHeader search={name} setSearch={setName} />

      <FlatList
        key="list"
        data={searchProducts}
        style={styles.flatListProduct}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.7}
            style={styles.boxProduct}
            onPress={() => {
              showModalProduct(item.id);
            }}
          >
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textValue}>{`R$ ${item.saleValue}`}</Text>
                <Text style={[styles.textAmount,
                  { color: item.amount < 1 ? colors.errorFontColor : colors.primaryFontColor }]}
                >
                  {item.amount}
                </Text>
              </View>
              <View style={styles.column}>
                <MaterialCommunityIcons name="logout" size={24} color={colors.primaryFontColor} />
              </View>
            </View>

          </TouchableOpacity>
        )}
      />

    </LinearGradient>
  );
};

export default Products;
