import { View, Text, Image, FlatList, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ReuseHeader from '../../Components/ReuseHeader'
import Button from '../../Components/Button'
import SearchBar from '../../Components/SearchBar'
import { COLOR } from '../../data/StyleGuides'
import Input from '../../Components/Input'
import { useNavigation } from '@react-navigation/native'
const Address = () => {
  const navigation = useNavigation()
 

  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.Profiletext}>{item.HeaderName}</Text>
      </View>
      <ScrollView>
      <TouchableOpacity style={styles.CartView} onPress={()=>navigation.navigate('Payment')}>
        <View style={styles.Nameview}>
          <Image source={item.image} style={styles.Orderimage} />
          <View>
          <Text style={styles.Hometext}>{item.Homedetails}</Text>
            <Text style={styles.Name}>
              {item.name}
            </Text>
          </View>
        </View>
        <Image source={item.Iconimage} style={styles.iconimage} />
      </TouchableOpacity>
      {item.HeaderName === 'Recent addresses' && (
        <View>
          <View style={styles.headerView}>
          </View>
          <TouchableOpacity style={styles.CartView}>
            <View style={styles.Nameview}>
              <Image source={item.imageSecond} style={styles.Orderimage} />
              <View>
                <Text style={styles.Hometext}>{item.Homedetails2}</Text>
                <Text style={styles.Name}>
                  {item.namesecond}
                </Text>
              </View>
            </View>
            <Image source={item.IconimageSecond} style={styles.iconimage} />
          </TouchableOpacity>
        </View>
      )}
      </ScrollView>
    </View>
  );



  return (
    <View style={styles.container}>
      <ReuseHeader title={'Address'} titlestyle={styles.Titlestyle} />
      <Input style={styles.input}
        placeholder={'Search for area, street name'}
        addLeft={<Image source={require('../../Assets/images/search.png')} style={[styles.searchicon]} resizeMode='contain' />}
      />
      <TouchableOpacity style={styles.CartViewFirst}>
        <View style={styles.Nameview}>
          <Image source={require('../../Assets/images/credit.png')} style={[styles.Orderimage, { tintColor: COLOR.red }]} />
          <TextInput placeholder='Use current location' placeholderTextColor={'red'} />
        </View>
        <Image source={require('../../Assets/images/Lesserthen.png')} style={[styles.iconimage, { tintColor: COLOR.red }]} />
      </TouchableOpacity>
          <Input placeholder={'Enter your Department Name'}/>
          <Input placeholder={'Enter your Room Number'}/>

          <Button title={'Save'} ButtonContainer={styles.Buttoncontainre} onPress={()=>navigation.navigate('Payment')}/>
    </View>
  )
}

export default Address