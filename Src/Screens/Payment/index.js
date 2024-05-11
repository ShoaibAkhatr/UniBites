import { View, Text, Image, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ReuseHeader from '../../Components/ReuseHeader'
import Button from '../../Components/Button'
import BotttomHeight from '../../Components/BotttomHeight'
import { useNavigation } from '@react-navigation/native'
const Payment = () => {
  const navigation = useNavigation()
  const Data = [
    
    { HeaderName: 'Pay on Delivery', image: require('../../Assets/images/bi_cash.png'), name: 'Credit / Debit card', Iconimage: require('../../Assets/images/Lesserthen.png') },
  ]
  const Next = (item)=>{
    if(item.HeaderName==='Pay on Delivery'){
      navigation.navigate('PayOnDelivery')
    }else{
      
    }
  }
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.Profiletext}>{item.HeaderName}</Text>
      </View>
      <TouchableOpacity style={styles.CartView} onPress={()=>{Next(item)}}>
        <View style={styles.Nameview}>
          <Image source={item.image} style={styles.Orderimage} />
          <Text style={styles.Name}>
            {item.name}
          </Text>
        </View>
        <Image source={item.Iconimage} style={styles.iconimage} />
      </TouchableOpacity>
      {item.HeaderName === 'Wallets' && (
        <View>
          <TouchableOpacity style={styles.CartView}>
            <View style={styles.Nameview}>
              <Image source={item.imageSecond} style={styles.Orderimage} />
              <Text style={styles.Name}>
                {item.namesecond}
              </Text>
            </View>
            <Image source={item.IconimageSecond} style={styles.iconimage} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );



  return (
    <View style={styles.container}>
      <ReuseHeader title={'Payment'} titlestyle={styles.Titlestyle} />
      <View style={{height:25}}/>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={Data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()} // Add a key extractor
    />
    </View>
  )
}

export default Payment