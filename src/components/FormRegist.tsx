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

const FormRegist = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.formInput}>
      <View>
        <Text style={styles.label}>Email</Text>
        <View style={styles.entryContainer}>
          <TextInput
            onChangeText={text => setEmail(text)}
            style={styles.entry}
            placeholder="Masukkan Email"
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <View style={[styles.entryContainer, styles.flexPos]}>
            <TextInput
              onChangeText={text => setPassword(text)}
              style={styles.entry}
              placeholder={'Masukan Password 6 digit'}
            />
            <TouchableOpacity>
              <IconShow style={styles.showStyle} />
            </TouchableOpacity>
          </View>
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
        onPress={() =>
          navigation.navigate('UserRegister2', {
            email: email,
            password: password,
          })
        }>
        <Text style={styles.loginTextBtn}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormRegist;

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
});
