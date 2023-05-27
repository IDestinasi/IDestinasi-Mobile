import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  IconPinLocation,
  IconPinLength,
  IconStar,
  Tour1,
  Tour3,
  Tour4,
} from '../assets/_IndexAssets';
import axios from 'axios';
import {API_URL} from '../env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TourCategory from './atoms/TourCategory';
import requestCategory from '../functions/requestCategory';

const TourList = ({
  tourImg,
  tourRating,
  tourEnv,
  tourPlace,
  tourProvince,
  tourLength,
  tourPrice,
}: any) => {
  const formattedPrice = tourPrice.toLocaleString('id');
  return (
    <View style={styles.tourContainer}>
      <ImageBackground
        source={{
          uri: tourImg,
        }}
        style={styles.tourImgStyle}>
        <View style={[styles.flexSub, styles.rating]}>
          <IconStar style={{marginRight: 5}} />
          <Text style={styles.ratingStyle}>{tourRating}</Text>
        </View>
      </ImageBackground>
      <View style={[styles.flexSub, styles.envStyle]}>
        <Text style={[styles.envBox, {color: 'purple'}]}>{tourEnv}</Text>
      </View>
      <View style={styles.tourBox}>
        <Text style={styles.placeStyle}>{tourPlace}</Text>
        <View style={styles.flexSub}>
          <IconPinLocation style={{marginRight: 5}} />
          <Text style={styles.subFont}>{tourProvince}</Text>
        </View>
        {/* <View style={[styles.flexSub, {marginLeft: 1}]}>
          <IconPinLength style={{marginRight: 7}} />
          <Text style={styles.subFont}>
            {tourLength[0]}km | {tourLength[1]} jam
          </Text>
        </View> */}
        <View style={[styles.flexSub, {justifyContent: 'flex-end'}]}>
          <Text style={styles.priceStyle}>{formattedPrice}</Text>
          <Text style={styles.subFont}>/tiket</Text>
        </View>
      </View>
    </View>
  );
};

const TourDiscovery = ({navigation, listDestinations}: any) => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [listDestination, setListDestination] = useState([]);
  //   const [listDestinationKey, setListDestinationKey] = useState(0);

  const toDetailDestination = (data: any) => {
    navigation.navigate('DetailDestination', {
      item: data,
    });
  };

  const handleCategoryPress = async (category: string) => {
    setActiveCategory(category);
    setListDestination(await requestCategory(category));
  };

  useEffect(() => {
    setListDestination(listDestinations);
  }, [listDestinations]);

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categories}>
          <TourCategory
            category={'Semua'}
            onPress={() => handleCategoryPress('Semua')}
            isActive={activeCategory === 'Semua'}
          />
          <TourCategory
            category={'Hutan'}
            onPress={() => handleCategoryPress('Hutan')}
            isActive={activeCategory === 'Hutan'}
          />
          <TourCategory
            category={'Gunung'}
            onPress={() => handleCategoryPress('Gunung')}
            isActive={activeCategory === 'Gunung'}
          />
          <TourCategory
            category={'Pantai'}
            onPress={() => handleCategoryPress('Pantai')}
            isActive={activeCategory === 'Pantai'}
          />
          <TourCategory
            category={'Museum'}
            onPress={() => handleCategoryPress('Museum')}
            isActive={activeCategory === 'Museum'}
          />
          <TourCategory
            category={'Binatang'}
            onPress={() => handleCategoryPress('Binatang')}
            isActive={activeCategory === 'Binatang'}
          />
        </View>
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categories}>
          {/* <TourList
            tourImg={Tour4}
            tourProvince={'Bogor'}
            tourPlace={'Taman Safari'}
            tourEnv={['Binatang', '']}
            tourRating={4.6}
            tourLength={[20, 1]}
            tourPrice={150000}
          /> */}
          {listDestination &&
            listDestination.map((data: any, index: number) => {
              return (
                <TouchableOpacity onPress={() => toDetailDestination(data)}>
                  <TourList
                    key={index}
                    tourImg={`${API_URL}/destination/image/${data.id}/1`}
                    tourProvince={data.city}
                    tourPlace={data.name}
                    tourEnv={data.category}
                    tourRating={4.9}
                    //   tourLength={[20, 1]}
                    tourPrice={data.price}
                    tourHigh={true}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TourDiscovery;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    paddingHorizontal: windowWidth / 20,
    paddingVertical: windowHeight / 65,
  },
  categoryButton: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
    marginHorizontal: windowWidth / 50,
  },
  categoryBtnTxt: {
    color: '#FF7A00',
    fontFamily: 'Gilroy-Bold',
  },
  categoryBtnTxtChoice: {
    color: 'white',
    fontFamily: 'Gilroy-Bold',
  },
  categoryButtonChoice: {
    backgroundColor: '#FF7A00',
    borderRadius: 6,
    padding: 8,
    marginHorizontal: windowWidth / 50,
  },
  tourContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: windowWidth / 50,
  },
  tourImgStyle: {
    height: windowHeight / 8,
    width: windowWidth / 2.8,
    margin: 8,
    backgroundColor: 'red',
    borderRadius: 12,
  },
  flexSub: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: windowWidth / 8,
    top: windowHeight / 130,
    left: windowWidth / 9,
  },
  envStyle: {
    alignItems: 'center',
    marginLeft: 8,
    paddingBottom: 8,
    paddingTop: 12,
  },
  envBox: {
    backgroundColor: '#E5F3FF',
    marginHorizontal: 3,
    paddingHorizontal: 2,
    fontSize: 12,
    fontFamily: 'Gilroy-Bold',
  },
  tourBox: {
    marginHorizontal: 8,
    paddingTop: 5,
  },
  placeStyle: {
    fontSize: 16,
    fontFamily: 'Gilroy-Bold',
    color: 'black',
  },
  subFont: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 12,
    color: '#90A8BF',
  },
  priceStyle: {
    fontFamily: 'Gilroy-ExtraBold',
    color: 'black',
    fontSize: 14,
  },
  ratingStyle: {
    fontFamily: 'Gilroy-Bold',
    color: 'black',
  },
});
