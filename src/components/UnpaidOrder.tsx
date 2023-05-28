import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Clipboard,
  ToastAndroid,
} from 'react-native';
import {IconCall, IconLocation} from '../assets/_IndexAssets';
import changeFormatDate from '../functions/changeFormatDate';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {API_URL} from '../env';

const UnpaidOrderDesc = ({item}: any) => {
  const [showTiket, setShowTiket] = useState(false);

  const handleTiketPress = () => {
    setShowTiket(true);
  };

  const handleCloseEtiket = () => {
    setShowTiket(false);
  };

  const textRef = useRef(null);

  const handleCopy = () => {
    Clipboard.setString(item.va_number);
    ToastAndroid.show(
      `VA Number ${item.va_number} berhasil disalin`,
      ToastAndroid.SHORT,
    );
  };

  return (
    <View style={styles.upComingOdrBox}>
      <Image
        source={{
          uri: `${API_URL}/destination/image/${item.destination.id}`,
        }}
        style={styles.upComingImg}
      />
      <View>
        <Text style={[styles.tourHeader, styles.mainFont]}>
          {item.destination.name}
        </Text>
        <Text style={styles.tourHeader}>#{item.token}</Text>
        <View style={[styles.label, styles.ticketDesc]}>
          <Text style={[styles.ticketCountStyle, styles.ticketCntSize]}>
            {item.qty} Tiket
          </Text>
          <Text style={[styles.ticketDateStyle, styles.ticketCntSize]}>
            {changeFormatDate(item.visitingDate)}
          </Text>
        </View>
        <View style={[styles.label, styles.buttons]}>
          <TouchableOpacity
            style={[
              styles.label,
              styles.boxButton,
              {backgroundColor: '#00C0CA'},
            ]}
            onPress={() => handleTiketPress()}>
            <Text style={styles.txtStyle}>
              {' '}
              <Icon name="money-bill" color="white" />
              <Text> Bayar</Text>
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={[
              styles.label,
              styles.boxButton,
              {backgroundColor: '#FF7A00'},
            ]}>
            <IconLocation style={{marginRight: 8}} />
            <Text style={styles.txtStyle}>Route</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <Modal visible={showTiket} animationType="fade" transparent={true}>
        <TouchableWithoutFeedback onPress={handleCloseEtiket}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <Text>Bayar dan nikmati liburan mu</Text>
          <Text>Bank: {item.payment} </Text>
          <TouchableOpacity onPress={handleCopy} style={styles.vaNumber}>
            <Icon
              name="copy"
              size={20}
              color="black"
              style={{marginRight: 7}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 20,
              }}
              ref={textRef}>
              {item.va_number}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const UnpaidOrder = ({data}: any) => {
  return (
    <View style={styles.upComing}>
      <Text style={styles.upComingHeader}>
        {`Belum Dibayar (${data.length})`}
      </Text>
      {/* <UpComingOrderDesc
        tourImg={tourImg}
        tourPlace={tourPlace}
        ticketCount={ticketCount}
        date={date}
      /> */}
      {data.map((item: any) => {
        return (
          <View style={{margin: 10}}>
            <UnpaidOrderDesc item={item} />
          </View>
        );
      })}
    </View>
  );
};

export default UnpaidOrder;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  upComing: {
    marginHorizontal: windowWidth / 15,
    marginTop: windowHeight / 40,
  },
  upComingHeader: {
    paddingBottom: 16,
    fontSize: 16,
    fontFamily: 'Gilroy-Bold',
    color: 'black',
  },
  upComingOdrBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  upComingImg: {
    width: 105,
    height: 105,
    marginRight: 14,
    borderRadius: 8,
  },
  label: {
    flexDirection: 'row',
  },
  tourHeader: {
    fontSize: 16,
  },
  ticketCntSize: {
    fontSize: 12,
  },
  ticketDesc: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: windowWidth / 2.6,
  },
  ticketCountStyle: {
    color: '#00C0CA',
    fontFamily: 'Gilroy-Bold',
    fontWeight: '400',
  },
  ticketDateStyle: {
    fontFamily: 'Gilroy-Regular',
    color: '#90A8BF',
    fontSize: 12,
  },
  buttons: {
    width: 500,
  },
  boxButton: {
    paddingHorizontal: 8,
    paddingVertical: 8.5,
    borderRadius: 8,
  },
  mainFont: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    color: 'black',
  },
  txtStyle: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 14,
    color: 'white',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  qrCodeContainer: {
    marginTop: 20,
  },
  vaNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 5,
    borderRadius: 10,
    marginBottom: 30,
  },
});
