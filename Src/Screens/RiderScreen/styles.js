// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
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
    fontSize: 12,
    color: COLOR.white,
    fontWeight: "500",
    alignSelf: 'center',
    textAlign:'center'
  },
  ButtonsView: {
    alignSelf:'center',
    height: 70,
    width: "28%",
    justifyContent: "space-between",
    paddingHorizontal: '5%',
    marginTop:"1%"
  },
  ButtonReject:{
marginBottom:"1%",
backgroundColor:COLOR.primary,
height:30,
alignSelf:'center',
width:70,
justifyContent:'center'
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
 
});
