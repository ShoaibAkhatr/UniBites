import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { styles } from './styles';
import { COLOR } from '../../data/StyleGuides';
import TabNavigation from '../../TabNavigation/TabNavigation';

const { width } = Dimensions.get('window');

const data = [
  {
    id: 1,
    image: require('../../Assets/images/bro1.png'),
    text1: ' Order from the best local restaurants \n   with ease and on-demand delivery',
    text2: 'All your favourite UniCafe',
  },
  {
    id: 2,
    image: require('../../Assets/images/bro2.png'),
    text1: 'Experience peace of mind while \n tracking your order in real time',
    text2: 'Unmatched reliability',
  },
  {
    id: 3,
    image: require('../../Assets/images/bro.png'),
    text1: 'Something came up? Talk to a real \n      person. We are here to help',
    text2: '24/7 support \n      for you',
  },
  // Add more data as needed
];

export default function OnBoarding({ navigation }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <TouchableOpacity onPress={() => handleSkipPress()} style={styles.Button}>
        <Text style={styles.signUpText}>Skip</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text2}>{item.text2}</Text>
        <Text style={styles.text1}>{item.text1}</Text>
      </View>
    </View>
  );

  const handleSkipPress = () => {
    if (activeSlide < data.length - 1) {
      carouselRef.current.snapToNext();
    } else {
      navigation.navigate('GetMoody');
    }
  };

  return (
    <View style={styles.container}>

          <Carousel
            ref={carouselRef}
            data={data}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={335}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={1}
          />
<View style={styles.LineView}/>
    </View>
  );
}
