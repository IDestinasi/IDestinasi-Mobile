import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconSearch,
  IconSearchActive,
  IconAIChat,
  IconGroup,
  IconGroupActive,
  IconProfile,
  IconProfileActive   
} from '../assets/_IndexAssets';

const BottomTabIcons = ({label, isFocused, onLongPress, onPress} : any) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />
    }
    if (label === 'Cari') {
      return isFocused ? <IconSearchActive /> : <IconSearch />
    }
    if (label === 'AIChat') {
      return <IconAIChat />
    }
    if (label === 'Group') {
      return isFocused ? <IconGroupActive /> : <IconGroup />
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileActive /> : <IconProfile />
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