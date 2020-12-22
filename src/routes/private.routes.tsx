import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Sales from '../screens/Sales';
import Stock from '../screens/Stock';
import Sell from '../screens/Sell';
import Shopping from '../screens/Shopping';
import Settings from '../screens/Settings';

import IconsTabs from '../components/IconsTabs';

import SalePng from '../assets/sale.png';
import SellPng from '../assets/sell.png';
import StockPng from '../assets/stock.png';
import ShoppingPng from '../assets/shopping.png';
import SettingsPng from '../assets/settings.png';
import SaleActivePng from '../assets/saleActive.png';
import SellActivePng from '../assets/sellActive.png';
import StockActivePng from '../assets/stockActive.png';
import ShoppingActivePng from '../assets/shoppingActive.png';
import SettingsActivePng from '../assets/settingsActive.png';
import { colors } from '../styles.global';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const StackStock: React.FC = () => (
  <Stack.Navigator
    headerMode="float"
    screenOptions={{
      headerStyle: {
        height: 40,
        backgroundColor: colors.primaryColor,
      },
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen name="stock" component={Stock} options={{ title: 'Estoque' }} />
  </Stack.Navigator>
);

const StackSale: React.FC = () => (
  <Stack.Navigator
    headerMode="float"
    screenOptions={{
      headerStyle: {
        height: 40,
        backgroundColor: colors.primaryColor,
      },
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen name="sale" component={Sales} options={{ title: 'Vendas' }} />
  </Stack.Navigator>
);

const PrivateRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.backgroundColor,
      inactiveBackgroundColor: colors.backgroundColor,
      activeTintColor: colors.primaryColor,
      inactiveTintColor: colors.borderColors,
      labelStyle: { fontSize: 13, marginBottom: 5, fontWeight: '600' },
      style: {
        height: 55,
        borderTopWidth: 1,
        borderColor: colors.primaryColor,
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
      name="Stock"
      component={StackStock}
      options={() => ({
        title: 'Estoque',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={StockActivePng} />) : (<IconsTabs image={StockPng} />)
        ),
      })}
    />
    <Tab.Screen
      name="Sell"
      component={Sell}
      options={() => ({
        title: 'Vender',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={SellActivePng} />) : (<IconsTabs image={SellPng} />)
        ),
      })}
    />
    <Tab.Screen
      name="Shopping"
      component={Shopping}
      options={() => ({
        title: 'Compras',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={ShoppingActivePng} />) : (<IconsTabs image={ShoppingPng} />)
        ),
      })}
    />
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
