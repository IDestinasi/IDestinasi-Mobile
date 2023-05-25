import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  IconNotification,
  ImageProfile,
  ImageIDestinasiWhite,
  HeaderBanner,
  IconSearch,
} from '../assets/_IndexAssets';

const HeaderInformation = () => {
  return (
    <View>
      <ImageBackground source={HeaderBanner} style={styles.banner}>
        <View style={styles.container}>
          <ImageIDestinasiWhite />
          <View style={styles.containerR}>
            <TouchableOpacity>
              <IconNotification style={styles.spaced} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageProfile />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.searchContainer}>
        <IconSearch />
        <TextInput style={styles.searchInput} placeholder="Cari disini" />
      </View>
    </View>
  );
};

export default HeaderInformation;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  banner: {
    height: windowHeight / 4.9,
    backgroundColor: 'rgba(0, 192, 202, 0.9)',
  },
  container: {
    marginHorizontal: windowWidth / 15,
    marginVertical: windowHeight / 15.5,
    paddingHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerR: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  spaced: {
    marginRight: 10,
  },
  searchContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginHorizontal: windowWidth / 15,
    marginTop: -windowHeight / 30,
  },
  searchInput: {
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
    width: 100,
  },
});
