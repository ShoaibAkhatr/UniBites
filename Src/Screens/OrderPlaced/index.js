
import { View, Text, FlatList, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import ReuseHeader from '../../Components/ReuseHeader';

const OrderPlaced = () => {
  const navigation = useNavigation();
  const [cont,setcont] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('TabNavigation');
    }, 2000);
  }, []);
  return (
    <View style={[styles.container]}>
   <ReuseHeader />

      <View style={styles.Profile_View}>
      <View style={styles.Circular_View}>
          <Image source={require('../../Assets/images/Placeorder.png')} style={styles.User_Image} />
        </View>
      
      </View>
      <View style={styles.bottomView}>
      
           <Text style={[styles.ProfileText]}>
           Success
           </Text>
           <Text style={[styles.Upload]}>Your order has been placed!</Text>
           <Text style={[styles.Upload1]}>You will receive an email shortly.</Text>
      <TouchableOpacity    activeOpacity={0.5}
     >
    </TouchableOpacity>
    </View>
    <View style={styles.btnsView}>


    </View>
    <View style={styles.LineView} />
     </View>
 
  )
}

export default OrderPlaced;




