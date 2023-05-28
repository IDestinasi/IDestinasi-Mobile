import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ImageRegistSuccess} from '../assets/_IndexAssets';

const RegistSuccessScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={ImageRegistSuccess} style={styles.imgStyle} />
      <Text style={styles.congratz}>Selamat! Datamu sudah dikirimkan</Text>
      <Text style={styles.congrats2}>
        Datamu akan diverifikasi dalam waktu 1x24 jam, Email konfirmasi akan
        dikirimkan segera.
      </Text>
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate('TabScreen')}>
        <Text style={styles.nextBtnText}>Selanjutnya</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegistSuccessScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#00C0CA',
  },
  imgStyle: {
    width: 300,
    height: 290,
    marginTop: windowHeight / 5,
    marginLeft: 11,
    marginBottom: 45,
  },
  congratz: {
    color: 'white',
    fontFamily: 'Gilroy-Bold',
    fontSize: 32,
    textAlign: 'center',
    marginHorizontal: windowWidth / 6,
    marginBottom: 12,
  },
  congrats2: {
    color: 'white',
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: windowWidth / 6,
    marginBottom: 32,
  },
  nextBtn: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: windowWidth / 4.7,
  },
  nextBtnText: {
    color: '#00C0CA',
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
  },
});
