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
import {
  IconAgenLogo,
  IconCall_2,
  IconLocation,
} from '../../assets/_IndexAssets';

const DetailTab = () => {
  return (
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
  );
};

const RatingAndSchedule = () => {
  return (
    <View style={styles.star}>
      <Icon name="star" size={20} color="#FFD700" />
      <Icon name="star" size={20} color="#FFD700" />
      <Icon name="star" size={20} color="#FFD700" />
      <Icon name="star" size={20} color="#FFD700" />
      <Icon name="star" size={20} color="#FFD700" />
    </View>
  );
};

const ProviderAgen = ({data}: any) => {
  return (
    <>
      <View>
        <View style={styles.hrLine} />
        <View style={[styles.agenContainer]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconAgenLogo style={{marginRight: 10}} />
            <View>
              <Text style={styles.agenName}>Berkah Group</Text>
              <Text style={styles.labelSecond}>
                Jl. Telekomunikasi. Bandung
              </Text>
            </View>
          </View>
          <IconCall_2 />
        </View>
      </View>
      <View style={styles.hrLine} />
    </>
  );
};

const BuyButton = ({data, changeDetailDestination}: any) => {
  return (
    <View style={styles.buySection}>
      <View style={styles.labelPrice}>
        <Text style={styles.labelSecond}>Harga Tiket</Text>
        <Text style={styles.buyPrice}>Rp {formatRupiah(data.price)}</Text>
      </View>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => changeDetailDestination(data)}>
        <Text style={styles.buyButtonText}>Beli Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

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
        <View style={{flex: 1}}>
          <ScrollView
            style={styles.destination}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View style={styles.background}>
              <ImageBackground
                source={{uri: `${API_URL}/destination/image/${data.id}`}}
                style={styles.bannerImage}>
                <View style={styles.overlay}>
                  <Text style={styles.tourPlace}>{data.name}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <IconLocation />
                    <Text style={styles.tourCity}>{data.city}</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <DetailTab />
            <View
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
              }}>
              <RatingAndSchedule />
              <Text style={styles.labelHeader}>{data.name}</Text>
              <Text style={styles.descriptionStyle}>{data.description}</Text>
              <Text style={styles.labelHeader}>Kategori</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.categoryContainer}>
                  {toTitleCase(data.category)}
                </Text>
              </View>
              <ProviderAgen data={data} />
            </View>
          </ScrollView>
          <BuyButton
            data={data}
            changeDetailDestination={changeDetailDestination}
          />
        </View>
      )}
    </>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  destination: {
    flex: 1,
    marginBottom: 60,
  },
  background: {
    overflow: 'hidden',
    borderBottomRightRadius: 30, // Radius bawah kanan
  },
  bannerImage: {
    width: '100%',
    height: windowHeight / 3.4,
  },
  overlay: {
    padding: 15,
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Latar belakang semi-transparan
  },
  tourPlace: {
    color: 'white',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 20,
  },
  tourCity: {
    color: 'white',
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
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
  labelHeader: {
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    fontSize: 18,
    marginBottom: 12,
  },
  descriptionStyle: {
    color: '#90A8BF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 20,
  },
  categoryContainer: {
    color: 'purple',
    backgroundColor: '#E5F3FF',
    marginHorizontal: 3,
    paddingHorizontal: 2,
    fontSize: 12,
    fontFamily: 'Gilroy-Bold',
  },
  hrLine: {
    backgroundColor: '#C3D9E9',
    height: 2,
    marginVertical: 20,
  },
  agenContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '97%',
    justifyContent: 'space-between',
  },
  agenName: {
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    fontSize: 18,
  },
  labelSecond: {
    color: '#90A8BF',
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
  },
  buySection: {
    bottom: 0,
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingHorizontal: 20,
    marginBottom: 0,
    width: '100%',
    zIndex: 1,
    position: 'absolute',
  },
  labelPrice: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buyPrice: {
    color: '#00C0CA',
    fontFamily: 'Gilroy-Bold',
    fontSize: 20,
  },
  buyButton: {
    alignItems: 'center',
    backgroundColor: '#00C0CA',
    borderRadius: 10,
    height: 50,
    width: '100%',
    justifyContent: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
  },
});

export default DetailDestination;
