import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  TouchableOpacity, 
  SafeAreaView,
  Dimensions 
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingPage_1, LandingPage_2 } from '../assets/_IndexAssets';

const Stack = createNativeStackNavigator();

const SplashScreen = ({navigation} : any) => {
  const [count, setCount] = useState(0);
  const [landingPage, setLandingPage] = useState(LandingPage_1);
  const [headText1, setHeadText1] = useState('Temukan Keajaiban');
  const [headText2, setHeadText2] = useState('Tersembunyi Indonesia');
  const [subHeadText1, setSubHeadText1] = useState(
    'Jelajahi Destinasi Unik yang tak terlupakan'
    );
  const [subHeadText2, setSubHeadText2] = useState(
    'dengan pilihan yang disediakan'
  );

  const handleButtonClick = () => {
    setCount(count + 1);
    if (count < 1) {
      setLandingPage(LandingPage_2);
      setHeadText1('Bersinergi dengan');
      setHeadText2('Objek Wisata');
      setSubHeadText1('Daftarkan Objek Wisatamu, dan dapatkan banyak');
      setSubHeadText2('keuntungan!');
    } else {
      navigation.navigate('PreLogin')
    }
  }

  const ProgressDotBar = ({ progress, totalDots } : any) => {
    const dots = [];
    for (let i = 0; i < totalDots; i++) {
      const dotStyle = i <= progress ? styles.filledDot : styles.emptyDot;
      dots.push(<View key={i} style={[styles.dot, dotStyle]} />);
    }
    return <View style={styles.containerDot}>{dots}</View>;
  }

  return (
    <SafeAreaView style={{flex : 1}}>
      <ImageBackground source={landingPage} style={{flex : 1}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PreLogin')
            }
          >
            <Text style={styles.shortcutStyle}>Lewati</Text>
          </TouchableOpacity>
          <View style={styles.splashDescStyle}>
            <View style={styles.textContainer}>
              <Text style={styles.mainHeaderTxt}>{headText1}</Text>
              <Text style={styles.mainHeaderTxt}>{headText2}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.subHeaderTxt}>{subHeadText1}</Text>
              <Text style={styles.subHeaderTxt}>{subHeadText2}</Text>
            </View>
            <TouchableOpacity style={styles.nextBtn} onPress={handleButtonClick}>
              <Text style={styles.textBtn}>Selanjutnya</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default SplashScreen;

const windowWidth =  Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  shortcutStyle : {
    color : 'white',
    fontFamily : 'Gilroy-SemiBold',
    fontSize : 16.35,
    textDecorationLine : 'underline',
    marginTop : windowHeight / 15,
    marginLeft : windowWidth / 1.27
  },
  splashDescStyle : {
    marginTop : windowHeight / 1.8,
    justifyContent : 'center',
  },
  containerDot: {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
  },
  dot : {
    width : 10,
    height : 10,
    borderRadius : 5,
    marginHorizontal : 5,
  },
  filledDot : {
    backgroundColor : 'white',
  },
  emptyDot: {
    backgroundColor : '#418486',
  },
  textContainer: {
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : windowHeight / 38,
  },
  mainHeaderTxt : {
    color : 'white',
    fontFamily : 'Gilroy-Bold',
    fontSize : windowWidth / 13
  },
  subHeaderTxt : {
    color : 'white',
    fontFamily : 'Gilroy-Regular',
    fontSize : windowWidth / 27
  },
  nextBtn : {
    alignItems : 'center',
    backgroundColor : '#00C0CA',
    borderRadius : 8,
    paddingVertical : 16,
    justifyContent : 'center',
    marginTop : windowHeight / 27,
    marginHorizontal : 16,
  },
  textBtn : {
    color : 'white',
    fontFamily : 'Gilroy-Bold',
    fontSize : 16
  }
});