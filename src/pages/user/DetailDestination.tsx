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
  Text,
  Image
} from 'react-native';
import {API_URL} from '../../env';
import axios from 'axios';
import LoadingScreen from '../../components/LoadingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {toTitleCase} from '../../functions/ToTitleCase';
import formatRupiah from '../../functions/formatRupiah';
import { IconAgenLogo, IconCall_2, IconLocation, ImageSnorkelling, ImagePerahu, ImageReviewer, IconDot } from '../../assets/_IndexAssets';

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
    <View style={styles.straightItems}>
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
    <View>
      <View style={styles.hrLine} />
        <View style={[styles.agenContainer, ]}>
          <View style={{flexDirection: 'row', alignItems : 'center'}}>
          <IconAgenLogo style={{marginRight : 10}} />
            <View>
              <Text style={styles.nameStyle}>Berkah Group</Text>
              <Text style={styles.labelSecond}>Jl. Telekomunikasi. Bandung</Text>
            </View>
          </View>
          <IconCall_2 />
        </View>
      <View style={styles.hrLine} />
    </View>
  )
}

const DetailTabDescription = ({data, changeDetailDestination}: any) => {
  return (
    <View style={{width: Dimensions.get('window').width, flex: 1}}>
      <View style={styles.tabContainer}>
        <RatingAndSchedule />
        <Text style={styles.labelHeader}>KENAPA HARUS BERKUNJUNG : Surga Indonesia</Text>
        <Text style={styles.descriptionStyle}>{data.description}</Text>
        <Text style={styles.labelHeader}>Kategori</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.categoryContainer}>{toTitleCase(data.category)}</Text>
        </View>
        <ProviderAgen />
      </View>
      <BuyButton data={data} changeDetailDestination={changeDetailDestination} />
    </View>
  )
}

const RentTabItems = ({
  rentalItemImg, 
  rentalItemName, 
  rentalItemMore, 
  rentalItemQty,
  rentalItemPrice,
  isRent
} : any) => {
  const formattedPrice = rentalItemPrice.toLocaleString('id');
  return (
    <View style={styles.rentsContainer}>
      <View style={styles.rentsValues}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Image source={rentalItemImg} style={styles.rentItemImage}/>
          <View>
            <Text style={[styles.nameStyle, {marginBottom: 5}]}>{rentalItemName}</Text>
            <Text style={styles.labelSecond}>{rentalItemMore}</Text>
          </View>
        </View>
        {
        isRent ?
        <Text style={styles.itemQtyStyle}>{rentalItemQty} tersisa</Text>
        :
        <Text style={[styles.itemQtyStyle, {color: '#90A8BF'}]}>{rentalItemQty} tersisa</Text>
        }
      </View>
      {
      isRent ?
      <View>
        <Text style={[styles.buyPrice, {textAlign: 'right'}]}>Rp {formattedPrice}</Text> 
        <TouchableOpacity style={styles.buttonRents}>
          <Text style={[styles.buyPrice, {fontSize: 16}]}>Beli Sekarang</Text>
        </TouchableOpacity> 
      </View>
      :
      <View>
        <Text style={[styles.buyPrice, {textAlign: 'right', color: '#90A8BF'}]}>Rp {formattedPrice}</Text> 
      </View>
      }
    </View>
  )
}

const RentTabDescription = () => {
  return (
    <View style={{width: Dimensions.get('window').width}}>
      <View style={styles.tabContainer}>
        <View>
          <Text style={styles.labelHeader}>Barang Sewa Tersedia (2)</Text>
          <RentTabItems 
            rentalItemImg={ImageSnorkelling}
            rentalItemName={'Alat Snorkelling'}
            rentalItemMore={'Masker, Snorkel, Fin'}
            rentalItemQty={15}
            rentalItemPrice={50000}
            isRent={true} 
          />
        </View>
        <View>
          <Text style={styles.labelHeader}>Barang Sewa Habis (1)</Text>
          <RentTabItems 
            rentalItemImg={ImagePerahu}
            rentalItemName={'Perahu'}
            rentalItemMore={'Perahu Tradisional'}
            rentalItemQty={0}
            rentalItemPrice={250000}
            isRent={false}
          />
        </View>
      </View>
    </View>
  )
}

