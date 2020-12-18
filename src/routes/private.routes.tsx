import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sales from '../screens/Sales';

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

const Tab = createBottomTabNavigator();

const PrivateRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: '#2ab5d1',
      inactiveBackgroundColor: '#2ab5d1',
      activeTintColor: '#207D78',
      inactiveTintColor: '#fff',
      labelStyle: { fontSize: 13, marginBottom: 5 },
      style: {
        height: 55,
      },
      iconStyle: {
        marginTop: 10,
      },
    }}
  >
    <Tab.Screen
      name="Sales"
      component={Sales}
      options={() => ({
        title: 'Vendas',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={SaleActivePng} />) : (<IconsTabs image={SalePng} />)
        ),
      })}
    />
    <Tab.Screen
      name="Stock"
      component={Sales}
      options={() => ({
        title: 'Estoque',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={StockActivePng} />) : (<IconsTabs image={StockPng} />)
        ),
      })}
    />
    <Tab.Screen
      name="Sell"
      component={Sales}
      options={() => ({
        title: 'Vender',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={SellActivePng} />) : (<IconsTabs image={SellPng} />)
        ),
      })}
    />
    <Tab.Screen
      name="Shopping"
      component={Sales}
      options={() => ({
        title: 'Compras',
        tabBarIcon: ({ focused }) => (
          focused ? (<IconsTabs image={ShoppingActivePng} />) : (<IconsTabs image={ShoppingPng} />)
        ),
      })}
    />
    <Tab.Screen
      name="Settings"
      component={Sales}
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
