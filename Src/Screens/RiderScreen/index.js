import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import ReuseHeader from '../../Components/ReuseHeader'
import SearchBar from '../../Components/SearchBar'
import { COLOR } from '../../data/StyleGuides'
import { useSelector } from 'react-redux'
const RiderScreen = () => {
  const savedData = useSelector((state) => state.custom);
  console.log('here is data of items line no 10 :::', savedData);
  const NewFunction = ({ item }) => (
    <View style={styles.ChildView}>
      <Image source={item.image} style={styles.LoadedPizza} />
      <View style={styles.InerView}>
        <Text style={styles.Name}>{item.name}</Text>
        <Text style={styles.Price}>PKR Rs {item.price}</Text>
      </View>
      <View style={styles.ButtonsView}>
        <TouchableOpacity style={styles.ButtonReject}>
          <Text style={styles.Button}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonReject}>
          <Text style={styles.Button}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <ReuseHeader title={'Rider'} />
      <SearchBar backgroundColor={COLOR.primary} placeholder={'Get a restaurant...'} tintColor={COLOR.gray_240} />

      <FlatList
        data={savedData}
        renderItem={({ item }) => <NewFunction item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>
  )
}

export default RiderScreen