const ReviewComment = ({reviewerProfilePic, reviewerName, commentDate, reviewerRating, commentText}: any) => {
  return (
    <View>
      <View style={[styles.straightItems, styles.commentHead]}>
        <View style={styles.straightItems}>
          <Image source={reviewerProfilePic} style={{width: 40, height: 40, marginRight: 10}}/>
          <Text style={styles.reviewerNameStyle}>{reviewerName}</Text>
        </View>
        <IconDot />
        <Text style={styles.labelSecond}>{commentDate}</Text>
      </View>
      {/*
      <View style={styles.straightItems}>
        <Text style={{marginRight: 10}}>disini rating</Text>
        <Text>{reviewerRating}</Text>
      </View>
      */}
      <Text style={{
        color: 'black', 
        fontFamily: 'Gilroy-Regular', 
        fontSize: 12,
        marginTop: 16
      }}>{commentText}</Text>
    </View>
  )
}

const ReviewTabDescription = () => {
  return (
    <View style={{width: Dimensions.get('window').width}}>
      <View style={styles.tabContainer}>
        <Text style={[styles.nameStyle, {textAlign: 'center'}]}>Ulasan Pengunjung</Text>
        <View style={[styles.straightItems, styles.ratingReviewContainer]}>
          <RatingAndSchedule />
          <Text style={{color: 'black', fontFamily: 'Gilroy-Bold', fontSize: 14}}>4.9</Text>
          <Text style={styles.labelSecond}>(203 ulasan)</Text>
        </View>
        <ReviewComment 
          reviewerProfilePic={ImageReviewer}
          reviewerName={'Anita Salim'}
          commentDate={'10 jam yang lalu'}
          commentText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        />
        <ReviewComment 
          reviewerProfilePic={ImageReviewer}
          reviewerName={'Anita Salim'}
          commentDate={'10 jam yang lalu'}
          commentText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis. Aenean et tortor at risus viverra adipiscing at in tellus. Neque vitae tempus quam pellentesque nec. Turpis egestas integer eget aliquet nibh praesent. Ullamcorper dignissim cras tincidunt lobortis feugiat. Tellus cras adipiscing enim eu. Arcu felis bibendum ut tristique et egestas. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Integer vitae justo eget magna fermentum. Blandit libero volutpat sed cras. Ac tortor dignissim convallis aenean.'}
        />
      </View>
    </View>
  )
}

const BuyButton = ({data, changeDetailDestination} : any) => {
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
        <View style={[{flex: 1, backgroundColor: 'white'}]}>
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
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
              <DetailTabDescription data={data} changeDetailDestination={changeDetailDestination} />
              <RentTabDescription />
              <ReviewTabDescription />
            </ScrollView>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  destination: {
    flex: 1,
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
  tabContainer: {
    paddingHorizontal: 15, 
    paddingVertical: 10
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
    color: 'black',
    fontFamily: 'Gilroy-Regular',
    fontSize: 14
  },
  straightItems: {
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
  nameStyle: {
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
    backgroundColor: 'white',
    bottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginBottom: 0,
    width: '100%',
    zIndex: 1,
    position: 'absolute'
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
    fontSize: 16
  },
  rentItemImage: {
    width: 52,
    height: 52,
    marginRight: 11,
  },
  rentsContainer: {
    padding: 16,
  },
  rentsValues: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  itemQtyStyle: {
    color: '#FF7A00'
  },
  buttonRents: {
    alignItems: 'center',
    borderColor: '#00C0CA',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 16,
    marginTop: 16
  },
  ratingReviewContainer: {
    backgroundColor: '#F8F9FD',
    borderRadius: 16,
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: windowWidth / 5,
  },
  reviewerNameStyle: {
    color: 'black',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 14
  },
  commentHead: {
    justifyContent: 'space-between',
    width: '70%',
    marginVertical: 16,
  },
});

export default DetailDestination;
