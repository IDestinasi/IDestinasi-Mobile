import React, {useState} from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Dimensions, 
    Image, 
    TouchableOpacity,
    Modal,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconDot, IconRating, IconSuggest } from '../assets/_IndexAssets';

const SuggestPopup = ({setShowSuggestSubmission} : any) => {
    return (
        <View style={styles.modalContainer}>
            <View style={styles.ratingContainer}>
                <View style={{flexDirection : 'row', alignItems : 'center'}}>
                    <IconSuggest style={{marginRight : 20}} />
                    <Text style={styles.popupMainHeader}>Kotak Saran</Text>
                </View>
                <View style={styles.hrLine}></View>
                <Text style={styles.popupSubHeader}>Apa yang bisa kami tingkatkan ?</Text>
                <Text
                    style={{
                        color : '#90A8BF',
                        fontFamily : 'Gilroy-Regular',
                        fontSize : 14,
                        lineHeight: 20,
                        marginBottom : 12
                    }}
                >
                Saranmu sangat membantu untuk meningkatkan kualitas objek wisata
                </Text>
                <TextInput
                    placeholder='Tulis pesanmu disini' 
                    style={styles.popupInputStyle}
                    multiline={true}
                    numberOfLines={5}
                    maxLength={255}
                />
                <TouchableOpacity
                    style={styles.sendBtn}
                    onPress={() => setShowSuggestSubmission(false)}
                >
                    <Text style={styles.helpBtnStyle}>Kirim</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const RatingButton = () => {
    const [rating, setRating] = useState(0);
    const handleRating = (selectedRating : any) => {
        setRating(selectedRating);
      };
    
    return (
        <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((index) => (
            <TouchableOpacity
                key={index}
                onPress={() => handleRating(index)}
                activeOpacity={0.7}
            >
                <Icon
                name={index <= rating ? 'star' : 'star-o'}
                size={30}
                color="#FFD700"
                style={styles.star}
                />
            </TouchableOpacity>
            ))}
        </View>
    )
}

const RatingPopup = ({setShowRatingSubmission} : any) => {
    return (
        <View style={styles.modalContainer}>
            <View style={styles.ratingContainer}>
                <View style={{flexDirection : 'row', alignItems : 'center'}}>
                    <IconRating style={{marginRight : 20}} />
                    <Text style={styles.popupMainHeader}>Rating & Review</Text>
                </View>
                <View style={styles.hrLine}></View>
                <View>
                    <Text style={styles.popupSubHeader}>Berikan Kami Bintang</Text>
                    <RatingButton />
                </View>
                <View>
                    <Text style={styles.popupSubHeader}>Bagaimana Pengalaman Anda?</Text>
                    <TextInput
                        placeholder='Tulis pesanmu disini' 
                        style={styles.popupInputStyle}
                        multiline={true}
                        numberOfLines={5}
                        maxLength={255}
                    />
                </View>
                <TouchableOpacity
                    style={styles.sendBtn}
                    onPress={() => setShowRatingSubmission(false)}
                >
                    <Text style={styles.helpBtnStyle}>Kirim</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const SettledOrderDesc = ({tourImg, tourPlace, ticketCount, date} : any) => {
    const [showRatingSubmission, setShowRatingSubmission] = useState(false);
    const [showSuggestSubmission, setShowSuggestSubmission] = useState(false);
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
                    ]}
                    onPress = {() => setShowRatingSubmission(true)}
                >
                    <Text style={styles.helpBtnStyle}>Berikan Rating</Text>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    visible={showRatingSubmission}
                    animationType="fade">
                    <RatingPopup setShowRatingSubmission={setShowRatingSubmission} />
                </Modal>
                <TouchableOpacity style={[
                    styles.helpBtn,
                    {backgroundColor : '#FF7A00'}
                    ]}
                    onPress = {() => setShowSuggestSubmission(true)}
                >
                    <Text style={styles.helpBtnStyle}>Kotak Saran</Text>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    visible={showSuggestSubmission}
                    animationType="fade">
                    <SuggestPopup setShowSuggestSubmission={setShowSuggestSubmission} />
                </Modal>
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
    },
    modalContainer : {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingContainer : {
        backgroundColor : 'white',
        borderRadius : 16,
        padding: 24
    },
    popupMainHeader : {
        color : 'black',
        fontFamily : 'Gilroy-SemiBold',
        fontSize : 20
    },
    popupSubHeader : {
        color : 'black',
        fontFamily : 'Gilroy-Bold',
        fontSize : 16,
        marginBottom : 12
    },
    popupInputStyle : {
        backgroundColor : '#F8F9FD',
        borderRadius : 10,
        fontFamily : 'Gilroy-Regular',
        fontSize : 14,
        minWidth : windowWidth / 1.4,
        textAlignVertical: 'top',
        padding : 10,
        marginBottom : 20
    },
    hrLine : {
        backgroundColor: '#C3D9E9',
        height: 2,
        marginVertical : 20
    },
    sendBtn : {
        alignItems : 'center',
        backgroundColor : '#00C0CA',
        borderRadius : 10,
        paddingVertical : 16
    },
    starContainer : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    star : {
        marginHorizontal: 5,
    }
});