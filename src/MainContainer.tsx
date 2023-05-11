import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { BottomTab } from './components/_IndexComponents';

const Stack = createNativeStackNavigator()

const TabScreen = () => {
    return (
     <BottomTab />
    )
  }
  
const MainContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
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