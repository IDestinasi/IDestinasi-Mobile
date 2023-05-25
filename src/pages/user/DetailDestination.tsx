/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native';
import {API_URL} from '../../env';
import axios from 'axios';
import LoadingScreen from '../../components/LoadingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {toTitleCase} from '../../functions/ToTitleCase';
import formatRupiah from '../../functions/formatRupiah';

const DetailDestination = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [data, setData] = useState(route.params.item);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const changeDetailDestination = (item: any) => {
    navigation.navigate('Purchase', {
      data: item,
    });
  };

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    axios.get(`${API_URL}/destination/${data.id}`).then(res => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
      setRefreshing(false);
    });
  }, [data.id]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ScrollView
          style={styles.destination}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={styles.background}>
            <ImageBackground
              source={{uri: `${API_URL}/destination/image/${data.id}/1`}}
              style={styles.bannerImage}>
              <View style={styles.overlay}>
                <Text style={styles.text}>{data.name}</Text>
                <Text style={{color: 'white'}}>{data.city}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>Detail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>Penyewaan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuButtonText}>Review</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}>
            <View style={styles.star}>
              <Icon name="star" size={20} color="#FFD700" />
              <Icon name="star" size={20} color="#FFD700" />
              <Icon name="star" size={20} color="#FFD700" />
              <Icon name="star" size={20} color="#FFD700" />
              <Icon name="star" size={20} color="#FFD700" />
            </View>
            <Text
              style={{
                fontSize: 14,
              }}>
              {data.description}
            </Text>
            <Text>Kategori</Text>
            <Text>{toTitleCase(data.category)}</Text>
          </View>
          <View style={styles.buttonBeli}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Harga Tiket</Text>
              <Text>Rp. {formatRupiah(data.price)}</Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                height: 50,
                width: '100%',
                backgroundColor: '#00C0CA',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => changeDetailDestination(data)}>
              <Text style={{fontSize: 16, color: 'white'}}>Beli Sekarang</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  destination: {
    backgroundColor: 'white',
  },
  background: {
    overflow: 'hidden',
    borderBottomRightRadius: 30, // Radius bawah kanan
  },
  bannerImage: {
    width: '100%',
    height: windowHeight / 3.5,
  },
  overlay: {
    padding: 15,
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Latar belakang semi-transparan
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  menuButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#00C0CA',
  },
  menuButtonText: {
    fontSize: 16,
    color: 'black',
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonBeli: {
    bottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#CFD0D8',
  },
});

export default DetailDestination;
