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
  Titlestyle:{
marginLeft:"30%",
color:COLOR.primary,
fontWeight:"700"
  },
  headerView:{
    width:"90%",
    marginHorizontal:'5%',
  },
  Profiletext:{
    fontSize:20,
    color:COLOR.black,
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
    backgroundColor:COLOR.white,
    height:44,
    flexDirection:'row',
    marginBottom:"5%",
    borderBottomWidth:2,
    borderBottomColor:COLOR.gray_236
  },
  WalletCartView:{
    width:"90%",
    marginHorizontal:"5%",
    backgroundColor:COLOR.white,
    height:44,
    flexDirection:'row',
    marginBottom:"5%",
  },
  Nameview:{
    flexDirection:'row',
    width:"90%",
    alignSelf:'center'
  },
  Orderimage:{
    width:24,
    height:24,
    alignSelf:'center',
    marginLeft:'1%',
    resizeMode:'contain'
  },
  Name:{
    fontSize:15,
    fontWeight:"400",
    color:COLOR.black,
    alignSelf:'center',
    marginLeft:"2%"
  },
  iconimage:{
    width:24,
    height:24,
    marginRight:'5%',
    alignSelf:'center'
  },
 
});

export default style;