import React from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { BottomTab } from './components/_IndexComponents';
import { Splash } from './pages/_IndexScreen';
import PreLoginScreen from './pages/PreLoginScreen';
import LoginUserScreen from './pages/user/LoginUserScreen';
import RegistUserScreen from './pages/user/RegistUserScreen';
import Regist2UserScreen from './pages/user/Regist2UserScreen';
import RegistSuccessScreen from './pages/RegistSuccessScreen';

const Stack = createNativeStackNavigator()

const TabScreen = () => {
    return (
     <BottomTab />
    )
  }
  
const MainContainer = () => {
    return (
       //<Splash />
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{headerShown : false}}
                />
                <Stack.Screen 
                    name="PreLogin" 
                    component={PreLoginScreen} 
                    options={{headerShown : false}}
                />
                <Stack.Screen 
                    name="UserLogin"
                    component={LoginUserScreen}
                    options={{headerShown : false}}
                />
                <Stack.Screen
                    name="UserRegister"
                    component={RegistUserScreen}
                    options={{headerShown : false}}
                />
                <Stack.Screen
                    name="UserRegister2"
                    component={Regist2UserScreen}
                    options={{headerShown : false}} 
                />
                <Stack.Screen
                    name="RegistSuccess"
                    component={RegistSuccessScreen}
                    options={{headerShown : false}}
                />
                <Stack.Screen
                    name="TabScreen" 
                    component={TabScreen} 
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainContainer;

const styles = StyleSheet.create({});