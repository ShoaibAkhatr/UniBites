import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Input from './Input'; // Assuming you have an Input component
import { COLOR } from '../data/StyleGuides';

const SearchBar = ({placeholder,backgroundColor,tintColor}) => {
  return (
    <View style={styles.SearchView}>
      <Input
        placeholder={placeholder}
        style={styles.input}
        addLeft={<Image source={require('../Assets/images/search.png')} style={[styles.searchicon]} resizeMode='contain' />}
        addRight={<Image source={require('../Assets/images/mic.png')} style={[styles.searchicon]} />}
      />
      <TouchableOpacity style={[styles.sliderview,{backgroundColor:backgroundColor}]}>
        <Image source={require('../Assets/images/slider.png')} style={[styles.slidericon,{tintColor:tintColor}]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  SearchView: {
    width: '90%',
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
  input: {
    width: '80%',
  },
  sliderview: {
    height: 45,
    width: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.grey_03,
    marginHorizontal: '2%',
    borderRadius: 5,
  },
  slidericon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginLeft: '20%',
  },
  searchicon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
};

export default SearchBar;
