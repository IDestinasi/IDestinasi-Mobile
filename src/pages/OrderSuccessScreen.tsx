/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
} from 'react-native';
import {Traveling} from '../assets/_IndexAssets';

import Icon from 'react-native-vector-icons/FontAwesome5';

const OrderSuccessScreen = ({navigation, route}: any) => {
  const textRef = useRef(null);
  const data = route.params.data;

  const handleCopy = () => {
    Clipboard.setString(data.va_number);
    ToastAndroid.show(
      `VA Number ${data.va_number} berhasil disalin`,
      ToastAndroid.SHORT,
    );
  };
  console.log('aso', data);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Traveling} style={styles.imgStyle} />
      <Text style={styles.congratz}>Selamat! Transaksimu berhasil</Text>
      <Text style={styles.congrats2}>
        Dimohon untuk segera melakukan pembayaran dalam 1x24 jam
      </Text>
      <TouchableOpacity onPress={handleCopy} style={styles.vaNumber}>
        <Icon name="copy" size={20} color="black" style={{marginRight: 7}} />
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
          }}
          ref={textRef}>
          {data.va_number}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate('Pesananku')}>
        <Text style={styles.nextBtnText}>Selanjutnya</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrderSuccessScreen;

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
    marginBottom: 20,
  },
  congratz: {
    color: 'white',
    fontFamily: 'Gilroy-Bold',
    fontSize: 25,
    textAlign: 'center',
    marginHorizontal: 5,
    marginBottom: 12,
  },
  congrats2: {
    color: 'white',
    fontFamily: 'Gilroy-Regular',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 7,
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
  vaNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 5,
    borderRadius: 10,
    marginBottom: 30,
  },
});
