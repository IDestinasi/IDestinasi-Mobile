import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Search, AIChat, Group, Profile } from '../pages/_IndexScreen';
import  BottomTabNavigator from './BottomTabNavigator';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTabNavigator {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cari" component={Search} />
      <Tab.Screen name="AIChat" component={AIChat} />
      <Tab.Screen name="Group" component={Group} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default BottomTab;

const styles = StyleSheet.create({});