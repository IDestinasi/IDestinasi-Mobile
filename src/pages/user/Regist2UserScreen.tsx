import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {IconBackArrow, ImageRecord} from '../../assets/_IndexAssets';
import FormRegist2 from '../../components/FormRegist2';

const Regist2UserScreen = (data: any, {navigation}: any) => {
  const email = data.route.params.email;
  const password = data.route.params.password;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate('UserRegister')}>
            <IconBackArrow />
          </TouchableOpacity>
          <View style={styles.recordStyle}>
            <Image source={ImageRecord} style={styles.recordImg} />
          </View>
          <View style={styles.welcomeBox}>
            <Text style={styles.welcomeMsg}>Satu langkah lagi.</Text>
            <Text style={styles.welcomeSubMsg}>
              Yuk, lengkapi data dirimu untuk mendapatkan pengalaman yang lebih
            </Text>
          </View>
          <FormRegist2
            email={email}
            password={password}
            navigation={data.navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Regist2UserScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backBtn: {
    alignItems: 'center',
    borderRadius: 12,
    marginTop: windowHeight / 20,
    left: windowWidth / 20,
    width: '10%',
    padding: 13,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  recordStyle: {
    alignItems: 'center',
    marginTop: 4,
  },
  recordImg: {
    width: 101,
    height: 101,
  },
  welcomeBox: {
    alignItems: 'center',
  },
  welcomeMsg: {
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    fontSize: 28,
    marginTop: 22,
  },
  welcomeSubMsg: {
    textAlign: 'center',
    color: '#90A8BF',
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 16,
    width: windowWidth / 1.1,
  },
  flexPos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addInfo: {
    justifyContent: 'space-between',
    marginHorizontal: windowWidth / 5,
  },
  info1: {
    color: '#90A8BF',
    fontFamily: 'Gilroy-Regular',
  },
  info2: {
    color: '#00C0CA',
    fontFamily: 'Gilroy-SemiBold',
  },
});
