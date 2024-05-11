// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  carouselItem: {
    width: '100%',
    backgroundColor: 'white', // Set your background color
    borderRadius: 10,
    overflow: 'hidden',
    height:"90%",
    marginTop:"10%"
  },
  Button: {
    alignSelf: "flex-end",
    marginRight: "10%",
  },
  image: {
    width: 255,
    height: 239,
    alignSelf: 'center',
    marginTop: '10%'
  },
  textContainer: {
    padding: 10,
    height: 200,
  },
  text1: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_Bold,
    color: COLOR.black,
    marginTop: "20%",
    marginHorizontal: "10%",
    alignSelf: "center",
    
  },
  text2: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_Bold,
    color: COLOR.primary,
    alignSelf: 'center',
    fontWeight: "700",
    marginTop: "20%",
   
  },
  paginationContainer: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '120%',
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginHorizontal: -19,
    backgroundColor: COLOR.primary, // Set your pagination dot color
  },

  signUpText: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.primary,
    textDecorationLine: 'underline',
  },
  LineView: {
    height: 4,
    backgroundColor: COLOR.gray_240,
    width: 145,
    alignSelf: 'center',
    marginBottom:"3%"
  }
});
