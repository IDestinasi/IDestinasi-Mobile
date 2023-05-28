import React, {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Modal} from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import {API_URL} from '../../env';

const ModalQR = ({
  id,
  handleCloseTiket,
  showTiket,
}: {
  id: string;
  handleCloseTiket: () => void;
  showTiket: boolean;
}) => {
  return (
    <>
      <Modal visible={showTiket} animationType="fade" transparent={true}>
        <TouchableWithoutFeedback onPress={handleCloseTiket}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <View style={styles.qrCodeContainer}>
            {/* Tampilkan kode QR */}
            <QRCode value={`${API_URL}/scan/${id}`} size={200} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalQR;

const styles = StyleSheet.create({
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
