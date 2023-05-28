import React from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  SafeAreaView, 
  Dimensions, 
  Image,
  TouchableOpacity
} from 'react-native';
import { HeaderBanner_2, ImageProfile, IconRewrite, IconProfileSetting, IconNotificationSetting, IconAnonymous } from '../assets/_IndexAssets';

const HeadInfo = () => {
  return (
    <ImageBackground source={HeaderBanner_2} style={styles.banner}>
        <View style={styles.container}>
          <View style={{flexDirection : 'row', alignItems : 'center'}}>
            <ImageProfile style={{marginRight: 10}} />
            <View style={{marginRight: 40}}>
              <Text style={{color: 'white', fontFamily: 'Gilroy-ExtraBold', fontSize: 20}}>Nazwa Tazkia</Text>
              <Text style={{color: 'white', fontFamily: 'Gilroy-Regular', fontSize: 12}}>Nazwatazkia@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={IconRewrite} style={styles.iconRewrite} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
  )
}

const SettingScreen = () => {
  return (
    <SafeAreaView style={{flex : 1}}>
      <HeadInfo />
      <View style={{margin: 20}}>
        <View style={{
          flexDirection: 'row', 
          alignItems:'center', 
          width: '35%', 
        }}>
          <IconProfileSetting style={{marginRight: 20}} />
          <Text>Akun Saya</Text>
        </View>
        <View style={styles.hrLine} />
        <View style={{
          flexDirection: 'row', 
          alignItems:'center', 
          width: '35%',  
        }}>
          <IconNotificationSetting style={{marginRight: 20}} />
          <Text>Notifikasi</Text>
        </View>
        <View style={styles.hrLine} />
        <View style={{
          flexDirection: 'row', 
          alignItems:'center', 
          width: '35%', 
        }}>
          <IconAnonymous style={{marginRight: 20}} />
          <Text>Anonymous</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  banner : {
    height: windowHeight / 4.9,
    flexDirection : 'row'
  },
  iconRewrite : {
    width : 45,
    height : 45
  },
  container : {
    alignItems : 'center',
    flexDirection : 'row',
    left : windowWidth / 10,
    top : windowHeight / 12,
    height : '40%',
    width : '70%',
    justifyContent : 'space-between'
  },
  hrLine: {
    backgroundColor: '#C3D9E9',
    height: 1,
    marginVertical: 10
  }
});
