import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { styles } from './styles';
import { COLOR } from '../../data/StyleGuides';
import TabNavigation from '../../TabNavigation/TabNavigation';
import Button from '../../Components/Button';

const { width } = Dimensions.get('window');

const data = [
  {
    id: 1,
    image: require('../../Assets/images/Moddy.png'),
    text1: '     Want a food of your mood? \n  Get your tummies filled with the \n                    edible good',
    text2: '     Eat it in your \nown cozy comfort',
  },
];

export default function GetMoody({ navigation }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text2}>{item.text2}</Text>
        <Text style={styles.text1}>{item.text1}</Text>
      </View>
    </View>
  );


  return (
    <View style={styles.container}>

      <>
        {data.map((item, index) => (
          renderItem({ item, index })
        ))}
      </>
      <Button title={'Unibites'} onPress={() => navigation.navigate('Signin')} />
      <View style={styles.LineView} />
    </View>
  );
}
