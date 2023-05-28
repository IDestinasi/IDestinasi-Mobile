import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {LandingPage_3} from '../assets/_IndexAssets';

const PreLoginScreen = ({navigation}: any) => {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={LandingPage_3} style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.headerText}>
            Temukkan pengalaman baru dalam dunia pariwisata Indonesia
          </Text>
          <Text style={styles.subHeaderText}>
            Masuk dan nikmati pengalaman yang terbaik
          </Text>
          <View style={styles.btns}>
            <TouchableOpacity
              style={[styles.btnContainer, styles.btnUser]}
              onPress={() => navigation.navigate('UserLogin')}>
              <Text style={styles.btnText}>Masuk Sebagai Pengunjung</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnContainer, styles.btnAdmin]}>
              <Text style={styles.btnText}>Masuk Sebagai Pengelola</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PreLoginScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: windowHeight / 1.9,
    paddingBottom: 100,
  },
  headerText: {
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    fontSize: 30,
    textAlign: 'center',
    width: windowWidth / 1.2,
    height: windowHeight / 7,
    marginTop: 44,
    lineHeight: 33,
  },
  subHeaderText: {
    color: '#90A8BF',
    fontFamily: 'Gilroy-Light',
    fontSize: 14,
  },
  btns: {
    marginTop: 28,
  },
  btnContainer: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: windowWidth / 5,
    marginBottom: 12,
  },
  btnUser: {
    backgroundColor: '#00C0CA',
  },
  btnAdmin: {
    backgroundColor: '#FF7A00',
  },
  btnText: {
    color: 'white',
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
  },
});
