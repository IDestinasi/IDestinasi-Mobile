import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Dimensions,
  Text,
} from 'react-native';
import {
  IconNotification,
  ImageProfile,
  ImageIDestinasiWhite,
  HeaderBanner,
  IconSearch,
} from '../assets/_IndexAssets';

const HeaderInformation = (props: any) => {
  console.log(props);
  return (
    <View>
      <ImageBackground source={HeaderBanner} style={styles.banner}>
        {props.for == 'home-user' ? (
          <>
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
          </>
        ) : (
          <View style={styles.jelajah}>
            <Text style={styles.jelajah.teks}>Jelajah Tempat Wisata</Text>
          </View>
        )}
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
  jelajah: {
    position: 'absolute',
    bottom: 15,
    marginHorizontal: windowWidth / 15,
    teks: {
      marginBottom: 20,
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
    },
  },
});
