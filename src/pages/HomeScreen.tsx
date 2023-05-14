import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { HeaderInformation } from '../components/_IndexComponents';
import { windowHeight, windowWidth } from './_IndexScreen';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <HeaderInformation />
        </View>
        <View>
          <Text style={styles.catalogHeader}>Tempat Wisata Baru</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#F8F9FD'
  },
  catalogHeader : {
    marginHorizontal : windowWidth / 15,
    marginTop : windowHeight / 23
  }
});