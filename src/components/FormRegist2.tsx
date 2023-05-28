import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {IconShow} from '../assets/_IndexAssets';
import axios from 'axios';
import {API_URL} from '../env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GenderInput = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>Jenis Kelamin</Text>
        <Text style={{color: 'red'}}>*</Text>
      </View>
    </View>
  );
};

const CategoryType = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>Yang Kamu Suka</Text>
        <Text style={{color: 'red'}}>*</Text>
      </View>
    </View>
  );
};

const FormRegist2 = ({email, password, navigation}: any) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleResgister = async () => {
    const data = {
      email: email,
      password: password,
      name: name,
      address: address,
      role: 'user',
      birth: '2022-11-08',
      phone: '0812456789',
      gender: 1,
    };

    console.log(data);

    axios
      .post(`${API_URL}/users`, {
        email: email,
        password: password,
        name: name,
        address: address,
        role: 'user',
        birth: '2022-11-08',
        phone: '0812456789',
        gender: 1,
      })
      .then(async () => {
        const response = await axios.post(`${API_URL}/auth/login`, {
          email: email,
          password: password,
        });
        if (response.data) {
          await AsyncStorage.setItem('token', response.data.access_token);
          navigation.navigate('RegistSuccess');
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <View style={styles.formInput}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <View style={styles.entryContainer}>
          <TextInput
            onChangeText={text => setName(text)}
            style={styles.entry}
            placeholder="Masukkan Nama Lengkap"
          />
        </View>
      </View>
      {/* <GenderInput /> */}
      {/* <CategoryType /> */}
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.label}>Alamat</Text>
          <Text style={{color: 'red'}}>*</Text>
        </View>
        <View style={styles.addressContainer}>
          <TextInput
            onChangeText={text => setAddress(text)}
            style={styles.entry}
            placeholder="Masukkan Alamat"
          />
        </View>
      </View>
      <View style={[styles.flexPos, styles.tosContainer]}>
        <View style={styles.flexPos}>
          <Text style={styles.acceptTos}>Saya menyutujui</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.tos}>Syarat & Ketentuan</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => handleResgister()}>
        <Text style={styles.loginTextBtn}>Daftar Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormRegist2;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  formInput: {
    marginHorizontal: windowWidth / 19,
  },
  label: {
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    fontSize: 14,
    marginBottom: 12,
  },
  entryContainer: {
    backgroundColor: '#F8F9FD',
    borderRadius: 10,
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  entry: {
    color: '#90A8BF',
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
    paddingVertical: 18,
    marginLeft: 27,
  },
  flexPos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showStyle: {
    marginRight: 18,
  },
  tosContainer: {
    marginBottom: 40,
  },
  acceptTos: {
    color: 'black',
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
    marginRight: 5,
  },
  tos: {
    color: '#00C0CA',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 14,
  },
  loginBtn: {
    alignItems: 'center',
    backgroundColor: '#00C0CA',
    borderRadius: 10,
    paddingVertical: 16,
    marginBottom: 24,
  },
  loginTextBtn: {
    color: 'white',
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
  },
  addressContainer: {
    backgroundColor: '#F8F9FD',
    borderRadius: 10,
    height: windowHeight / 7,
  },
});
