
import { View, Text, FlatList, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import CheckoutHeader from '../../../components/reuseables/CheckoutHeader';
import Button from '../../../components/reuseables/Button';
import { SCREEN } from '../../../data/enums';
import { useSelector } from 'react-redux';
import { COLOR } from '../../../data/StyleGuides';



const PasswordRecovered = () => {
  const navigation = useNavigation();
  const [cont,setcont] = useState(false);
 
  return (
    <View style={[styles.container]}>
   

      <View style={styles.Profile_View}>
      <View style={styles.Circular_View}>
          <Image source={require('../../../Assets/images/Successte.png')} style={styles.User_Image} />
        </View>
      
      </View>
      <View style={styles.bottomView}>
      
           <Text style={[styles.ProfileText]}>
           Password Recovered
           </Text>
           <Text style={[styles.Upload]}>The password has been successfully recovered, you{"\n"}                 can log in back with a new password</Text>
      <TouchableOpacity    activeOpacity={0.5}
     >
    
    </TouchableOpacity>
    </View>
    <View style={styles.btnsView}>

  
    <Button title={"Back to Login"} ButtonContainer={styles.Buttoncontainer} ButtonText={styles.btnText} onPress={()=>navigation.navigate(SCREEN.Signin)} />
    </View>
     </View>
 
  )
}

export default PasswordRecovered;




