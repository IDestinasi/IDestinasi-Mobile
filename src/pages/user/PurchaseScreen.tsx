/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {API_URL} from '../../env';
import {toTitleCase} from '../../functions/ToTitleCase';
import {RadioButton} from 'react-native-paper';

import DatePicker from 'react-native-modern-datepicker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Purchase = ({route, navigation}: {route: any; navigation: any}) => {
  const data = route.params.data;

  const currentDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(data.price);

  const handleMetodePembayaranPress = (method: string) => {
    setSelectedMethod(method);
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handlePurchase = async () => {
    const token = await AsyncStorage.getItem('token');

    const createOrder = {
      idDestinasi: data.id,
      qty: count,
      visitingDate: selectedDate,
      payment: selectedMethod,
    };

    axios
      .post(`${API_URL}/order`, createOrder, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        navigation.navigate('OrderSuccess', {
          data: res.data,
        });
      });
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.beli_tiket}>Beli Tiket</Text>
      </View>
      <View style={styles.destination}>
        <Image
          source={{
            uri: `${API_URL}/destination/image/${data.id}/1`,
          }}
          style={styles.tinyLogo}
        />
        <View>
          <Text style={styles.title}>{toTitleCase(data.name)}</Text>
          <Text>{data.city}</Text>
        </View>
      </View>
      <View style={styles.detail}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Detail Tiket
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View>
            <Text>Banyak Tiket</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterText}>{count}</Text>
              <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{textAlign: 'right'}}>Tanggal</Text>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => setShowDatePicker(true)}>
              <Text>Pilih Tanggal</Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'right'}}>{selectedDate}</Text>
            <Modal
              transparent={true}
              visible={showDatePicker}
              animationType="fade">
              <View style={styles.modalContainer}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setShowDatePicker(false)}>
                  <Text>Tutup</Text>
                </TouchableOpacity>
                <DatePicker
                  options={{
                    textHeaderColor: 'black',
                    textDefaultColor: 'black',
                    selectedTextColor: 'black',
                    mainColor: '#00C0CA',
                    textSecondaryColor: '#D6C7A1',
                    borderColor: 'rgba(122, 146, 165, 0.1)',
                  }}
                  current={currentDate}
                  selected={selectedDate}
                  mode="calendar"
                  minuteInterval={30}
                  style={styles.datePicker}
                  onDateChange={date => {
                    setSelectedDate(date);
                    setShowDatePicker(false);
                  }}
                />
              </View>
            </Modal>
          </View>
        </View>
      </View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          Metode Pembayaran
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton.Android
            value="Permata"
            status={selectedMethod === 'Permata' ? 'checked' : 'unchecked'}
            onPress={() => handleMetodePembayaranPress('Permata')}
          />
          <Text>Permata</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton.Android
            value="BRI"
            status={selectedMethod === 'BRI' ? 'checked' : 'unchecked'}
            onPress={() => handleMetodePembayaranPress('BRI')}
          />
          <Text>BRI</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton.Android
            value="BCA"
            status={selectedMethod === 'BCA' ? 'checked' : 'unchecked'}
            onPress={() => handleMetodePembayaranPress('BCA')}
          />
          <Text>BCA</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => handlePurchase()}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16,
            marginTop: 20,
            color: 'black',
          }}>
          Bayar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  beli_tiket: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  destination: {
    marginBottom: 20,
    marginTop: 35,
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  tinyLogo: {
    marginHorizontal: 10,
    borderRadius: 8,
    width: 52,
    height: 50,
  },
  detail: {
    padding: 20,
    backgroundColor: 'white',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  datePicker: {
    width: '100%',
    height: '65%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  counterText: {
    marginHorizontal: 10,
    fontSize: 20,
  },
  pembayaran: {
    marginBottom: 20,
    marginTop: 35,
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});

export default Purchase;
