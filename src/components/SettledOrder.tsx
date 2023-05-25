import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { IconDot } from '../assets/_IndexAssets';

const SettledOrderDesc = ({tourImg, tourPlace, ticketCount, date} : any) => {
    return (
        <View style={styles.container}>
            <Image source={tourImg} style={styles.imageStyle} />
            <View style={styles.descStyle}>
                <Text style={styles.placeStyle}>{tourPlace}</Text>
                <View style={styles.subDescStyle}>
                    <Text style={styles.ticketCnt}>{ticketCount} Tiket</Text>
                    <IconDot />
                    <Text style={styles.ticketDate}>{date}</Text>
                </View>
                <TouchableOpacity style={[
                    styles.helpBtn,
                    {backgroundColor : '#00C0CA'}
                ]}>
                    <Text style={styles.helpBtnStyle}>Berikan Rating</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                    styles.helpBtn,
                    {backgroundColor : '#FF7A00'}
                ]}>
                    <Text style={styles.helpBtnStyle}>Kotak Saran</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const SettledOrder = ({tourImg, tourPlace, ticketCount, date} : any) => {
    return (
        <View style={styles.settled}>
            <Text style={styles.settledHeader}>Sudah Selesai (1)</Text>
            <SettledOrderDesc 
                tourImg = {tourImg}
                tourPlace = {tourPlace}
                ticketCount = {ticketCount}
                date = {date}
            />
        </View>
    )
}

export default SettledOrder;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 

const styles = StyleSheet.create({
    settled : {
        marginHorizontal : windowWidth / 15,
        marginTop : windowHeight / 40,
    },
    settledHeader : {
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
        borderRadius : 8,
        marginRight : 14,
        width : 105,
        height : 130, 
    },
    descStyle : {
        height : 130,
        justifyContent : 'space-evenly'
    },
    placeStyle : {
        color : 'black',
        fontFamily : 'Gilroy-Bold',
        fontSize : 16
    },
    subDescStyle : {
        flexDirection : 'row',
        alignItems : 'center',
        width : windowWidth / 2.5,
        justifyContent : 'space-between',
    },
    ticketCnt : {
        color : '#00C0CA',
        fontFamily : 'Gilroy-Bold',
        fontWeight : '400',
        fontSize : 12
    },
    ticketDate : {
        color : '#90A8BF',
        fontFamily : 'Gilroy-Regular',
        fontSize : 12,
    },
    helpBtn : {
        alignItems : 'center',
        backgroundColor : 'red',
        borderRadius : 8,
        justifyContent : 'center',
        paddingVertical : 10,
        paddingHorizontal : windowWidth / 7
    },
    helpBtnStyle : {
        color : 'white',
        fontFamily : 'Gilroy-Bold',
        fontSize : 14,
    }
});