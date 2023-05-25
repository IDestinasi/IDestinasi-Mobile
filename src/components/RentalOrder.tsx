import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

const RentalOrderDesc = ({rentalItemImg, rentalItemName, rentalItemMore, timeLeft} : any) => {
    return (
        <View style={styles.container}>
            <Image source={rentalItemImg} style={styles.imageStyle} />
            <View>
                <Text style={styles.itemStyle}>Alat {rentalItemName}</Text>
                <Text style={styles.addiStyle}>{rentalItemMore}</Text>
            </View>
            <View style={styles.timeBox}>
                <Text style={{color : '#FF7A00', fontWeight : 'bold'}}>Sisa {timeLeft}</Text>
            </View>
        </View>
    )
}

const RentalOrder = ({
    rentalItemImg, 
    rentalItemName, 
    rentalItemMore, 
    timeLeft
    } : any) => {
    return (
        <View style={styles.rental}>
            <Text style={styles.rentalHeader}>Penyewaan (1)</Text>
            <RentalOrderDesc 
                rentalItemImg = {rentalItemImg}
                rentalItemName = {rentalItemName}
                rentalItemMore = {rentalItemMore}
                timeLeft = {timeLeft}
            />
        </View>
    )
}

export default RentalOrder;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    rental : {
        marginHorizontal : windowWidth / 15,
        marginVertical : windowHeight / 50
    },
    rentalHeader : {
        color : 'black',
        marginBottom : 16,
        fontFamily : 'Gilroy-Bold',
        fontSize : 16,
    },
    container : {
        alignItems : 'center',
        backgroundColor : 'white',
        borderRadius : 12,
        flexDirection : 'row',
        padding : 16,
        
    },
    imageStyle : {
        width : 52,
        height : 52,
        marginRight : 11
    },
    itemStyle : {
        color : 'black',
        fontFamily : 'Gilroy-Bold',
        fontSize : 16
    },
    addiStyle : {
        color : '#90A8BF',
        fontFamily : 'Gilroy-Regular',
        fontSize : 14,
        marginRight : 55
    },
    timeBox : {
        paddingHorizontal : 8,
        paddingVertical : 4,
        backgroundColor : '#FFF8F2',
    }
});