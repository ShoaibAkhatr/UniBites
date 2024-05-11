import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Fonts} from '../../Themes/Fonts';
import {Colors} from '../../Themes/Colors';
import { COLOR, FONT } from '../../data/StyleGuides';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
  },
  headerView:{
    width:"90%",
    marginHorizontal:'5%',
    alignSelf:'center',
    justifyContent:'center',
    marginTop:"5%"
  },
  Profiletext:{
    fontSize:20,
    alignSelf:'center',
    justifyContent:'center',
    color:COLOR.primary,
  },
  CardView:{
    width:"90%",
    height:200,
    marginHorizontal:"5%",
    marginTop:"5%"
  },
  Cardimage:{
    width:"100%",
    height:'100%'
  },
  LineView:{
    width:"90%",
    marginHorizontal:"5%",
    height:2,
    backgroundColor:COLOR.black,
    marginVertical:"5%"
  },
  CartView:{
    width:"90%",
    marginHorizontal:"5%",
    elevation:3,
    backgroundColor:COLOR.white,
    height:54,
    flexDirection:'row',
    marginBottom:"5%"
  },
  Nameview:{
    flexDirection:'row',
    width:"87%",
    alignSelf:'center'
  },
  Orderimage:{
    width:24,
    height:24,
    alignSelf:'center',
    marginLeft:'3%',
    resizeMode:'contain',
  },
  Name:{
    fontSize:16,
    fontWeight:"600",
    color:COLOR.black,
    alignSelf:'center',
    marginLeft:"2%"
  },
  iconimage:{
    width:24,
    height:24,
    marginRight:'5%',
    alignSelf:'center',
    resizeMode:'contain'
  },
  Touchicon:{
    alignSelf:'center',
    marginRight:"4%"
  }
});

export default style;