import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, TouchableOpacity, TextInput, ScrollView, View, Text, FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';
import api from '../../services/api';
import ModalAddProductCart from '../../components/ModalAddProductCart';
import { useCart } from '../../hooks/useCart';

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

type RootStackParamList = {
  ShoppingCart: undefined
}

interface Props{
  navigation: StackNavigationProp<RootStackParamList, 'ShoppingCart'>
}

const Sell: React.FC<Props> = ({ navigation }: Props) => {
  const [products, setProducts] = useState<Product[]>();
  const [name, setName] = useState<string>('');
  const [modalProduct, setModalProduct] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [productSelect, setProductSelect] = useState<Product>({} as Product);

  const { cart, amountCart, addCart } = useCart();

  async function getProducts() {
    const { data } = await api.get('/products', { params: { name } });

    setProducts(data);
  }

  async function refreshProducts() {
    setRefreshing(true);
    const { data } = await api.get('/products', { params: { name } });

    setProducts(data);

    setRefreshing(false);
  }

  function showModalAddProductCart(prod: Product) {
    setProductSelect(prod);

    setModalProduct(true);
  }

  // function filterProductsByName() {
  //   let listProducts = products;
  //   listProducts = listProducts?.filter((p) => p.name.indexOf(name));
  //   setProducts(listProducts);
  // }

  // useEffect(() => {
  //   filterProductsByName();
  // }, [name]);

  useEffect(() => {
    getProducts();
  }, [name]);

  return (
    <SafeAreaView style={styles.container}>
      <ModalAddProductCart
        visible={modalProduct}
        setVisible={setModalProduct}
        product={productSelect}
        addCart={addCart}
      />
      <TextInput
        placeholder="Pesquisa ..."
        style={styles.inputSearch}
        value={name}
        onChangeText={setName}
      />
      <FlatList
        style={styles.scrollProducts}
        key="list"
        data={products}
        onRefresh={refreshProducts}
        refreshing={refreshing}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.boxProduct}
            key={item.id}
            onPress={() => showModalAddProductCart(item)}
          >
            <Text style={styles.textValue}>{item.amount}</Text>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textValue}>{`R$ ${item.saleValue}`}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.boxPriceText}>
          <Text style={styles.money}>R$</Text>
          <Text style={styles.priceCart}>{amountCart.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonCart}
          activeOpacity={0.7}
          disabled={cart.length === 0}
          onPress={() => navigation.navigate('ShoppingCart')}
        >
          <>
            <AntDesign name="shoppingcart" size={35} color="#fff" />
            <Text style={styles.numberItemsCart}>{cart.length}</Text>
          </>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Sell;
