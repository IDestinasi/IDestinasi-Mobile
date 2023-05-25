import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { IconShow } from '../assets/_IndexAssets';

const NameInput = () => {
    return (
        <View>
            <View style={{flexDirection : 'row'}}>
                <Text style={styles.label}>Nama Lengkap</Text>
                <Text style={{color : 'red'}}>*</Text>
            </View>
            <View style={styles.entryContainer}>
                <TextInput
                    style={styles.entry}
                    placeholder='Masukkan Nama Lengkap'
                />
            </View>
        </View>
    )
}

const BirthDateInput = () => {
    return (
        <View>
            <View style={{flexDirection : 'row'}}>
                <Text style={styles.label}>Tanggal Lahir</Text>
                <Text style={{color : 'red'}}>*</Text>
            </View>
            <View style={[styles.entryContainer, styles.flexPos]}>
                <TextInput
                    style={styles.entry}
                    placeholder={'dd/mm/yyy'}
                />
                <TouchableOpacity>
					<IconShow style={styles.showStyle} />
				</TouchableOpacity>
            </View>
        </View>
    )
}

const GenderInput = () => {
    return (
        <View>
            <View style={{flexDirection : 'row'}}>
                <Text style={styles.label}>Jenis Kelamin</Text>
                <Text style={{color : 'red'}}>*</Text>
            </View>
        </View>
    )
}

const CategoryType = () => {
    return (
        <View>
            <View style={{flexDirection : 'row'}}>
                <Text style={styles.label}>Yang Kamu Suka</Text>
                <Text style={{color : 'red'}}>*</Text>
            </View>
        </View>
    )
}

const Address = () => {
    return (
        <View>
            <View style={{flexDirection : 'row'}}>
                <Text style={styles.label}>Alamat</Text>
                <Text style={{color : 'red'}}>*</Text>
            </View>
            <View style={styles.addressContainer}>
                <TextInput 
                    style={styles.entry}
                    placeholder='Masukkan Alamat'
                />
            </View>
        </View>
    )
}
const FormRegist2 = ({navigation} : any) => {
  return (
    <View style={styles.formInput}>
        <NameInput />
        <BirthDateInput />
        <GenderInput />
        <CategoryType />
        <Address />
        <View style={[styles.flexPos, styles.tosContainer]}>
            <View style={styles.flexPos}>
                <Text style={styles.acceptTos}>Saya menyutujui</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.tos}>Syarat & Ketentuan</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity 
            style={styles.loginBtn}
            onPress={() => navigation.navigate('RegistSuccess')}
        >
            <Text style={styles.loginTextBtn}>Daftar Sekarang</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FormRegist2;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    formInput : {
        marginHorizontal : windowWidth / 19,
    },
    label : {
        color : 'black',
        fontFamily : 'Gilroy-Bold',
        fontSize : 14,
        marginBottom : 12
    },
    entryContainer : {
        backgroundColor : '#F8F9FD',
        borderRadius : 10,
        justifyContent : 'space-between',
        marginBottom : 24
    },
    entry : {
        color : '#90A8BF',
        fontFamily : 'Gilroy-Regular',
        fontSize : 14,
        paddingVertical : 18,
        marginLeft : 27,
    },
    flexPos : {
        flexDirection : 'row',
		alignItems : 'center'
    },
    showStyle : {
        marginRight : 18
    },
    tosContainer : {
        marginBottom : 40
    },
    acceptTos: {
        color : 'black',
        fontFamily : 'Gilroy-Regular',
        fontSize : 14,
        marginRight : 5
    },
    tos : {
        color : '#00C0CA',
        fontFamily : 'Gilroy-SemiBold',
        fontSize : 14
    },
    loginBtn : {
        alignItems : 'center',
        backgroundColor : '#00C0CA',
        borderRadius : 10,
        paddingVertical : 16,
        marginBottom  : 24
    },
    loginTextBtn : {
        color : 'white',
        fontFamily : 'Gilroy-Bold',
        fontSize : 16
    },
    addressContainer : {
        backgroundColor : '#F8F9FD',
        borderRadius : 10,
        height : windowHeight / 7
    }
});