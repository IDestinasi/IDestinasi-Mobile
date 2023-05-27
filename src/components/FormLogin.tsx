import React, {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { CheckBox } from '@rneui/base';
import { IconShow } from '../assets/_IndexAssets';

const RemindLogin = () => {
    const [checked, setChecked] = useState(false);

    const toggleCheckBox = () => setChecked(!checked);

    return (
        <CheckBox
            checked={checked}
            onPress={toggleCheckBox}
            iconType={'material-community'}
            checkedIcon={'checkbox-marked'}
            uncheckedIcon={'checkbox-blank-outline'}
            checkedColor={'#FF7A00'} 
        />
    )
}

const FormLogin = ({navigation} : any) => {
    return (
        <View style={styles.formInput}>
            <View>
                <Text style={styles.label}>Email</Text>
                <View style={styles.entryContainer}>
                    <TextInput
                        style={styles.entry}
                        placeholder='Masukkan Email'
                    />
                </View>
                <Text style={styles.label}>Password</Text>
                <View style={[styles.entryContainer, styles.flexPos]}>
                    <TextInput
                        style={styles.entry}
                        placeholder='Masukkan Password'  
                    />
                    <TouchableOpacity>
                        <IconShow style={styles.showStyle} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.flexPos, styles.remindContainer]}>
                <View style={styles.flexPos}>
                    <RemindLogin />
                    <Text style={styles.remind}>Ingat Saya</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgetBtn}>Lupa Password</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={() => navigation.navigate('TabScreen')}
            >
				<Text style={styles.loginTextBtn}>Masuk</Text>
			</TouchableOpacity>
        </View>
    )
  }

export default FormLogin;

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
    remindContainer : {
        justifyContent : 'space-between',
        marginBottom : 40
    },
    remind : {
        color : 'black',
        fontFamily : 'Gilroy-Regular',
        fontSize : 14
    },
    forgetBtn : {
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
});