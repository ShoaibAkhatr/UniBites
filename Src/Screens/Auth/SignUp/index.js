
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, ToastAndroid, FlatList } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { COLOR } from '../../../data/StyleGuides';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import Signin from '../Signin';
import BotttomHeight from '../../../Components/BotttomHeight';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SignUp() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [NextDoorid, setNextDoorid] = useState(null)
  const [NextMail, setNextMail] = useState(null)
  const [Nextdate, setNextdate] = useState(null)
  const [loading, setloading] = useState(false)



  const [values, setValues] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [valup, setValup] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [valuecon, setValuecon] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [mailvale, setmailvale] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [datevalue, setdatevalue] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [Nextvalue, setNextvalue] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [NextLocate, setNextLocate] = useState({
    passFocus: false,
    idFocus: false,
  })

  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordVisiblec, setPasswordVisiblec] = useState(false)
  const [password, setpassword] = useState(null)
  const [passwordc, setpasswordc] = useState(null)
  const [loc, setloc] = useState(null)
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible)
  }
  const togglePasswordc = () => {
    setPasswordVisiblec(!passwordVisiblec)
  }
  const handleChange = (name, value) => { setValues((prevState) => ({ ...prevState, [name]: value })) };
  const handleChangemail = (mail, mailvale) => { setmailvale((prevState) => ({ ...prevState, [mail]: mailvale })) };
  const handleChangedate = (date, datevalue) => { setdatevalue((prevState) => ({ ...prevState, [date]: datevalue })) };
  const handleChangeLocate = (Locate, NextLocate) => { setNextLocate((prevState) => ({ ...prevState, [Locate]: NextLocate })) };
  const handleChangecon = (conf, valuecon) => { setValuecon((prevState) => ({ ...prevState, [conf]: valuecon })) };

  const saveValue = async () => {
    try {
      await AsyncStorage.setItem('Email', NextMail);
      await AsyncStorage.setItem('password', password);
      console.log('Value saved successfully!');
    } catch (error) {
      console.log('Error saving value: ', error);
    }
  };


  const NextFuction = () => {
    if (NextMail !== null || password !== null || loc !== null || NextDoorid !== null) {
      saveValue();
      navigation.navigate('Signin');
      setModalVisible(false);
    } else {
      setModalVisible(true);
    }
  };

  return (
    <View style={[styles.Container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={[styles.backIcon]} source={require('../../../Assets/images/blackback.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView>

        <View style={styles.container}>
          {/* <Image style={styles.image} source={ChunkyChicken} /> */}
          <Text style={[styles.welcomeText]}>Sign Up</Text>
          <View style={styles.inputContainer}>

            <Input
              onChange={(text) => setNextDoorid(text)}
              placeholder={'Name'}
              placeholderColor={values.idFocus ? COLOR.primary : COLOR.grey_1}
              style={[styles.input, values.idFocus && styles.focusedInput]}
              onFocus={() => handleChange('idFocus', true)}
              onBlur={() => handleChange('idFocus', false)}
              addLeft={<Image source={require('../../../Assets/images/Nameicon.png')} style={[styles.leftIcon, { tintColor: values.idFocus ? COLOR.primary : COLOR.grey_1 }]} />}
            />

            <Input
              onChange={(text) => setNextMail(text)}
              placeholder={'Email'}
              placeholderColor={mailvale.idFocus ? COLOR.primary : COLOR.grey_1}
              style={[styles.input, mailvale.idFocus && styles.focusedInput]}
              onFocus={() => handleChangemail('idFocus', true)}
              onBlur={() => handleChangemail('idFocus', false)}
              addLeft={<Image source={require('../../../Assets/images/Malilcon.png')} style={[styles.leftIcon1, { tintColor: mailvale.idFocus ? COLOR.primary : COLOR.grey_1 }]} />}
            />

            <Input
              onChange={(text) => setloc(text)}
              placeholder={'Mobile Number'}
              keyboardType={'numeric'}
              placeholderColor={NextLocate.idFocus ? COLOR.primary : COLOR.grey_1}
              style={[styles.input, NextLocate.idFocus && styles.focusedInput]}
              onFocus={() => handleChangeLocate('idFocus', true)}
              onBlur={() => handleChangeLocate('idFocus', false)}
              addLeft={<Image source={require('../../../Assets/images/phoneicon.png')} style={[styles.leftIcon, { tintColor: NextLocate.idFocus ? COLOR.primary : COLOR.grey_1 }]} />}
            />
            <Input
              onChange={(text) => setpassword(text)}
              placeholder={'Password'}
              placeholderColor={values.passFocus ? COLOR.primary : COLOR.grey_1}
              style={[styles.input, values.passFocus && styles.focusedInput]}
              onFocus={() => handleChange('passFocus', true)}
              onBlur={() => handleChange('passFocus', false)}
              addLeft={<Image source={require('../../../Assets/images/Lock.png')} style={[styles.passwordIcon, { tintColor: values.passFocus ? COLOR.primary : COLOR.grey_1 }]} resizeMode='contain' />}
              secureText={!passwordVisible}
              onRightPress={togglePassword}
              addRight={passwordVisible ? <Image source={require('../../../Assets/images/show.png')} style={[styles.passwordIcon]} /> : <Image source={require('../../../Assets/images/Hide.png')} style={styles.passwordIcon} resizeMode='contain' />}
            />
          </View>
        </View>

        <Button loading={loading} onPress={NextFuction} marginTop={'10%'} title={'Sign Up'} />
        <Image source={require('../../../Assets/images/Siguptext.png')} style={styles.Signuptext} />
        <Image source={require('../../../Assets/images/Facebood.png')} style={styles.Faceboodimage} />

        <View style={styles.footerContainer}>
          <Text style={[styles.footerText,]}>Already have an account?</Text>
          <TouchableOpacity style={styles.footerLinkContainer} onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <BotttomHeight />
        <View style={styles.LineView} />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.Modalcontainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please Fill all Fileds</Text>
          <Button  onPress={()=>setModalVisible(false)} marginTop={'10%'} title={'ok'} ButtonContainer={styles.Buttonoky}/>
          </View>
        </View>
      </Modal>

    </View>
  )
}

