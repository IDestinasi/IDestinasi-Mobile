import axios from 'axios';
import {API_URL} from '../env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const requestCategory = async (category: string): Promise<any> => {
  try {
    const token = await AsyncStorage.getItem('token');
    let url = '';
    if (category === 'Semua') {
      url = `${API_URL}/destination`;
    } else {
      url = `${API_URL}/destination?category=${category}`;
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default requestCategory;
