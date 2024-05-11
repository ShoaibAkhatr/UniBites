// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  HeaderView: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: "5%",
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  Mapimageview: {
    flexDirection: "row",
    width: "50%",
    alignSelf: 'center',
    justifyContent: "center"
  },
  bellicon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginTop: "2%"
  },
  Mapicon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginTop: 2,
  },
  Homeicon: {
    resizeMode: 'contain',
    height: 35,
    width: 236,
  },
  Hometext: {
    fontSize: 15,
    fontWeight: "600",
    color: COLOR.black,
    marginHorizontal: '5%'
  },
  streattext: {
    fontSize: 13,
    fontWeight: "500",
    color: COLOR.black
  },
  Getimageview: {
    height: 208,
    width: "90%",
    marginHorizontal: "5%",
  },
  GEtImage: {
    width: "100%",
    height: '100%'
  },
  Whts: {
    fontSize: 20,
    fontWeight: "700",
    color: COLOR.black,
    alignSelf: 'center'
  },
  Viewall: {
    color: COLOR.primary,
    fontSize: 15,
    alignSelf: 'center'
  },
  TextbtnView: {
    width: "90%",
    marginHorizontal: "5%",
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  scrollViewContent: {
    justifyContent: 'center',
    marginVertical: "5%",
    marginHorizontal: "5%",
    width: "90%"
  },
  ResturentContainer: {
    width: "100%",
    height: 200,
    marginBottom: '2%'
  },
  DishiesImage: {
    width: '100%', // Adjust width and height as needed
    height: '100%',
    resizeMode: 'contain',
  },
  samosaImage: {
    width: 100, // Adjust width and height as needed
    height: 100,
    resizeMode: 'contain',
  },
  Dominosicon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: "5%"
  },
  resturentname: {
    fontSize: 15,
    fontWeight: '600',
    color: COLOR.black,
    justifyContent: 'center',
    marginVertical:"2%"
  },
  ImagesView:{
    width:'100%',
    height:170,
    backgroundColor:COLOR.primary
  },
  PiceView:{
    flexDirection:"row",
    justifyContent:'space-between'
  },
  pricstyle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLOR.primary,
    justifyContent: 'center',
    marginVertical:"2%"
  },
});
