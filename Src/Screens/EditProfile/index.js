import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'
const EditProfile = () => {
  const navigation = useNavigation();
  const [Mainswitch, setMainswitch] = useState(false);
  const Data = [
    { image: require('../../Assets/images/shopping.png'), name: 'Order history', Iconimage: require('../../Assets/images/Lesserthen.png') },
    { image: require('../../Assets/images/truck.png'), name: 'Track order', Iconimage: require('../../Assets/images/Lesserthen.png') },
    { image: require('../../Assets/images/credit.png'), name: 'Transactions', Iconimage: require('../../Assets/images/Lesserthen.png') },
    { image: require('../../Assets/images/help.png'), name: 'Help & Support', Iconimage: require('../../Assets/images/Lesserthen.png') },
    { image: require('../../Assets/images/noun.png'), name: 'Feedback', Iconimage: require('../../Assets/images/Lesserthen.png') },
    { image: require('../../Assets/images/truck.png'), name: 'Report on emergency', Iconimage: require('../../Assets/images/Lesserthen.png') },
    { image: require('../../Assets/images/credit.png'), name: 'About', Iconimage: require('../../Assets/images/Lesserthen.png') },
    { image: require('../../Assets/images/help.png'), name: 'Dark Mode', Iconimage: require('../../Assets/images/switchon.png'), Ionimageoff: require('../../Assets/images/switchoff.png') },
    { image: require('../../Assets/images/logout.png'), name: 'Log out', Iconimage: require('../../Assets/images/Lesserthen.png') },
  ]
  const Next = (item)=>{
    if(item.name==='Log out'){
      navigation.navigate('Signin')
    }else{

    }
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.CartView} onPress={()=>{Next(item)}}>
      <View style={styles.Nameview}>
        <Image source={item.image} style={styles.Orderimage} />
        <Text style={styles.Name}>
          {item.name}
        </Text>
      </View>
      <TouchableOpacity style={styles.Touchicon} onPress={() => {
        if (item.name === 'Dark Mode') {
          setMainswitch(!Mainswitch);
        }
      }}>
        <Image
          source={Mainswitch && item.name === 'Dark Mode' ? item.Ionimageoff : item.Iconimage}
          style={styles.iconimage}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.Profiletext}>Profile</Text>
      </View>
      <View style={styles.CardView}>
        <Image source={require('../../Assets/images/Card.png')} style={styles.Cardimage} />
      </View>
      <View style={styles.LineView} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Add a key extractor
      />

    </View>
  )
}

export default EditProfile