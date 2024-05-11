

import React, { useState, useRef, useEffect } from "react";
import { Text, View, TextInput, ScrollView, ToastAndroid } from 'react-native';
import styles from './style';
import { useNavigation } from "@react-navigation/native";
import CheckoutHeader from "../../../Components/CheckoutHeader";
import Button from "../../../Components/Button";
import BotttomHeight from "../../../Components/BotttomHeight";
import { COLOR } from "../../../data/StyleGuides";


const Otp = ({ route }) => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRef = useRef(Array(4).fill(null));
  const [showError, setShowError] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (value, index) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      if (value && index < inputRef.current.length - 1) {
        inputRef.current[index + 1].focus();
      }

      if (newOtp.every((pin) => pin !== '')) {
        setShowError(false);
      } else {
        setShowError(true);
      }

      return newOtp;
    });
  };

  const handleOtpKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleInputFocus = (index) => {
    setFocusedIndex(index);
  };


  useEffect(() => {
    // You can initiate the OTP request here if needed
  }, []);

  return (
    <View style={styles.container}>
      <CheckoutHeader />
      <ScrollView>
      <Text style={[styles.welcomeText,]}>OTP Sent</Text>
        <Text style={[styles.enter]}>
        A 4 digit code has been sent to +91 9876543210
        </Text>

        <View style={styles.inputContainer}>
          {otp.map((pin, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRef.current[index] = ref)}
              style={[
                styles.Otp,
                {
                  borderColor: focusedIndex === index ? COLOR.primary : COLOR.primary,
                  backgroundColor:'#FAFAFA' ,
                  color: COLOR.black
                },
              ]}
              value={pin}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(event) => handleOtpKeyPress(event, index)}
              maxLength={1}
              keyboardType="numeric"
              autoFocus={index === 0}
              onFocus={() => handleInputFocus(index)}
            />
          ))}
        </View>

        <View style={styles.bottomView}>
          <Button loading={loading} title={'Verify'} ButtonContainer={styles.Buttoncontaienr} onPress={()=>navigation.navigate('ForgotPassword')} />
        </View>
        <BotttomHeight />
        <View style={styles.LineView} />
      </ScrollView>
    </View>
  );
};

export default Otp;
