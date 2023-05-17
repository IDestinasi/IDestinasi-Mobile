import React, {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Dimensions, 
    ScrollView, 
    TouchableOpacity, 
    ImageBackground
} from 'react-native';
import {
    IconPinLocation,
    IconPinLength,
    IconStar,
    Tour1,
    Tour3,
    Tour4
} from '../assets/_IndexAssets';
const TourCategory = ({category} : any)  => {
    return (
        <TouchableOpacity style={styles.categoryButton}>
            <Text style={{color : '#FF7A00'}}>{category}</Text>
        </TouchableOpacity>
    )
}

const TourList = ({
    tourImg, 
    tourRating, 
    tourEnv, 
    tourPlace, 
    tourProvince,
    tourLength,
    tourPrice,
    tourHigh 
    } : any) => {
    const formattedPrice = tourPrice.toLocaleString('id');
    return (
        <View style={styles.tourContainer}>
            <ImageBackground source={tourImg} style={styles.tourImgStyle}>
                <View style={[styles.flexSub, styles.rating]}>
                    <IconStar style={{marginRight : 5}} />
                    <Text>{tourRating}</Text>
                </View>
            </ImageBackground>
            <View style={[styles.flexSub, styles.envStyle]}>
                <Text style={[styles.envBox, {color : 'purple'}]}>{tourEnv[0]}</Text>
                <Text style={[styles.envBox, {color : 'orange'}]}>{tourEnv[1]}</Text>
            </View>
            <View style={styles.tourBox}>
                <Text style={{fontSize : 16}}>{tourPlace}</Text>
                <View style={styles.flexSub}>
                    <IconPinLocation style={{marginRight : 5}} />
                    <Text>{tourProvince}</Text>
                </View>
                <View style={styles.flexSub}>
                    <IconPinLength style={{marginRight : 5}} />
                    <Text>{tourLength[0]}km | {tourLength[1]} jam</Text>
                </View>
                <View style={styles.flexSub}>
                    <Text>{formattedPrice}</Text>
                    <Text>/tiket</Text>
                </View>
            </View>
        </View>
    )
}

const TourDiscovery = () => {
  return (
    <View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator = {false}
        >
            <View style={styles.categories}>
                <TourCategory category = {'Semua'} />
                <TourCategory category = {'Alam'} />
                <TourCategory category = {'Gunung'} />
                <TourCategory category = {'Pantai'} />
                <TourCategory category = {'Museum'} />
                <TourCategory category = {'Binatang'} />
            </View>
        </ScrollView>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator = {false}
        >
            <View style={styles.categories}>
                <TourList
                    tourImg = {Tour1}
                    tourProvince = {'Nusa Tenggara'}
                    tourPlace = {'Labuan Bajo'}
                    tourEnv = {['Perairan', 'Snorkelling']}
                    tourRating = {4.9}
                    tourLength = {[20, 1]}
                    tourPrice = {20000}
                />
                <TourList
                    tourImg = {Tour3}
                    tourProvince = {'Batu, Jawa Timur'}
                    tourPlace = {'Museum Angkut'}
                    tourEnv = {['Museum', 'Indoor']}
                    tourRating = {4.7}
                    tourLength = {[20, 1]}
                    tourPrice = {100000}
                />
                <TourList
                    tourImg = {Tour4}
                    tourProvince = {'Bogor'}
                    tourPlace = {'Taman Safari'}
                    tourEnv = {['Binatang', '']}
                    tourRating = {4.6}
                    tourLength = {[20, 1]}
                    tourPrice = {150000}
                />
            </View>
        </ScrollView>
    </View>
  )
}

export default TourDiscovery;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    categories : {
        flexDirection : 'row',
        flex : 1,
        paddingHorizontal : windowWidth / 20,
        paddingVertical : windowHeight / 65,
    },
    categoryButton : {
        backgroundColor : 'white',
        borderRadius : 6,
        paddingHorizontal : 5,
        marginHorizontal : windowWidth / 50,
    },
    tourContainer : {
        backgroundColor : 'white',
        borderRadius : 12,
        marginHorizontal : windowWidth / 50,
    },
    tourImgStyle : {
        height : windowHeight / 8,
        width : windowWidth / 2.8,
        margin : 8,
        borderRadius : 12
    },
    flexSub : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    rating : {
        backgroundColor : 'white',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 5,
        marginHorizontal : windowWidth / 8,
        top : windowHeight / 130,
        left : windowWidth / 9,
    },
    envStyle : {
        alignItems : 'center',
        marginLeft : 8,
    },
    envBox : {
        backgroundColor : '#E5F3FF',
        marginHorizontal : 3,
        paddingHorizontal : 2,
        fontSize : 12
    },
    tourBox : {
        marginHorizontal : 8,
        paddingTop : 5
    }
});