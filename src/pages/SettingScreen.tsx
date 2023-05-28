import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  HeaderBanner_2,
  ImageProfile,
  IconRewrite,
} from '../assets/_IndexAssets';

const HeadInfo = () => {
  return (
    <ImageBackground source={HeaderBanner_2} style={styles.banner}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <ImageProfile style={{}} />
          <View>
            <Text>Nazwa Tazkia</Text>
            <Text>Nazwatazkia@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={IconRewrite} style={styles.iconRewrite} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const SettingScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeadInfo />
    </SafeAreaView>
  );
};

export default SettingScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  banner: {
    height: windowHeight / 4.9,
    flexDirection: 'row',
  },
  iconRewrite: {
    width: 45,
    height: 45,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    left: windowWidth / 9,
    top: windowHeight / 11,
    backgroundColor: 'red',
    height: '40%',
    width: '70%',
    justifyContent: 'space-between',
  },
});
