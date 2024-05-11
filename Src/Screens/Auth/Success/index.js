
import { View, Text, FlatList, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import Button from '../../../Components/Button';
import ReuseHeader from '../../../Components/ReuseHeader';




const Success = () => {
  const navigation = useNavigation();
  const [cont,setcont] = useState(false);
 
  return (
    <View style={[styles.container]}>
   <ReuseHeader />

      <View style={styles.Profile_View}>
      <View style={styles.Circular_View}>
          <Image source={require('../../../Assets/images/success.png')} style={styles.User_Image} />
        </View>
      
      </View>
      <View style={styles.bottomView}>
      
           <Text style={[styles.ProfileText]}>
           Success
           </Text>
           <Text style={[styles.Upload]}>Your password has been reset successfully.</Text>
           <Text style={[styles.Upload]}>Don’t forget the password again</Text>
      <TouchableOpacity    activeOpacity={0.5}
     >
    
    </TouchableOpacity>
    </View>
    <View style={styles.btnsView}>

  
    <Button title={"Go Moody Again"} ButtonContainer={styles.Buttoncontainer}  onPress={()=>navigation.navigate('GetMoody')} />
    </View>
    <View style={styles.LineView} />
     </View>
 
  )
}

export default Success;




