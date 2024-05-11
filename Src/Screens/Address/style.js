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
  searchicon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  input: {
    width: '90%',
    backgroundColor:COLOR.white,
    elevation:5,
    borderRadius:2,
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
        fontWeight:"700"
      },
      Hometext:{
        fontSize:20,
        color:COLOR.black,
      marginLeft:"5%",
      marginTop:'2%'
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
        height:64,
        flexDirection:'row',
        marginBottom:"2%",
      
      },
      CartViewFirst:{
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
        alignSelf:'center',
      },
      Orderimage:{
        width:24,
        height:24,
        alignSelf:'center',
        marginLeft:'1%',
        resizeMode:'contain'
      },
      Name:{
        fontSize:10,
        fontWeight:"400",
        color:COLOR.black,
        alignSelf:'center',
        marginLeft:"2%",
        paddingRight:'12%',
        paddingLeft:"3%"
      },
      NameFirst:{
        fontSize:15,
        fontWeight:"400",
        color:COLOR.red,
        alignSelf:'center',
        marginLeft:"2%"
      },
      iconimage:{
        width:20,
        height:20,
        marginRight:'5%',
        alignSelf:'center',
        resizeMode:'contain'
      },
      Buttoncontainre:{
        marginTop:"60%"
      }
     
});

export default style;