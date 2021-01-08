import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Sales from '../screens/Sales';
import Products from '../screens/Products';
import Sell from '../screens/Sell';
import Settings from '../screens/Settings';
import IconsTabs from '../components/IconsTabs';

import SalePng from '../assets/sale.png';
import SellPng from '../assets/sell.png';
import StockPng from '../assets/stock.png';
import SettingsPng from '../assets/settings.png';

import SaleActivePng from '../assets/saleActive.png';
import SellActivePng from '../assets/sellActive.png';
import StockActivePng from '../assets/stockActive.png';
import SettingsActivePng from '../assets/settingsActive.png';

import { colors } from '../styles.global';

import ShoppingCart from '../screens/ShoppingCart';
import { CartProvider } from '../contexts/CartContext';
import RegisterStock from '../screens/RegisterStock';
import FinalizeSale from '../screens/FinalizeSale';
import StockControl from '../screens/StockControl';
import CartShipmentBuy from '../screens/CartShipmentBuy';
import FinalizeShipmentBuy from '../screens/FinalizeShipmentBuy';
import NewProduct from '../screens/NewProduct';
import Shipment from '../screens/Shipment';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const screenOptionsStack: StackNavigationOptions = {
  headerStyle: {
    height: 45,
    backgroundColor: colors.primaryColorLinear[0],
    borderWidth: 0,
  },
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const StackStock: React.FC = () => (
  <CartProvider>
    <Stack.Navigator
      headerMode="none"
      screenOptions={screenOptionsStack}
    >
      <Stack.Screen name="StockControl" component={StockControl} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="NewProduct" component={NewProduct} />
      <Stack.Screen name="RegisterStock" component={RegisterStock} />
      <Stack.Screen name="CartShipmentBuy" component={CartShipmentBuy} />
      <Stack.Screen name="FinalizeShipmentBuy" component={FinalizeShipmentBuy} />
      <Stack.Screen name="Shipment" component={Shipment} />
    </Stack.Navigator>
  </CartProvider>
);

const StackSale: React.FC = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={screenOptionsStack}
  >
    <Stack.Screen name="Sales" component={Sales} options={{ title: 'Vendas' }} />
  </Stack.Navigator>
);

const StackSell: React.FC = () => (
  <CartProvider>
    <Stack.Navigator
      headerMode="none"
      screenOptions={screenOptionsStack}
    >
      <Stack.Screen name="Sell" component={Sell} options={{ title: 'Vender' }} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ title: 'Carrinho' }} />
      <Stack.Screen name="FinalizeSale" component={FinalizeSale} options={{ title: 'Finalizar venda' }} />
    </Stack.Navigator>
  </CartProvider>
);

const PrivateRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.menuColor,
      inactiveBackgroundColor: colors.menuColor,
      activeTintColor: colors.menuActiveFontColor,
      inactiveTintColor: '#000',
      labelStyle: { fontSize: 13, marginBottom: 5, fontWeight: '600' },
      style: {
        height: 55,
        borderTopWidth: 5,
        borderTopColor: colors.menuColor,
      },
      iconStyle: {
        marginTop: 10,
      },
    }}
  >
    <Tab.Screen
      name="Sales"
      component={StackSale}
      options={() => ({
        title: 'Vendas',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={SaleActivePng} />) : (<IconsTabs image={SalePng} />)
        ),
      })}
    />
    <Tab.Screen
      name="Sell"
      component={StackSell}
      options={() => ({
        title: 'Vender',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={SellActivePng} />) : (<IconsTabs image={SellPng} />)
        ),
      })}
    />

    <Tab.Screen
      name="Stock"
      component={StackStock}
      options={() => ({
        title: 'Estoque',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={StockActivePng} />) : (<IconsTabs image={StockPng} />)
        ),
      })}
    />

    {/* <Tab.Screen
      name="Shopping"
      component={Shopping}
      options={() => ({
        title: 'Compras',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={ShoppingActivePng} />) : (<IconsTabs image={ShoppingPng} />)
        ),
      })}
    /> */}
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={() => ({
        title: 'Config',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={SettingsActivePng} />) : (<IconsTabs image={SettingsPng} />)
        ),
      })}
    />
  </Tab.Navigator>
);

export default PrivateRoutes;
