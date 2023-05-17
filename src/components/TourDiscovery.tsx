import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

const TourCategory = ({category} : any)  => {
    return (
        <View style={styles.categoryContainer}>
            <Text style={{color : '#FF7A00'}}>{category}</Text>
        </View>
    )
}

const TourDiscovery = () => {
  return (
    <View style={styles.container}>
        <ScrollView
        horizontal
        style={styles.categories}
        contentContainerStyle={{justifyContent : 'space-around'}}
        showsHorizontalScrollIndicator = {false}
        >
            <TourCategory category = {'Semua'} />
            <TourCategory category = {'Alam'} />
            <TourCategory category = {'Gunung'} />
            <TourCategory category = {'Pantai'} />
            <TourCategory category = {'Museum'} />
            <TourCategory category = {'Binatang'} />
        </ScrollView>
    </View>
  )
}

export default TourDiscovery;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container : {
        paddingTop : windowHeight / 60
    },
    categories : {
        flexDirection : 'row',
        left : windowWidth / 15,
        flex : 1,
        
    },
    categoryContainer : {
        backgroundColor : 'white'
    }
});