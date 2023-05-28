import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Tour1, Tour2, IconStar} from '../assets/_IndexAssets';
import {API_URL} from '../env';

const TourPicture = ({data, navigation}: any) => {
  const toDetailDestination = () => {
    navigation.navigate('DetailDestination', {
      item: data,
    });
  };

  return (
    <TouchableOpacity onPress={() => toDetailDestination()}>
      <ImageBackground
        source={{uri: `${API_URL}/destination/image/${data.id}`}}
        style={styles.containerImg}
        borderRadius={20}>
        <View style={styles.rating}>
          <IconStar style={{marginRight: 5}} />
          <Text style={styles.subFont}>4.5</Text>
        </View>
        <View style={styles.destination}>
          <Text style={[styles.province, styles.mainFont]}>{data.city}</Text>
          <Text style={[styles.place, styles.mainFont]}>{data.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const TourCatalog = ({navigation, newDestination}: any) => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.containerRow}>
        {newDestination.map((data: any) => {
          return (
            <TourPicture key={data.id} data={data} navigation={navigation} />
          );
        })}
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
    width: windowWidth / 1.8,
    height: windowHeight / 4.9,
    marginRight: 12,
  },
  rating: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: windowWidth / 4.5,
    top: windowHeight / 50,
    left: windowWidth / 5,
    height: 25,
  },
  destination: {
    position: 'absolute',
    marginHorizontal: 10,
    bottom: 5,
    // right: windowWidth / 9,
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
