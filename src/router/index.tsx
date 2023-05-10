import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Home, Search, AIChat, Group, Profile} from '../pages';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Homeff" component={Home} />
      <Tab.Screen name="Cari" component={Search} />
      <Tab.Screen name="AIChat" component={AIChat} />
      <Tab.Screen name="Group" component={Group} />
      <Tab.Screen name="Profil" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Router;

const styles = StyleSheet.create({});