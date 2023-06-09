import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {IconCall, IconLocation} from '../assets/_IndexAssets';
import changeFormatDate from '../functions/changeFormatDate';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {API_URL} from '../env';
import QRCode from 'react-native-qrcode-svg';

const UpComingOrderDesc = ({item}: any) => {
  const [showTiket, setShowTiket] = useState(false);

  const handleTiketPress = () => {
    setShowTiket(true);
  };

  const handleCloseEtiket = () => {
    setShowTiket(false);
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
              <Icon name="qrcode" color="white" />
              <Text> E-Tiket</Text>
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
          <View style={styles.qrCodeContainer}>
            {/* Tampilkan kode QR */}
            <QRCode value={`${API_URL}/order/scan/${item.id}`} size={200} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const UpComingOrder = ({data}: any) => {
  return (
    <View style={styles.upComing}>
      <Text
        style={styles.upComingHeader}>{`Akan Datang (${data.length})`}</Text>
      {/* <UpComingOrderDesc
        tourImg={tourImg}
        tourPlace={tourPlace}
        ticketCount={ticketCount}
        date={date}
      /> */}
      {data.map((item: any) => {
        return (
          <View style={{margin: 10}}>
            <UpComingOrderDesc item={item} />
          </View>
        );
      })}
    </View>
  );
};

export default UpComingOrder;

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
});
