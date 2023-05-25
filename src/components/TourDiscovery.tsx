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
            <Text style={styles.categoryBtnTxt}>{category}</Text>
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
                    <Text style={styles.ratingStyle}>{tourRating}</Text>
                </View>
            </ImageBackground>
            <View style={[styles.flexSub, styles.envStyle]}>
                <Text style={[styles.envBox, {color : 'purple'}]}>{tourEnv[0]}</Text>
                <Text style={[styles.envBox, {color : 'orange'}]}>{tourEnv[1]}</Text>
            </View>
            <View style={styles.tourBox}>
                <Text style={styles.placeStyle}>{tourPlace}</Text>
                <View style={styles.flexSub}>
                    <IconPinLocation style={{marginRight : 5}} />
                    <Text style={styles.subFont}>{tourProvince}</Text>
                </View>
                <View style={[styles.flexSub, {marginLeft : 1}]}>
                    <IconPinLength style={{marginRight : 7}} />
                    <Text style={styles.subFont}>{tourLength[0]}km | {tourLength[1]} jam</Text>
                </View>
                <View style={[styles.flexSub, {justifyContent : 'flex-end'}]}>
                    <Text style={styles.priceStyle}>{formattedPrice}</Text>
                    <Text style={styles.subFont}>/tiket</Text>
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
                    tourHigh = {true}
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
        paddingHorizontal : windowWidth / 20,
        paddingVertical : windowHeight / 65,
    },
    categoryButton : {
        backgroundColor : 'white',
        borderRadius : 6,
        padding : 8,
        marginHorizontal : windowWidth / 50,
    },
    categoryBtnTxt : {
        color : '#FF7A00',
        fontFamily : 'Gilroy-Bold'
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
        paddingBottom : 8,
        paddingTop : 12
    },
    envBox : {
        backgroundColor : '#E5F3FF',
        marginHorizontal : 3,
        paddingHorizontal : 2,
        fontSize : 12,
        fontFamily : 'Gilroy-Bold'
    },
    tourBox : {
        marginHorizontal : 8,
        paddingTop : 5
    },
    placeStyle : {
        fontSize : 16,
        fontFamily : 'Gilroy-Bold',
        color : 'black',
    },
    subFont : {
        fontFamily : 'Gilroy-Regular',
        fontSize : 12,
        color : '#90A8BF'
    },
    priceStyle : {
        fontFamily : 'Gilroy-ExtraBold',
        color : 'black',
        fontSize : 14
    },
    ratingStyle : {
        fontFamily : 'Gilroy-Bold',
        color : 'black'
    }
});