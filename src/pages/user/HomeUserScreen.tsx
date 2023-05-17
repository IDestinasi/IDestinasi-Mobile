import React from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { IconUpArrow } from '../../assets/_IndexAssets';
import HeaderInformation from '../../components/HeaderInformation';
import TourCatalog from '../../components/TourCatalog';
import TourDiscovery from '../../components/TourDiscovery';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <HeaderInformation />
        </View>
        <View>
          <Text style={[styles.catalogHeader, styles.labelHeader]}>Tempat Wisata Baru</Text>
        </View>
        <TourCatalog />
        <View style={styles.discoveryHeader}>
          <View>
            <Text style={styles.labelHeader}>Jelajahi Tempat Wisata</Text>
            <View style={styles.labelDemand}>
              <IconUpArrow />
              <Text style={styles.labelSubHeader}>Menandakan high-demand di area</Text>
            </View>
          </View>
          <Text style={styles.labelMore}>Lihat Semua</Text>
        </View>
        <TourDiscovery />
      </ScrollView>
    </View>
  )
}

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#F8F9FD'
  },
  catalogHeader : {
    marginHorizontal : windowWidth / 15,
    marginTop : windowHeight / 50,
  },
  discoveryHeader : {
    alignItems : 'center',
    flexDirection : 'row',
    marginHorizontal : windowWidth / 15,
    justifyContent : 'space-between',
    paddingTop : windowWidth / 50
  },
  labelHeader : {
    fontSize : 16
  },
  labelSubHeader : {
    fontSize : 14
  },
  labelDemand : {
    flexDirection : 'row',
    alignItems : 'center'
  },
  labelMore : {
    color : '#00C0CA'
  }
});