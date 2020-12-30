import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { colors } from '../../styles.global';

interface Props{
  amountCart: number
  lengthCart: number
  handleCart(): any
}

const FooterCart: React.FC<Props> = ({ amountCart, lengthCart, handleCart }) => (
  <LinearGradient colors={colors.secondaryColorLinear} style={styles.footer}>
    <View style={styles.boxPriceText}>
      <Text style={styles.money}>R$</Text>
      <Text style={styles.priceCart}>{amountCart.toFixed(2)}</Text>
    </View>
    <TouchableOpacity
      style={styles.buttonCart}
      activeOpacity={0.7}
      disabled={lengthCart === 0}
      onPress={handleCart}
    >
      <>
        <AntDesign name="shoppingcart" size={35} color={colors.titleFontColor} />
        <Text style={styles.numberItemsCart}>{lengthCart}</Text>
      </>
    </TouchableOpacity>
  </LinearGradient>
);

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primaryColorLinear[1],
    bottom: 0,
    width: '100%',
    borderTopWidth: 0.5,
    shadowOpacity: 20,
    shadowOffset: { width: 0, height: -1 },
    paddingVertical: 15,
  },
  buttonCart: {
    marginRight: 20,
    flexDirection: 'row',
  },
  boxPriceText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: '5%',
  },
  money: {
    fontSize: 16,
    color: colors.titleFontColor,
    fontWeight: 'bold',
    marginRight: 5,
  },
  priceCart: {
    color: colors.titleFontColor,
    fontWeight: 'bold',
    fontSize: 24,
  },
  iconCart: {
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 0 },
  },
  numberItemsCart: {
    color: colors.titleFontColor,
    fontWeight: 'bold',
    marginTop: -5,
    marginLeft: -5,
    fontSize: 10,
  },
});

export default FooterCart;
