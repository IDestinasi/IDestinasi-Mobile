import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import { HeaderBanner, Tour1, Tour5, ImageSnorkelling } from '../../assets/_IndexAssets';
import { UpComingOrder, SettledOrder, RentalOrder } from '../../components/_IndexComponents';

const OrderScreen = () => {
  return (
    <View style={{flex : 1}}>
      <ImageBackground source={HeaderBanner} style={styles.banner}>
        <View style={styles.bannerHeader}>
          <Text style={styles.labelPesananku}>Pesananku</Text>
          <Text style={{color : 'white'}}>Lihat pesananmu disini</Text>
        </View>
      </ImageBackground>
      <UpComingOrder
        tourImg = {Tour5}
        tourPlace = {'Gunung Bromo'}
        ticketCount = {1}
        date = {'Senin, 14 Mei 2023'}
      />
      <SettledOrder 
        tourImg = {Tour1}
        tourPlace = {'Labuan Bajo'}
        ticketCount = {2}
        date = {'Minggu, 13 Mei 2023'}
      />
      <RentalOrder
        rentalItemImg = {ImageSnorkelling}
        rentalItemName = {'Snorkelling'}
        rentalItemMore = {'Masker, Snorkel, Fin'}
        timeLeft = {'2j 6m'}
      />
    </View>
  )
}

export default OrderScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 

const styles = StyleSheet.create({
  banner : {
    height : windowHeight / 4.9,
    backgroundColor : 'rgba(0, 192, 202, 0.9)',
  },
  bannerHeader : {
    flexDirection : 'column',
    alignItems : 'center',
    marginHorizontal : windowHeight / 7,
    top : windowHeight / 9.6,
    right : windowWidth / 3.5
  },
  labelPesananku : {
    fontSize : 24, 
    color : 'white', 
    fontWeight : '500'
  },
});