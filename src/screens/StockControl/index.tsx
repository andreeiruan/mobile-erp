import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import {
  View, Text, TouchableOpacity,
} from 'react-native';

import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../styles.global';

type RootStackParamList = {
  Products: undefined
  RegisterStock: undefined
  Shipment: undefined
}

interface Props{
  navigation: StackNavigationProp<RootStackParamList>
}

const StockControl: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <LinearGradient colors={colors.primaryColorLinear} style={styles.header}>
      <View style={styles.column}>
        <Text style={styles.title}>Controle de estoque</Text>
        <MaterialCommunityIcons
          name="warehouse"
          color={colors.highlightedFontColor}
          size={45}
        />
      </View>
    </LinearGradient>
    <View style={styles.boxOptions}>
      <LinearGradient colors={colors.primaryColorLinear} style={styles.buttonOption}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Products')}
        >
          <View style={styles.row}>
            <Text style={styles.textOption}>Produtos</Text>
            <FontAwesome5 name="box-tissue" size={25} color={colors.highlightedFontColor} />
          </View>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient colors={colors.primaryColorLinear} style={styles.buttonOption}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('RegisterStock')}
        >
          <View style={styles.row}>
            <Text style={styles.textOption}>Compra de estoque</Text>
            <FontAwesome5 name="shopping-cart" size={25} color={colors.highlightedFontColor} />
          </View>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient colors={colors.primaryColorLinear} style={styles.buttonOption}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Shipment')}
        >
          <View style={styles.row}>
            <Text style={styles.textOption}>Compras</Text>
            <FontAwesome5 name="money-check-alt" size={25} color={colors.highlightedFontColor} />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  </View>
);

export default StockControl;
