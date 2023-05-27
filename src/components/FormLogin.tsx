/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { CheckBox } from '@rneui/base';
import { IconShow } from '../assets/_IndexAssets';
import {IconShow} from '../assets/_IndexAssets';
import axios from 'axios';
import {API_URL} from '../env';
import AsyncStorage from '@react-native-async-storage/async-storage';
const RemindLogin = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckBox = () => setChecked(!checked);
    return (
        <CheckBox
            checked={checked}
            onPress={toggleCheckBox}
            iconType={'material-community'}
            checkedIcon={'checkbox-marked'}
            uncheckedIcon={'checkbox-blank-outline'}
            checkedColor={'#FF7A00'} 
        />
    )
}

const FormLogin = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [isError, setIsError] = useState(false);

  const isDisabled = email === '' || password === '';
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      if (response.data) {
        setIsError(false);
        await AsyncStorage.setItem('token', response.data.access_token);
        navigation.navigate('TabScreen');
      }
    } catch (error: any) {
      console.log(error.response.data.statusCode); // Konfigurasi permintaan Axios
      setIsError(true);
    }
  };

  return (
    <View style={styles.formInput}>
      <View>
        <Text style={styles.label}>Email</Text>
        {isError && (
          <Text style={styles.errorText}>Email atau password salah</Text>
        )}
        <View style={styles.entryContainer}>
          <TextInput
            style={styles.entry}
            placeholder="Masukkan Email"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={[styles.entryContainer, styles.flexPos]}>
          <TextInput
            style={styles.entry}
            placeholder="Masukkan Password"
            onChangeText={text => setPassword(text)}
            secureTextEntry={showPassword}
          />
          <TouchableOpacity>
            <IconShow
              style={styles.showStyle}
              onPress={() => setShowPassword(!showPassword)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.flexPos, styles.remindContainer]}>
        <View style={styles.flexPos}>
          <RemindLogin />
          <Text style={styles.remind}>Ingat Saya</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetBtn}>Lupa Password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[
          styles.loginBtn,
          {backgroundColor: isDisabled ? '#CCCCCC' : '#00C0CA'},
        ]}
        disabled={isDisabled}
        onPress={() => handleLogin()}>
        <Text style={styles.loginTextBtn}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormLogin;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 8,
  },
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
  remindContainer: {
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  remind: {
    color: 'black',
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
  },
  forgetBtn: {
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
});
