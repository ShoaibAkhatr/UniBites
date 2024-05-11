// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  FlatouterView:{
     height:350
  },
  ChildView: {
    width: '90%',
    marginHorizontal: "5%",
flexDirection: "row",
  borderWidth:2,
  borderColor:COLOR.primary,
  marginTop:'2%',
  borderRadius:5,
  },
  LoadedPizza: {
    width: 80,
    height: 80,
    marginLeft: "1%",
    marginRight: "3%",
    marginTop:"2.5%",
    borderRadius:5,
  },
  InerView: {
    height: 80,
    width: "42%",
    marginTop:'5%'
  },
  Price: {
    fontWeight: "700",
    fontSize: 20,
    color: COLOR.black,

  },
  Button: {
    fontSize: 20,
    color: COLOR.white,
    fontWeight: "500",
    alignSelf: 'center',
  },
  Quantity:{
    fontSize: 15,
    color: COLOR.white,
    fontWeight: "500",
    alignSelf: 'center',
  },
  ButtonsView: {
    alignSelf:'center',
    flexDirection: "row",
    height: 30,
    backgroundColor: COLOR.primary,
    width: "28%",
    justifyContent: "space-between",
    paddingHorizontal: '5%',
    marginTop:"5%"
  },
  Name: {
    fontWeight: "700",
    color: COLOR.primary,
    fontSize: 20,
  },
  Regular: {
    fontWeight: "500",
    color: COLOR.black,
    fontSize: 15,
  },
  BottomView:{
    marginTop:"5%",
    height:240,
    width:"100%",
    backgroundColor:COLOR.primary,
    paddingTop:"1%"
  },
  FlatContainer:{
 height:25,
  },
  cartView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width:"90%",
    marginHorizontal:'5%',
  },
  namePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color:COLOR.white,
    alignSelf:'center'
  },
  Subprice: {
    fontSize: 16,
    color:COLOR.white,
    alignSelf:'center'
  },
  Lineimage:{
    marginBottom:0,
    marginVertical:"5%",
    marginBottom:"5%"
  },
  ButtonContainer:{
    borderWidth:1,
    borderColor:COLOR.white,
    marginTop:0,
    marginBottom:'3%',
    height:40,
    marginTop:"10%"
  },
  ButtonContainerCheckout:{
    marginTop:0,
    backgroundColor:COLOR.white,
    marginBottom:'2%',
    height:40,
  },
  buttontext:{
    color:COLOR.primary,
  }
});
