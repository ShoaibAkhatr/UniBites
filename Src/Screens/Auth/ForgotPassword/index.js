
import React, { useEffect, useState } from "react";
import { Image, Text, View, ScrollView } from 'react-native';
import styles from './style';
import { useNavigation } from "@react-navigation/native";
import CheckoutHeader from "../../../Components/CheckoutHeader";
import Input from "../../../Components/Input";
import BotttomHeight from "../../../Components/BotttomHeight";
import Button from "../../../Components/Button";
import { COLOR } from "../../../data/StyleGuides";

const ForgotPassword = () => {
  const navigation = useNavigation()
  const [values, setValues] = useState({
    passFocus: false,
    idFocus: false,
  });
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisiblec, setPasswordVisiblec] = useState(false);
  const [password, setpassword] = useState(null);
  const [passwordc, setpasswordc] = useState(null);
  const [loading, setloading] = useState(false);
  const [oldpassword,setoldpassword] = useState('')


  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordc = () => {
    setPasswordVisiblec(!passwordVisiblec);
  };

  const [valup, setValup] = useState({
    passFocus: false,
    idFocus: false,
  });

  const [valuecon, setValuecon] = useState({
    passFocus: false,
    idFocus: false,
  });
  return (
    <View style={styles.container}>
      <CheckoutHeader />
      <ScrollView>
     
      <Text style={[styles.welcomeText,]}>Reset Password</Text>
        <Text style={[styles.enter]}>
        Atleast 9 characters with uppercase and {"\n"}                      lowercase letters.
        </Text>
       
        <Input
          onChange={(text) => setpassword(text)}
          value={password}
          placeholder={'New Password'}
          placeholderColor={values.passFocus ? COLOR.primary : COLOR.grey_1}
          style={[styles.input, values.passFocus && styles.focusedInput]}
          secureText={!passwordVisible}
          onRightPress={togglePassword}
          addRight={passwordVisible ?<Image source={ require('../../../Assets/images/show.png')} style={[styles.passwordIcon]}/> : <Image source={require('../../../Assets/images/Hide.png')} style={styles.passwordIcon} resizeMode='contain' />}
        />
       

      
        <Input
          onChange={(text) => setpasswordc(text)}
          value={passwordc}
          placeholder={'confirm password'}
          placeholderColor={valuecon.passFocus ? COLOR.primary : COLOR.grey_1}
          style={[styles.input, valuecon.passFocus && styles.focusedInput]}
          secureText={!passwordVisiblec}
          onRightPress={togglePasswordc}
          addRight={passwordVisiblec ? <Image source={require('../../../Assets/images/show.png')} style={[styles.passwordIcon]} /> :<Image source={ require('../../../Assets/images/Hide.png')} style={styles.passwordIcon} resizeMode='contain' />}
        />

        <BotttomHeight />
        <Button title={'Verify'} ButtonContainer={styles.Buttoncontaienr} onPress={()=>navigation.navigate('Success')} />
        <View style={styles.LineView} />
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;
