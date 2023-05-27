/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  RefreshControl,
} from 'react-native';
import HeaderInformation from '../../components/HeaderInformation';
import {API_URL} from '../../env';
import axios from 'axios';
import LoadingScreen from '../../components/LoadingScreen';
import TourCategory from '../../components/atoms/TourCategory';
import requestCategory from '../../functions/requestCategory';
// import env

const categoryList = [
  'Semua',
  'Pantai',
  'Gunung',
  'Goa',
  'Air Terjun',
  'Taman',
  'Museum',
];

const ButtonCategory = ({category}: any) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{category}</Text>
    </TouchableOpacity>
  );
};

const ListDestination = ({navigation}: any) => {
  const [listDestination, setListDestination] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Semua');

  const [refreshing, setRefreshing] = React.useState(false);

  const handleCategoryPress = async (category: string) => {
    setActiveCategory(category);
    setListDestination(await requestCategory(category));
  };

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    axios.get(`${API_URL}/destination`).then(res => {
      console.log(res.data);
      setListDestination(res.data);
      setLoading(false);
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    axios.get(`${API_URL}/destination`).then(res => {
      console.log(res.data);
      setListDestination(res.data);
      setLoading(false);
    });
  }, []);

  const changeDetailDestination = (item: any) => {
    navigation.navigate('DetailDestination', {
      item: item,
    });
  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <View>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View>
              <HeaderInformation for="list-destination" />
            </View>
            <View style={styles.container}>
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
              <View>
                {listDestination.map((item: any) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={styles.listDestination}
                      onPress={() => changeDetailDestination(item)}>
                      <View style={styles.destination}>
                        <Image
                          source={{
                            uri: `${API_URL}/destination/image/${item.id}/1`,
                          }}
                          style={styles.tinyLogo}
                        />
                        <View style={styles.text}>
                          <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                          <View style={styles.text.category}>
                            <Text style={{textAlign: 'center', color: 'blue'}}>
                              {item.category.charAt(0).toUpperCase() +
                                item.category.slice(1).toLowerCase()}
                            </Text>
                          </View>
                          <Text
                            style={{
                              marginTop: 5,
                              opacity: 0.6,
                            }}>
                            {item.city}
                          </Text>
                        </View>
                        <View>
                          <View style={styles.text.tiket}>
                            <Text style={{fontWeight: 'bold'}}>
                              {item.price}/tiket
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  button: {
    backgroundColor: 'orange',
    width: 65,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 6,
    padding: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
  container: {
    marginTop: 30,
    marginHorizontal: windowWidth / 15,
  },
  listDestination: {
    position: 'relative',
    padding: 7,
    backgroundColor: 'white',
    // margin: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  tinyLogo: {
    margin: 5,
    borderRadius: 8,
    width: 100,
    height: 100,
  },
  destination: {
    flexDirection: 'row',
  },
  text: {
    margin: 5,
    width: windowWidth / 2,
    marginHorizontal: 10,
    category: {
      width: 75,
      padding: 2,
      marginTop: 5,
      borderRadius: 6,
      // background random
      backgroundColor: 'rgba(0, 133, 255, 0.2)',
    },
    tiket: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
  },
});

export default ListDestination;
