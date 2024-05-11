// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../../data/StyleGuides';



export const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: "10%"
  },

  footerText: {
    fontSize: 14,
    color: COLOR.grey_5,

    fontFamily: FONT.Urbanist_Regular,
  },

  footerLink: {
    fontSize: 14,
    color: COLOR.primary,
    fontFamily: FONT.Urbanist_SemiBold,
    marginLeft: '2%',
  }, footerLinkContainer: {
    marginLeft: '2%'
  },
  container: {
    alignItems: 'center',
    marginTop: '10%',
  },
  image: {
    height: 61,
    width: 104,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.primary,
    marginTop: '2%',
    fontWeight: "700"
  },
  signInText: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black,
    marginTop: '2%',
  },
  inputContainer: {
    marginTop: '15%',
  },
  input: {
    borderColor: COLOR.black,
    borderWidth: 0,
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: COLOR.primary
  },
  leftIcon: {
    height: 24,
    width: 24,
    resizeMode: "contain"
  },
  leftIcon1: {
    height: 15,
    width: 16,
    resizeMode: "contain",
    marginLeft: 2,
  },
  passwordIcon: {
    height: 20,
    width: 20,
  },
  Container: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    marginLeft: '5%',
  },
  backIcon: {
    height: 32,
    width: 35,
  },
  Signuptext: {
    width: '90%',
    marginHorizontal: "5%",
    height: 20,
    marginVertical: "5%"
  },
  Faceboodimage:{
   width:"80%",
   marginHorizontal:"10%",
   height:70
  },

  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  LineView: {
    height: 4,
    backgroundColor: COLOR.gray_240,
    width: 145,
    alignSelf: 'center',
    marginBottom:"3%"
  },
// here is modal style 
Modalcontainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
},
modalView: {
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  height:150,
  backgroundColor:COLOR.primary,
  marginBottom:"20%"
},
modalText: {
  marginBottom:0,
  textAlign: 'center',
  fontSize:20,
  color:COLOR.black
},
Buttonoky:{
  width:70,
  height:40,
  backgroundColor:COLOR.black,
  borderRadius:5
},
});
