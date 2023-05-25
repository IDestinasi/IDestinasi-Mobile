import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Tour1, Tour2, IconStar} from '../assets/_IndexAssets';

const TourPicture = ({tourImg, tourRating, tourProvince, tourPlace}: any) => {
  return (
    <ImageBackground source={tourImg} style={styles.containerImg}>
      <View style={styles.rating}>
        <IconStar style={{marginRight: 5}} />
        <Text style={styles.subFont}>{tourRating}</Text>
      </View>
      <View style={styles.destination}>
        <Text style={[styles.province, styles.mainFont]}>{tourProvince}</Text>
        <Text style={[styles.place, styles.mainFont]}>{tourPlace}</Text>
      </View>
    </ImageBackground>
  );
};

const TourCatalog = () => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.containerRow}>
        <TourPicture
          tourImg={Tour1}
          tourRating={4.9}
          tourProvince={'Nusa Tenggara'}
          tourPlace={'Labuan Bajo'}
        />
        <TourPicture
          tourImg={Tour2}
          tourRating={4.9}
          tourProvince={'Papua'}
          tourPlace={'Raja Ampat'}
        />
      </View>
    </ScrollView>
  );
};

export default TourCatalog;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: windowHeight / 90,
  },
  containerRow: {
    flexDirection: 'row',
    paddingHorizontal: windowWidth / 15,
    width: '100%',
  },
  containerImg: {
    width: windowWidth / 1.7,
    height: windowHeight / 4.6,
    marginRight: 12,
  },
  rating: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: windowWidth / 4.2,
    top: windowHeight / 50,
    left: windowWidth / 5,
    height: 25,
  },
  destination: {
    justifyContent: 'center',
    marginHorizontal: windowWidth / 7,
    top: windowHeight / 8.5,
    right: windowWidth / 9,
  },
  province: {
    fontSize: 14,
    color: '#FFBF00',
  },
  place: {
    fontSize: 16,
    color: 'white',
  },
  mainFont: {
    fontFamily: 'Gilroy-Bold',
  },
  subFont: {
    fontFamily: 'Gilroy-Bold',
    color: 'black',
  },
});
