import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconShoppingBag,
  IconShoppingBagActive,
  IconSetting,
  IconSettingActive,
} from '../assets/_IndexAssets';

const BottomTabIcons = ({label, isFocused, onLongPress, onPress} : any) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />
    }
    if (label === 'Pesananku') {
      return isFocused ? <IconShoppingBagActive /> : <IconShoppingBag />
    }
    if (label === 'Setting') {
      return isFocused ? <IconSettingActive /> : <IconSetting />
    }
    return null;
  }
  return (
    <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.container}
        >
        <Icon />
        {isFocused ? <Text style={styles.textMain}>
          {label}
        </Text> :
        <Text style={styles.text}>
          {label}
        </Text>}
    </TouchableOpacity>
  )
}

export default BottomTabIcons;

const styles = StyleSheet.create({
  container : {
    alignItems : 'center',
    padding : 5,
    flexDirection : 'column'
  },
  textMain : {
    color : '#00C0CA',
    fontSize : 12,
    fontFamily : 'Poppins'
  },
  text : {
    color : '#CDCDD9',
    fontSize : 12,
    fontFamily : 'Poppins'
  }
});