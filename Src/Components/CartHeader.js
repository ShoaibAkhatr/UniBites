import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLOR, FONT } from '../data/StyleGuides';


const CartHeader = ({title,titlestyle,onPress,onPressDelete}) => {
    const navigation = useNavigation()
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity  onPress={onPress ? onPress : ()=>navigation.goBack()}>
          <Image style={[styles.backIcon]} source={require('../Assets/images/blackback.png')} />
        </TouchableOpacity>
        <Text style={[styles.titleText,titlestyle]}>{title}</Text>
        <TouchableOpacity  onPress={onPressDelete}>
          <Image style={[styles.Deleteiamge]} source={require('../Assets/images/Deleteimage.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    justifyContent:'space-between',
    marginHorizontal:"5%",
    width:"90%",
    height:60,
  },
  backIcon: {
    height: 35,
    width: 32,
  },
  titleText: {
    fontSize: 16,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.primary,
    fontWeight:"700"
  },
  Deleteiamge:{
    width:19,
    height:20,
    alignSelf:'center',
    justifyContent:'center'
  }
});

export default CartHeader;
