import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IconDot, IconRating, IconSuggest} from '../assets/_IndexAssets';
import {API_URL} from '../env';
import changeFormatDate from '../functions/changeFormatDate';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SuggestPopup = ({setShowSuggestSubmission}: any) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.ratingContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconSuggest style={{marginRight: 20}} />
          <Text style={styles.popupMainHeader}>Kotak Saran</Text>
        </View>
        <View style={styles.hrLine} />
        <Text style={styles.popupSubHeader}>
          Apa yang bisa kami tingkatkan ?
        </Text>
        <Text
          style={{
            color: '#90A8BF',
            fontFamily: 'Gilroy-Regular',
            fontSize: 14,
            lineHeight: 20,
            marginBottom: 12,
          }}>
          Saranmu sangat membantu untuk meningkatkan kualitas objek wisata
        </Text>
        <TextInput
          placeholder="Tulis pesanmu disini"
          style={styles.popupInputStyle}
          multiline={true}
          numberOfLines={5}
          maxLength={255}
        />
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={() => setShowSuggestSubmission(false)}>
          <Text style={styles.helpBtnStyle}>Kirim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RatingPopup = ({setShowRatingSubmission, id}: any) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const handleRating = (selectedRating: any) => {
    setRating(selectedRating);
  };

  const handleFeedback = async () => {
    const token = await AsyncStorage.getItem('token');
    await axios.post(
      `${API_URL}/feedback/rating/${id}`,
      {
        rating,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setShowRatingSubmission(false);
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.ratingContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconRating style={{marginRight: 10}} />
            <Text style={styles.popupMainHeader}>Rating & Review</Text>
          </View>
          <TouchableOpacity onPress={() => setShowRatingSubmission(false)}>
            <Icon name="close" color="black" size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.hrLine} />
        <View>
          <Text style={styles.popupSubHeader}>Berikan Kami Bintang</Text>
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map(index => (
              <TouchableOpacity
                key={index}
                onPress={() => handleRating(index)}
                activeOpacity={0.7}>
                <Icon
                  name={index <= rating ? 'star' : 'star-o'}
                  size={30}
                  color="#FFD700"
                  style={styles.star}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.popupSubHeader}>Bagaimana Pengalaman Anda?</Text>
          <TextInput
            placeholder="Tulis pesanmu disini"
            style={styles.popupInputStyle}
            multiline={true}
            numberOfLines={5}
            maxLength={255}
            onChangeText={text => setMessage(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={() => handleFeedback()}>
          <Text style={styles.helpBtnStyle}>Kirim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SettledOrderDesc = ({item}: any) => {
  const [showRatingSubmission, setShowRatingSubmission] = useState(false);
  const [showSuggestSubmission, setShowSuggestSubmission] = useState(false);

  const handleRating = () => {
    setShowSuggestSubmission(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${API_URL}/destination/image/${item.destination.id}`,
        }}
        style={styles.imageStyle}
      />
      <View style={styles.descStyle}>
        <Text style={styles.placeStyle}>{item.destination.name}</Text>
        <View style={styles.subDescStyle}>
          <Text style={styles.ticketCnt}>{item.qty} Tiket</Text>
          <IconDot />
          <Text style={styles.ticketDate}>
            {changeFormatDate(item.visitingDate)}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.helpBtn, {backgroundColor: '#00C0CA'}]}
          onPress={() => setShowRatingSubmission(true)}>
          <Text style={styles.helpBtnStyle}>Berikan Rating</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={showRatingSubmission}
          animationType="fade">
          <RatingPopup
            setShowRatingSubmission={setShowRatingSubmission}
            id={item.id}
          />
        </Modal>
        <TouchableOpacity
          style={[styles.helpBtn, {backgroundColor: '#FF7A00'}]}
          onPress={() => handleRating()}>
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
  );
};

const SettledOrder = ({data}: any) => {
  return (
    <View style={styles.settled}>
      <Text style={styles.settledHeader}>{`Sudah Selesai (${data.length})`}</Text>
      {data.map((item: any) => {
        return (
          <View style={{margin: 10}}>
            <SettledOrderDesc item={item} />
          </View>
        );
      })}
    </View>
  );
};

export default SettledOrder;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  settled: {
    marginHorizontal: windowWidth / 15,
    marginTop: windowHeight / 40,
  },
  settledHeader: {
    color: 'black',
    marginBottom: 16,
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 15,
  },
  imageStyle: {
    borderRadius: 8,
    marginRight: 14,
    width: 105,
    height: 130,
  },
  descStyle: {
    height: 130,
    justifyContent: 'space-evenly',
  },
  placeStyle: {
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
  },
  subDescStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth / 2.5,
    justifyContent: 'space-between',
  },
  ticketCnt: {
    color: '#00C0CA',
    fontFamily: 'Gilroy-Bold',
    fontWeight: '400',
    fontSize: 12,
  },
  ticketDate: {
    color: '#90A8BF',
    fontFamily: 'Gilroy-Regular',
    fontSize: 12,
  },
  helpBtn: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  helpBtnStyle: {
    color: 'white',
    fontFamily: 'Gilroy-Bold',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
  },
  popupMainHeader: {
    color: 'black',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 20,
  },
  popupSubHeader: {
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    marginBottom: 12,
  },
  popupInputStyle: {
    backgroundColor: '#F8F9FD',
    borderRadius: 10,
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
    minWidth: windowWidth / 1.4,
    textAlignVertical: 'top',
    padding: 10,
    marginBottom: 20,
  },
  hrLine: {
    backgroundColor: '#C3D9E9',
    height: 2,
    marginVertical: 20,
  },
  sendBtn: {
    alignItems: 'center',
    backgroundColor: '#00C0CA',
    borderRadius: 10,
    paddingVertical: 16,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    marginHorizontal: 5,
  },
});
