import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import {
    IconDot,
    IconCall,
    IconLocation
} from '../assets/_IndexAssets';

const UpComingOrderDesc = ({tourImg, tourPlace, ticketCount, date} : any) => {
    return (
        <View style={styles.upComingOdrBox}>
            <Image source={tourImg} style={styles.upComingImg}></Image>
            <View>
                <Text style={[styles.tourHeader, styles.mainFont]}>{tourPlace}</Text>
                <Text style={styles.tourHeader}>#123iop</Text>
                <View style={[styles.label, styles.ticketDesc]}>
                    <Text style={[styles.ticketCountStyle, styles.ticketCntSize]}>{ticketCount} Tiket</Text>
                    <IconDot />
                    <Text style={[styles.ticketDateStyle, styles.ticketCntSize]}>{date}</Text>
                </View>
                <View style={[styles.label, styles.buttons]}>
                    <TouchableOpacity style={[
                        styles.label, 
                        styles.boxButton, 
                        {backgroundColor : '#00C0CA'}
                        ]}>
                        <IconCall style={{marginRight : 8}}/>
                        <Text style={styles.txtStyle}>Hubungi</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[
                        styles.label, 
                        styles.boxButton, 
                        {backgroundColor : '#FF7A00'}
                        ]}>
                        <IconLocation style={{marginRight : 8}} />
                        <Text style={styles.txtStyle}>Route</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const UpComingOrder = ({tourImg, tourPlace, ticketCount, date} : any) => {
    return (
      <View style={styles.upComing}>
        <Text style={styles.upComingHeader}>Akan Datang (1)</Text>
        <UpComingOrderDesc 
            tourImg = {tourImg}
            tourPlace = {tourPlace}
            ticketCount = {ticketCount}
            date = {date}
        />
      </View>
    )
}

export default UpComingOrder;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 

const styles = StyleSheet.create({
    upComing : {
        marginHorizontal : windowWidth / 15,
        marginTop : windowHeight / 40,
    },
    upComingHeader : {
        paddingBottom : 16,
        fontSize : 16,
        fontFamily : 'Gilroy-Bold',
        color : 'black',
    },
    upComingOdrBox : {
        flexDirection : 'row',
        backgroundColor : 'white',
        alignItems : 'center',
        padding : 16,
        borderRadius : 12
    },
    upComingImg : {
        width : 105, 
        height : 105,
        marginRight : 14,
        borderRadius : 8
    },
    label : {
        flexDirection : 'row'
    },
    tourHeader : {
        fontSize : 16
    },
    ticketCntSize : {
        fontSize : 12
    },
    ticketDesc : {
        alignItems : 'center',
        justifyContent : 'space-between',
        width : windowWidth / 2.6,
    },
    ticketCountStyle : {
        color : '#00C0CA',
        fontFamily : 'Gilroy-Bold',
        fontWeight : '400'
    },
    ticketDateStyle : {
        fontFamily : 'Gilroy-Regular',
        color : '#90A8BF',
        fontSize : 12,
    },
    buttons : {
        justifyContent : 'space-between',
        width : windowWidth / 2.3,
    },
    boxButton : {
        paddingHorizontal : 8,
        paddingVertical : 8.5,
        borderRadius : 8
    },
    mainFont : {
        fontFamily : 'Gilroy-Bold',
        fontSize : 16,
        color : 'black'
    },
    txtStyle : {
        fontFamily : 'Gilroy-Bold',
        fontSize : 14,
        color : 'white'
    }
});
