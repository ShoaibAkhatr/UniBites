import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLOR, FONT } from '../data/StyleGuides';


const CheckoutHeader = ({title,titlestyle,onPress}) => {
    const navigation = useNavigation()
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity  onPress={onPress ? onPress : ()=>navigation.goBack()}>
          <Image style={[styles.backIcon]} source={require('../Assets/images/blackback.png')} />
        </TouchableOpacity>
        <Text style={[styles.titleText,titlestyle]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    marginLeft: '5%',
  },
  backIcon: {
    height: 35,
    width: 32,
  },
  titleText: {
    fontSize: 16,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.black,
    marginLeft: '5%',
  },
});

export default CheckoutHeader;
