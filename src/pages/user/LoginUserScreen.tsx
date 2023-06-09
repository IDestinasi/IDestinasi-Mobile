import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {IconBackArrow, ImageIDestinasi} from '../../assets/_IndexAssets';
import {FormLogin} from '../../components/_IndexComponents';

const LoginUserScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate('PreLogin')}>
          <IconBackArrow />
        </TouchableOpacity>
        <View style={styles.IDestinasiStyle}>
          <ImageIDestinasi />
        </View>
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeMsg}>Selamat datang kembali!</Text>
          <Text style={styles.welcomeSubMsg}>
            Masukkan email dan password untuk kembali masuk ke dalam akunmu.
          </Text>
        </View>
        <FormLogin navigation={navigation} />
        <View style={[styles.flexPos, styles.addInfo]}>
          <Text style={styles.info1}>Belum punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('UserRegister')}>
            <Text style={styles.info2}>Daftar Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginUserScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backBtn: {
    alignItems: 'center',
    borderRadius: 12,
    marginTop: windowHeight / 20,
    left: windowWidth / 20,
    width: '10%',
    padding: 13,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  IDestinasiStyle: {
    alignItems: 'center',
    marginTop: 4,
  },
  welcomeBox: {
    alignItems: 'center',
  },
  welcomeMsg: {
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    fontSize: 28,
    marginTop: 22,
  },
  welcomeSubMsg: {
    textAlign: 'center',
    color: '#90A8BF',
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 16,
    width: windowWidth / 1.1,
  },
  flexPos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addInfo: {
    justifyContent: 'space-between',
    marginHorizontal: windowWidth / 5,
  },
  info1: {
    color: '#90A8BF',
    fontFamily: 'Gilroy-Regular',
  },
  info2: {
    color: '#00C0CA',
    fontFamily: 'Gilroy-SemiBold',
  },
});
