/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions
} from 'react-native';
import {API_URL} from '../../env';
import {toTitleCase} from '../../functions/ToTitleCase';
import {RadioButton} from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  IconBackArrow_2, 
  IconCalendar, 
  ImagePermataLogo,
  ImageBRILogo,
  ImageBCALogo
} from '../../assets/_IndexAssets';

const ChooseDate = ({showDatePicker, setShowDatePicker, selectedDate, setSelectedDate, currentDate} : any) => {
  return(
    <View style={{marginVertical: 16}}>
      <View style={{flexDirection : 'row', justifyContent: 'space-between'}}>
        <Text style={styles.labelHeader}>Tanggal Keberangkatan</Text> 
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}>
          <View style={{
            alignItems: 'center', 
            flexDirection: 'row',
          }}>
            <Text style={[styles.subLabelHeader, {marginRight: 5}]}>Pilih Tanggal</Text>
            <Image source={IconCalendar} style={styles.calendarStyle} />
          </View>
        </TouchableOpacity>
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
      <View style={styles.dateContainer}>
        <Text style={styles.dateStyle}>
          {selectedDate.slice(8, 10)}{selectedDate.slice(4, 8)}{selectedDate.slice(0, 4)}
          </Text>
      </View>
    </View>
  )
}

const TicketAmount = ({handleIncrement,handleDecrement, count} : any) => {
  return (
    <View>
      <Text style={styles.labelHeader}>Banyak Tiket</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>—</Text>
        </TouchableOpacity>
        <View style={styles.counterTextContainer}>
          <Text style={styles.counterText}>{count}</Text>
          <Text style={styles.subLabelHeader}>tiket</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const PurchaseMethod = ({selectedMethod, handleMetodePembayaranPress} : any) => {
  return (
    <View style={styles.purchaseContainer}>
        <Text style={styles.labelHeader}>Metode Pembayaran</Text>
        <View style={styles.hrLine} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton.Android
            value="Permata"
            status={selectedMethod === 'Permata' ? 'checked' : 'unchecked'}
            onPress={() => handleMetodePembayaranPress('Permata')}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.bankLogoContainer}>
              <Image source={ImagePermataLogo} style={styles.bankImageContainer}/>
            </View>
            <Text style={styles.bankText}>Permata</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton.Android
            value="BRI"
            status={selectedMethod === 'BRI' ? 'checked' : 'unchecked'}
            onPress={() => handleMetodePembayaranPress('BRI')}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.bankLogoContainer}>
              <Image source={ImageBRILogo} style={styles.bankImageContainer}/>
            </View>
            <Text style={styles.bankText}>BRI</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton.Android
            value="BCA"
            status={selectedMethod === 'BCA' ? 'checked' : 'unchecked'}
            onPress={() => handleMetodePembayaranPress('BCA')}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.bankLogoContainer}>
              <Image source={ImageBCALogo} style={styles.bankImageContainer}/>
            </View>
            <Text style={styles.bankText}>BCA</Text>
          </View>
        </View>
      </View>
  )
}

const BuyButton = () => {
  return (
    <View style={styles.buySection}>
      <View style={styles.labelPrice}>
        <Text style={styles.labelSecond}>Harga Tiket</Text>
        <Text style={styles.buyPrice}>Rp 20.000</Text>
      </View>
      <TouchableOpacity style={styles.buyButtonStyle}>
        <Text style={styles.buyButtonText}>Bayar Sekarang</Text>
      </TouchableOpacity>
    </View>
  )
}

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
    <View>
      <View style={styles.container}>
        <View style={styles.beliTiketHeader}>
          <TouchableOpacity 
            style={styles.backButtonContainer}
          >
            <Image source={IconBackArrow_2} style={styles.backButton} />
          </TouchableOpacity>
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
          <Text style={styles.labelHeader}>{toTitleCase(data.name)}</Text>
          <Text style={styles.subLabelHeader}>{data.city}</Text>
        </View>
      </View>
        <View style={styles.detail}>
          <Text style={styles.labelHeader}>Detail Tiket</Text>
          <View style={styles.hrLine} />
          <ChooseDate
            showDatePicker={showDatePicker}
            setShowDatePicker={setShowDatePicker} 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate} 
            currentDate={currentDate}
          />
          <View style={styles.hrLine} />
          <TicketAmount 
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement} 
            count={count}
          />
        </View>
        <PurchaseMethod selectedMethod={selectedMethod} handleMetodePembayaranPress={handleMetodePembayaranPress}/>
      </View>
      <BuyButton />
    </View>

  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  beli_tiket: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Gilroy-Bold',
    fontSize: 20,
  },
  destination: {
    alignItems : 'center',
    marginBottom: 20,
    marginTop: 35,
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 12
  },
  labelHeader: {
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    marginBottom: 5
  },
  subLabelHeader: {
    color: '#90A8BF',
    fontFamily: 'Gilroy-Regular',
    fontSize: 16
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
    borderRadius: 12
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
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#00C0CA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#00C0CA',
    fontSize: 16,
  },
  counterTextContainer: {
    marginHorizontal: 10,
    flexDirection: 'row', 
    alignItems : 'center'
  },
  counterText: {
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    fontSize: 20,
    marginRight: 5,
  },
  pembayaran: {
    marginBottom: 20,
    marginTop: 35,
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  beliTiketHeader: {
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent : 'space-between',
    width : '62%'
  },
  backButtonContainer: {
    padding: 13, 
    backgroundColor: 'white', 
    borderRadius: 12
  },
  backButton: {
    width: 20,
    height: 19,
  },
  hrLine: {
    backgroundColor: '#C3D9E9',
    height: 2,
    marginVertical : 10
  },
  calendarStyle: {
    width: 21,
    height: 21
  },
  dateContainer: {
    alignItems: 'center',
    backgroundColor: '#00C0CA',
    marginTop: 12,
    marginHorizontal: windowWidth / 4,
    padding: 0
  },
  dateStyle: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 16
  },
  purchaseContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 20,
    padding: 20,
  },
  bankImageContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  bankLogoContainer: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  bankText: {
    color: '#464646',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 16
  },
  buySection: {
    backgroundColor: 'white',
    marginBottom: 0,
    width: '100%',
    paddingHorizontal: 25,
  },
  labelPrice: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 10
  },
  labelSecond: {
    color: '#90A8BF',
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
  },
  buyPrice: {
    color: '#00C0CA',
    fontFamily: 'Gilroy-Bold',
    fontSize: 20
  },
  buyButtonStyle: {
    alignItems: 'center',
    backgroundColor: '#00C0CA',
    borderRadius: 10,
    height: 50,
    width: '100%',
    justifyContent : 'center',
  },
  buyButtonText: {
    color: 'white',
    fontFamily: 'Gilroy-Bold',
    fontSize: 16
  }
});

export default Purchase;
