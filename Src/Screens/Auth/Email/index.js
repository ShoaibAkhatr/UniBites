import React,{useState,useEffect} from "react";
import {ImageBackground, Text,View,Image, ScrollView,BackHandler} from 'react-native'
import styles from './style'
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../../data/enums";
import { COLOR } from "../../../data/StyleGuides";
import CheckoutHeader from "../../../Components/CheckoutHeader";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import BotttomHeight from "../../../Components/BotttomHeight";
const Email = ({route})=>{
    const navigation = useNavigation();
const [NextMail, setNextMail] = useState(null)
const [loading, setloading] = useState(false);
    const [mailvale, setmailvale] = useState({
        passFocus: false,
        idFocus: false,
      })
      const handleChangemail = (mail, mailvale) => { setmailvale((prevState) => ({ ...prevState, [mail]: mailvale })) };
    return(
    <View style={styles.container}>
          <CheckoutHeader />
          <ScrollView>
          <Text style={[styles.welcomeText]}>Forgot Password?</Text>
          <Text style={[styles.enter]}>
        Don’t worry! It happens. Please enter the address {"\n"}              associated with your account.
        </Text>
         <Input
         onChange={(text) => setNextMail(text)}
         value={NextMail}
         placeholder={'Email ID/Mobile Number'}
         placeholderColor={mailvale.idFocus ? COLOR.primary : COLOR.grey_1}
         style={[styles.input, mailvale.idFocus && styles.focusedInput]}
         onFocus={() => handleChangemail('idFocus', true)}
         onBlur={() => handleChangemail('idFocus', false)}
         
       />
         <Button loading={loading} title={'Submit'} ButtonContainer={styles.Buttoncontaienr} onPress={()=>navigation.navigate('Otp')}/>
         <BotttomHeight/>
         <View style={styles.LineView} />
         </ScrollView>
    </View>
    )
}

export default Email;