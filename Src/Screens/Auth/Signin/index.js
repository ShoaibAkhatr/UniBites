
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ToastAndroid, BackHandler, Modal } from 'react-native';
import { styles } from './styles';
import TabNavigation from '../../../TabNavigation/TabNavigation';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import { COLOR } from '../../../data/StyleGuides';
import ReuseHeader from '../../../Components/ReuseHeader';
import BotttomHeight from '../../../Components/BotttomHeight';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
export default function Signin({ navigation, route }) {

  const [NextDoorid, setNextDoorid] = useState(null);
  const [loading, setloading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error,seterror]= useState(false)
  const [Account,setAccount] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [oldmail,setoldmail]=useState('')
  const [oldpassword,setoldpassword]=useState('')

  const [values, setValues] = useState({
    passFocus: false,
    idFocus: false,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setpassword] = useState(null);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (name, value) => {
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };
  const getValue = async () => {
  
    try {
      const emailValue = await AsyncStorage.getItem('Email');
      const passwordValue = await AsyncStorage.getItem('password');

      if (emailValue !== null && passwordValue !== null) {
        console.log('here is Email line no 37:', emailValue);
        console.log('here is Password line no 38:', passwordValue);
        setoldmail(emailValue)
        setoldpassword(passwordValue)
      } else {
        console.log('No data found line 46');
      }
    } catch (error) {
      console.log('Error retrieving values: ', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getValue();
    }, [])
  );

  const NextFunction = () => {
    console.log(':::emep line 58',oldmail,oldpassword);
    if (NextDoorid !== null || password !== null) {
      if (oldmail == '' || oldpassword == '') { 
        setAccount(true)
        setModalVisible(true)
      }
      else if(NextDoorid==oldmail && password==oldpassword){
        navigation.navigate("RoleSelector")
      }else{
        seterror(true)
        setModalVisible(true)
      }
    }
    else {
      setModalVisible(true)
    }

  }


  return (
    <View style={[styles.Container]}>
      <ReuseHeader />
      <ScrollView>
        <View style={styles.container}>
          {/* <Image style={styles.image} source={ChunkyChicken} /> */}
          <Text style={[styles.welcomeText,]}>Sign In</Text>
          <View style={styles.inputContainer}>
            <Input
              value={NextDoorid}
              onChange={(text) => setNextDoorid(text)}
              placeholder={'Luke.Skywalker@domain.com'}
              placeholderColor={values.idFocus ? COLOR.primary : COLOR.grey_1}
              style={[styles.input, values.idFocus && styles.focusedInput]}
              onFocus={() => handleChange('idFocus', true)}
              onBlur={() => handleChange('idFocus', false)}
              addLeft={<Image source={require('../../../Assets/images/redmessage.png')} style={[styles.leftIcon, { tintColor: values.idFocus ? COLOR.primary : COLOR.grey_1 }]} />}
            />
            <Input
              value={password}
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
          <Button title={"Forget Password"} ButtonContainer={styles.Buttoncontainer} ButtonText={styles.btnText} onPress={() => navigation.navigate('Email')} />

        </View>

        <Button loading={loading} onPress={NextFunction} marginTop={'10%'} title={'Sign In'} />
        <Image source={require('../../../Assets/images/Siguptext.png')} style={styles.Signuptext} />
        <Image source={require('../../../Assets/images/Facebood.png')} style={styles.Faceboodimage} />
        <View style={styles.footerContainer}>
          <Text style={[styles.footerText]}>Don’t have an account?</Text>
          <TouchableOpacity style={styles.footerLinkContainer} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.footerLink}>Sign Up</Text>
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
          {error ?
            <View style={styles.modalView}>
            <Text style={styles.modalText}>Your Password or Email is Wrong</Text>
            <Button onPress={() => setModalVisible(false)} marginTop={'10%'} title={'ok'} ButtonContainer={styles.Buttonoky} />
          </View>
            : Account ?
            <View style={styles.modalView}>
            <Text style={styles.modalText}>Please create your Account</Text>
            <Button onPress={() => [setModalVisible(false),navigation.navigate('SignUp')]} marginTop={'10%'} title={'ok'} ButtonContainer={styles.Buttonoky} />
          </View> :
           <View style={styles.modalView}>
           <Text style={styles.modalText}>Please Fill all Fileds</Text>
           <Button onPress={() => setModalVisible(false)} marginTop={'10%'} title={'ok'} ButtonContainer={styles.Buttonoky} />
         </View>
          }
        </View>
      </Modal>
    </View>
  );
}

