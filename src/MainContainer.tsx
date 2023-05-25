import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Components
import {BottomTab} from './components/_IndexComponents';
import ListDestination from './pages/user/ListDestinationUserScreen';
import DetailDestination from './pages/user/DetailDestination';
import Purchase from './pages/user/PurchaseScreen';

const Stack = createNativeStackNavigator();

const TabScreen = () => {
  return <BottomTab />;
};

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabScreen"
          component={TabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListDestination"
          component={ListDestination}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailDestination"
          component={DetailDestination}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Purchase"
          component={Purchase}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
