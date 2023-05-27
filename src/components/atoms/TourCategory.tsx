/* eslint-disable react/react-in-jsx-scope */
import {Dimensions, StyleSheet, TouchableOpacity, Text} from 'react-native';

const TourCategory = ({category, onPress, isActive}: any) => {
  const buttonStyle = isActive
    ? styles.categoryButtonChoice
    : styles.categoryButton;
  const buttonTextStyle = isActive
    ? styles.categoryBtnTxtChoice
    : styles.categoryBtnTxt;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={buttonTextStyle}>{category}</Text>
    </TouchableOpacity>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    paddingHorizontal: windowWidth / 20,
    paddingVertical: windowHeight / 65,
  },
  categoryButton: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
    marginHorizontal: windowWidth / 50,
  },
  categoryBtnTxt: {
    color: '#FF7A00',
    fontFamily: 'Gilroy-Bold',
  },
  categoryBtnTxtChoice: {
    color: 'white',
    fontFamily: 'Gilroy-Bold',
  },
  categoryButtonChoice: {
    backgroundColor: '#FF7A00',
    borderRadius: 6,
    padding: 8,
    marginHorizontal: windowWidth / 50,
  },
});

export default TourCategory;
