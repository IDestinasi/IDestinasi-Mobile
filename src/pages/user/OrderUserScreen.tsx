import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  HeaderBanner,
  Tour1,
  Tour5,
  ImageSnorkelling,
} from '../../assets/_IndexAssets';
//import { UpComingOrder, SettledOrder, RentalOrder } from '../../components/_IndexComponents';
import UpComingOrder from '../../components/UpComingOrder';
import SettledOrder from '../../components/SettledOrder';
import RentalOrder from '../../components/RentalOrder';
import axios from 'axios';
import {API_URL} from '../../env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UnpaidOrder from '../../components/UnpaidOrder';

const OrderScreen = () => {
  const [myOrder, setMyOrder] = useState({
    paid: [],
    visited: [],
    unpaid: [],
  });

  useEffect(() => {
    const getDataOrder = async () => {
      const token = await AsyncStorage.getItem('token');

      axios
        .get(`${API_URL}/order/destination`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then((res: any) => {
          setMyOrder(res.data);
        });
    };

    getDataOrder();
  }, []);
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground source={HeaderBanner} style={styles.banner}>
        <View style={styles.bannerHeader}>
          <Text style={styles.labelPesananku}>Pesananku</Text>
          <Text style={{color: 'white'}}>Lihat pesananmu disini</Text>
        </View>
      </ImageBackground>
      <UpComingOrder data={myOrder.paid} />
      <UnpaidOrder data={myOrder.unpaid} />
      <SettledOrder data={myOrder.visited} />
      <RentalOrder
        rentalItemImg={ImageSnorkelling}
        rentalItemName={'Snorkelling'}
        rentalItemMore={'Masker, Snorkel, Fin'}
        timeLeft={'2j 6m'}
      />
    </ScrollView>
  );
};

export default OrderScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  banner: {
    height: windowHeight / 4.9,
    backgroundColor: 'rgba(0, 192, 202, 0.9)',
  },
  bannerHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: windowHeight / 7,
    top: windowHeight / 9.6,
    right: windowWidth / 3.5,
  },
  labelPesananku: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
  },
});
