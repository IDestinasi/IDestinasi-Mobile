import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { 
    ImageMainPacket,
    IconStar,
    IconTimePacket,
    IconTransportActive,
    IconMealsActive,
    IconStayed,
} from '../assets/_IndexAssets';

const TourPacketsBox = ({packetName, packetPrice, tourTime, tourDest, tourRating} : any) => {
    const formattedPrice = packetPrice.toLocaleString('id');
    return (
        <View style = {styles.packetContainer}>
            <View style={styles.label}>
                <View style={styles.label}>
                    <ImageMainPacket style={{marginRight : 5}} />
                    <Text style={styles.mainFont}>{packetName}</Text>
                </View>
                <View style={styles.label}>
                    <IconStar style={{marginRight : 5}}/>
                    <Text style={styles.ratingStyle}>{tourRating}</Text>
                </View>
            </View>
            <View>
                <View style={styles.label}>
                    <IconTimePacket style={{marginRight : 5}} />
                    <Text style={styles.descFont}>{tourTime}</Text>
                </View>
                <View style={styles.label}>
                    <IconTimePacket style={{marginRight : 5}} />
                    <Text style={styles.descFont}>{tourDest}</Text>
                </View>
            </View>
            <View style={[styles.label, styles.bottomLabel]}>
                <View style={[styles.label, styles.bottomIconLabel]}>
                    <IconTransportActive />
                    <IconMealsActive />
                    <IconStayed />
                </View>
                <Text style={styles.priceStyle}>{formattedPrice}</Text>
            </View>
        </View>
    )
}

const TourPackets = () => {
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator = {false}
    >
        <View style={styles.container}>
            <TourPacketsBox
                packetName = {'Paket Bromo Sunrise'} 
                packetPrice = {1500000}
                tourTime = {'4 Hari 3 Malam'}
                tourDest = {'Gunung Bromo, Pasir Berbisik, Kawah Ijen'}
                tourRating = {4.9}
            />
            <TourPacketsBox
                packetName = {'Paket Bromo Moonrise'} 
                packetPrice = {1500000}
                tourTime = {'3 Hari 4 Malam'}
                tourDest = {'Gunung Bromo, Pasir Berbisik, Kawah Ijen'}
                tourRating = {4.9}
            />
        </View>
    </ScrollView>
  )
}

export default TourPackets;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        paddingHorizontal : windowWidth / 20,
        paddingVertical : windowHeight / 70,
    },
    packetContainer : {
        backgroundColor : 'white',
        marginHorizontal : windowWidth / 50,
        padding : 12,
        borderRadius : 12,
        width : windowWidth / 2
    },
    label : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingVertical : 3
    },
    bottomLabel : {
        justifyContent : 'space-between',
    },
    bottomIconLabel : {
        justifyContent : 'space-between',
        width : windowWidth / 8
    },
    mainFont : {
        fontSize : 16, 
        width : 105,
        fontFamily : 'Gilroy-ExtraBold',
        color : 'black',
    },
    ratingStyle : {
        fontFamily : 'Gilroy-Bold',
        color : 'black'
    },
    descFont : {
        fontFamily : 'Gilroy-Regular',
        fontSize : 14,
        color : '#90A8BF'
    },
    priceStyle : {
        fontFamily : 'Gilroy-ExtraBold',
        color : 'black',
        fontSize : 14
    }
});