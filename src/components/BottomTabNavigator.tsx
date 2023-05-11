import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BottomTabIcons from './BottomTabIcons';

const BottomTabNavigator = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={ styles.container }>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BottomTabIcons
            key = { index }
            isFocused = { isFocused }
            label = { label }
            onLongPress = { onLongPress }
            onPress = { onPress }
          />
        );
      })}
    </View>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    backgroundColor : '#FFFFFF',
    justifyContent : 'space-between',
    paddingTop : 20,
    paddingBottom : 10,
    paddingHorizontal : 30,
  }
});