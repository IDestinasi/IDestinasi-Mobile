import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {IconUpArrow} from '../../assets/_IndexAssets';
/*
import {
  HeaderInformation,
  TourCatalog,
  TourDiscovery,
  TourPackets,
} from '../../components/_IndexComponents';
*/
import HeaderInformation from '../../components/HeaderInformation';
import TourCatalog from '../../components/TourCatalog';
import TourDiscovery from '../../components/TourDiscovery';
import TourPackets from '../../components/TourPackets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '../../env';
import LoadingScreen from '../../components/LoadingScreen';
import ListDestination from './ListDestinationUserScreen';

const TourHeader = ({
  navigation,
  tourListTitle,
  tourListDesc,
  HighDemand,
}: any) => {
  return (
    <View style={styles.discoveryHeader}>
      <View>
        <Text style={styles.labelHeader}>{tourListTitle}</Text>
        <View style={styles.labelDemand}>
          {HighDemand ? <IconUpArrow /> : <View />}
          <Text style={styles.labelSubHeader}>{tourListDesc}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ListDestination');
        }}>
        <Text style={styles.labelMore}>Lihat Semua</Text>
      </TouchableOpacity>
    </View>
  );
};

const Home = ({navigation}: any) => {
  const toListDestintion = () => {
    navigation.navigate('ListDestination');
  };

  const [listDestination, setListDestination] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newDestination, setNewDestination] = useState([]);

  useEffect(() => {
    const getToken = async () => {
      return await AsyncStorage.getItem('token');
    };

    getToken().then(token => {
      if (token) {
        axios
          .get(
            `${API_URL}/destination/new`,
            // WITH HEADER JWT
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then(res => {
            setNewDestination(res.data);
          })
          .catch(() => {});

        axios
          .get(`${API_URL}/destination`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(res => {
            setListDestination(res.data);
            setIsLoading(false);
          });
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <HeaderInformation for="home-user" />
        </View>
        <View>
          <Text style={[styles.catalogHeader, styles.labelHeader]}>
            Tempat Wisata Baru
          </Text>
        </View>
        <TourCatalog navigation={navigation} newDestination={newDestination} />
        <TourHeader
          tourListTitle={'Jelajahi Tempat Wisata'}
          tourListDesc={'Menandakan high-demand di area'}
          HighDemand={true}
          navigation={navigation}
        />
        <TourDiscovery
          navigation={navigation}
          listDestinations={listDestination}
        />
        {/* <TourHeader
          tourListTitle={'Paket Untukmu'}
          tourListDesc={'Temukan paket perjalanan yang menarik'}
        />
        <TourPackets />  */}
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
    marginBottom: 15,
  },
  catalogHeader: {
    marginHorizontal: windowWidth / 15,
    marginTop: windowHeight / 50,
  },
  discoveryHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: windowWidth / 15,
    justifyContent: 'space-between',
    paddingTop: windowWidth / 50,
  },
  labelHeader: {
    fontSize: 16,
    fontFamily: 'Gilroy-ExtraBold',
    fontWeight: 'bold',
    color: 'black',
  },
  labelSubHeader: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#90A8BF',
  },
  labelDemand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelMore: {
    color: '#00C0CA',
    fontFamily: 'Gilroy-Bold',
  },
});
