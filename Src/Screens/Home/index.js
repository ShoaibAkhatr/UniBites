import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Input from '../../Components/Input'
import SearchBar from '../../Components/SearchBar'
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../../redux/Slices/CustomSlice'
import { useNavigation } from '@react-navigation/native'
import Cart from '../Cart'
const Home = () => {
  const [heart, setheart] = useState(false)
const navigation = useNavigation()
  const dispatch = useDispatch()
  const data = [
    {
      image: require('../../Assets/images/samosa.png'),
    },
    {
      image: require('../../Assets/images/piza.png'),
    },
    {
      image: require('../../Assets/images/samosa.png'),
    },
    {
      image: require('../../Assets/images/piza.png'),
    },
    {
      image: require('../../Assets/images/samosa.png'),
    },
    {
      image: require('../../Assets/images/piza.png'),
    },
    {
      image: require('../../Assets/images/samosa.png'),
    },
    {
      image: require('../../Assets/images/piza.png'),
    },
  ]
  const Datarestorent = [
    {
      id: 1,
      image: require('../../Assets/images/LoadedPizza.png'),
      name: "Pizza",
      price: 500,
    },
    {
      id: 2,
      image: require('../../Assets/images/ChickenBiryani.jpg'),
      name: "Chicken Biryani",
      price: 300,
    },
    {
      id: 3,
      image: require('../../Assets/images/Parathas.jpg'),
      name: "Parathas",
      price: 150,
    },
    {
      id: 4,
      image: require('../../Assets/images/ChickenSamosa.jpg'),
      name: "Chicken Samosa",
      price: 100,
    },
    {
      id: 5,
      image: require('../../Assets/images/ChickenShawarma.jpg'),
      name: "Chicken Shawarma",
      price: 150,
    },
    {
      id: 6,
      image: require('../../Assets/images/ZingerBurger.jpg'),
      name: "Zinger Burger",
      price:200,
    },
    {
      id: 7,
      image: require('../../Assets/images/CrispyFrenchFries.jpg'),
      name: "Crispy French Fries",
      price: 100,
    },
  ];
  
  const handleAdd = (item) => {
    const { image, price,name,id } = item; 
    console.log('here is item line no 80:::',item);
    dispatch(addItem({ image, price,name,id })); 
    navigation.navigate('Cart');
  };
  const renderItem = ({ item }) => (
    <View style={styles.samosaContainer}>
      <Image source={item.image} style={styles.samosaImage} />
    </View>
  );
  const renderItemResturent = ({ item }) => (
    <TouchableOpacity style={styles.ResturentContainer} onPress={()=>handleAdd(item)}>
      <View style={styles.ImagesView}>
      <Image source={item.image} style={styles.DishiesImage}/>
      </View>
      <View style={styles.PiceView}>
      <Text style={styles.resturentname}>
        {item.name}
      </Text>
      <Text style={styles.pricstyle}>
        Rs {item.price}
      </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.HeaderView}>
        <TouchableOpacity>
          <Image source={require('../../Assets/images/bell.png')} style={styles.bellicon} />
        </TouchableOpacity>
        <View>
          <View style={styles.Mapimageview}>
            <Image source={require('../../Assets/images/map-pin.png')} style={styles.Mapicon} />
            <Text style={styles.Hometext}>
              Home
            </Text>
            <Image source={require('../../Assets/images/chevron-down.png')} style={styles.Mapicon} />
          </View>
          <Text style={styles.streattext}>
            9, suramya duplex, nr. nigam bus stand.....
          </Text>
        </View>
        <TouchableOpacity onPress={() => setheart(!heart)}>
          {heart ? <Image source={require('../../Assets/images/priheart.png')} style={styles.bellicon} />
            :
            <Image source={require('../../Assets/images/heart.png')} style={styles.bellicon} />}
        </TouchableOpacity>
      </View>
      <ScrollView>
      <SearchBar placeholder={'Name ur mood...'} />
      <View style={styles.Getimageview}>
        <Image source={require('../../Assets/images/getorder.png')} style={styles.GEtImage} />
      </View>
      <View style={styles.TextbtnView}>
        <Text style={styles.Whts}>
          What’s your mood today?
        </Text>
        <TouchableOpacity>
          <Text style={styles.Viewall}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollViewContent}>
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.TextbtnView}>
        <Text style={styles.Whts}>
        Popular moods you can get
        </Text>
        <TouchableOpacity>
          <Text style={styles.Viewall}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollViewContent}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Datarestorent}
          renderItem={renderItemResturent}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      </ScrollView>
    </View>
  )
}

export default Home