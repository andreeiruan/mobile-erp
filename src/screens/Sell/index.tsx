import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity, TextInput, View, Text, FlatList,
} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { colors } from '../../styles.global';

import api from '../../services/api';
import { useCart } from '../../hooks/useCart';

import ModalAddProductCart from '../../components/ModalAddProductCart';

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
  const [products, setProducts] = useState<Product[]>([]);
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);
  const [name, setName] = useState<string>('');
  const [modalProduct, setModalProduct] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [productSelect, setProductSelect] = useState<Product>({} as Product);

  const { cart, amountCart, addCart } = useCart();

  async function getProducts() {
    const { data } = await api.get('/products', { params: { name } });

    setProducts(data);
    setSearchProducts(data);
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

  useEffect(() => {
    const ids = cart.map((p) => p.id);
    if (name) {
      const listProducts = products
        .filter((p) => p.name.toLowerCase().includes(name.toLowerCase()))
        .filter((p) => !ids.includes(p.id));

      setSearchProducts(listProducts);
    } else {
      setSearchProducts(products);
    }
  }, [name]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      colors={colors.backgroundLinear}
    >
      <ModalAddProductCart
        visible={modalProduct}
        setVisible={setModalProduct}
        product={productSelect}
        addCart={addCart}
      />
      <Text style={styles.labelSearch}>Pesquisa</Text>
      <TextInput
        placeholder="Pesquisa ..."
        style={styles.inputSearch}
        value={name}
        onChangeText={setName}
      />
      <FlatList
        style={styles.scrollProducts}
        key="list"
        data={searchProducts}
        onRefresh={refreshProducts}
        refreshing={refreshing}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={styles.boxProduct}
          >
            <View style={styles.boxTextProduct}>
              <Text style={styles.textValue}>{item.amount}</Text>
              <Text style={styles.textName}>{item.name}</Text>
            </View>
            {/* <Text style={styles.textValue}>{`R$ ${item.saleValue}`}</Text> */}
            <TouchableOpacity
              key={item.id}
              onPress={() => showModalAddProductCart(item)}
            >
              {/* <Image source={buttonAddCart} /> */}
              <FontAwesome5 name="cart-plus" size={24} color={colors.primaryFontColor} />
            </TouchableOpacity>
          </View>
        )}
      />

      <LinearGradient colors={colors.secondaryColorLinear} style={styles.footer}>
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
            <AntDesign name="shoppingcart" size={35} color={colors.secondaryFontColor} />
            <Text style={styles.numberItemsCart}>{cart.length}</Text>
          </>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
};

export default Sell;
