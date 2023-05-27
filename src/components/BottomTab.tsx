import React, {useEffect} from 'react';
// import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Order, Setting} from '../pages/_IndexScreen';
import BottomTabNavigator from './BottomTabNavigator';
import getToken from '../functions/getToken';

const Tab = createBottomTabNavigator();

const BottomTab = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTabNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesananku" component={Order} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default BottomTab;

// const styles = StyleSheet.create({});
