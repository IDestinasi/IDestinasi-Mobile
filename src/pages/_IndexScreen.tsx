import { Dimensions } from 'react-native';
import Home from './HomeScreen';
import Order from './OrderScreen';
import Profile from './ProfileScreen';
import Setting from './SettingScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export {
    windowWidth,
    windowHeight,
    Home, 
    Order,
    Profile,
    Setting
}