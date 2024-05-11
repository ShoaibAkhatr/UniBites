import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import { COLOR, FONT } from "../../../data/StyleGuides";




const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.primary,
    marginTop: '2%',
    fontWeight:"700",
alignSelf:'center'
  },
  enter: {
    fontWeight: "500",
    fontSize: 14,
    fontFamily: FONT.Urbanist_Regular,
    color:COLOR.black,
    marginTop: "10%",
    marginBottom: "10%",
    alignSelf:'center'
  },
  Email: {
    fontWeight: "600",
    fontSize: 14,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginLeft: "5%"
  },
  Buttoncontaienr: {
    marginTop: '30%'
  },
  passwordIcon: {
    height: 20,
    width: 20,
  },
  input: {
    borderColor: COLOR.black,
    borderWidth: 0,
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: COLOR.primary
  },
  passwordHint: {
    fontWeight: "500",
    fontSize: 14,
    fontFamily: FONT.Urbanist_Regular,
    color: COLOR.primary,
    marginLeft: "5%",
    marginBottom: "2%"

  },
  LineView: {
    height: 4,
    backgroundColor: COLOR.gray_240,
    width: 145,
    alignSelf: 'center',
    marginBottom:"1%",
  },

})
export default style;