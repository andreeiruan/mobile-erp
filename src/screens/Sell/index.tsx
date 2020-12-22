import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, TouchableOpacity, TextInput, ScrollView, View, Text,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';
import api from '../../services/api';
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

interface ProductOnCart{
  id: string
  name: string
  amount: number
  unitaryValue: number
  unitaryDiscount: number
  amountTotal: number
}

type RootStackParamList = {
  ShoppingCart: { products: ProductOnCart[], amountCart: number}
}

interface Props{
  navigation: StackNavigationProp<RootStackParamList, 'ShoppingCart'>
}

const Sell: React.FC<Props> = ({ navigation }: Props) => {
  const [products, setProducts] = useState<Product[]>();
  const [name, setName] = useState<string>('');
  const [cart, setCart] = useState<ProductOnCart[]>([]);
  const [amountCart, setAmountCart] = useState<number>(0);

  const [modalProduct, setModalProduct] = useState<boolean>(false);
  const [productSelect, setProductSelect] = useState<Product>({} as Product);

  async function getProducts() {
    const { data } = await api.get('/products', { params: { name } });

    setProducts(data);
  }

  function showModalAddProductCart(prod: Product) {
    setProductSelect(prod);

    setModalProduct(true);
  }

  function addCart(prod: ProductOnCart) {
    const listProducts: ProductOnCart[] = cart;
    listProducts.push(prod);

    setCart(listProducts);
    if (cart.length > 0) {
      setAmountCart(cart.map((p) => p.amountTotal).reduce((s, n) => s + n));
    }
  }

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
      <ScrollView style={styles.scrollProducts}>
        {products?.map((p) => (
          <TouchableOpacity
            style={styles.boxProduct}
            key={p.id}
            onPress={() => showModalAddProductCart(p)}
          >
            <Text style={styles.textName}>{p.name}</Text>
            <Text style={styles.textValue}>{`R$ ${p.saleValue}`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.boxPriceText}>
          <Text style={styles.money}>R$</Text>
          <Text style={styles.priceCart}>{amountCart.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonCart}
          activeOpacity={0.7}
          disabled={cart.length === 0}
          onPress={() => navigation.navigate('ShoppingCart', { products: cart, amountCart })}
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
