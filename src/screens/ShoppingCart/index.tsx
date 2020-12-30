import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { useCart } from '../../hooks/useCart';
import { colors } from '../../styles.global';

type RootStackParamList = {
  Sell: undefined,
  FinalizeSale: undefined
}

interface Props{
  navigation: StackNavigationProp<RootStackParamList, 'Sell'>
}
const ShoppingCart: React.FC<Props> = ({ navigation }) => {
  const {
    cart, removeCart, amountCart,
  } = useCart();

  return (
    <LinearGradient
      colors={colors.backgroundLinear}
      style={styles.container}
    >
      <LinearGradient colors={colors.primaryColorLinear} style={styles.header}>
        <Text style={styles.title}>Carrinho da venda</Text>
      </LinearGradient>

      <ScrollView style={styles.listProducts}>
        <>
          {cart.map((p) => (
            <View
              style={styles.boxProduct}
              key={p.id}
            >
              <View style={styles.row}>
                <Text style={styles.nameProduct}>{p.name}</Text>
                <Text style={styles.unitaryValue}>{`R$ ${p.unitaryValue.toFixed(2)}`}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.amount}>{`Quantidade: ${p.amount}`}</Text>
                <Text style={styles.discount}>{`R$ - ${Number(p.unitaryDiscount).toFixed(2)}`}</Text>
              </View>
              <View style={styles.row}>
                <Ionicons onPress={() => removeCart(p.id)} name="trash-sharp" size={24} color={colors.primaryFontColor} />
                <Text style={styles.amountValue}>{`R$ ${p.amountTotal.toFixed(2)}`}</Text>
              </View>
            </View>
          ))}
        </>
      </ScrollView>

      <LinearGradient
        colors={colors.secondaryColorLinear}
        style={styles.buttonSale}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('FinalizeSale')}
        >
          <>
            <View style={styles.boxPriceText}>
              <Text style={styles.money}>R$</Text>
              <Text style={styles.priceCart}>{amountCart.toFixed(2)}</Text>
            </View>
            <Text style={styles.textButtonSale}>Fechar Carrinho</Text>
          </>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  );
};

export default ShoppingCart;
