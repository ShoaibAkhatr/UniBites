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
        marginTop: '1%',
        fontWeight:"700",
        alignSelf:'center'
      },
    enter: {
        fontWeight: "500",
        fontSize: 14,
        fontFamily: FONT.Urbanist_Regular,
        color: COLOR.black,
        marginTop:"1%",
        marginLeft: "5%",
        alignSelf:'center',
        justifyContent:'center'
    },
    Email: {
        fontWeight: "600",
        fontSize: 14,
        fontFamily: FONT.Urbanist_SemiBold,
        color: COLOR.black,
        marginTop: "10%",
        marginLeft: "5%"
    },
    Buttoncontaienr: {
        marginTop: '2%'
    },
    input: {
        borderColor: COLOR.black,
        borderWidth: 0,
        marginTop:"80%",
       
    },
    focusedInput: {
        borderWidth: 1,
        borderColor: COLOR.primary
    },
    LineView: {
        height: 4,
        backgroundColor: COLOR.gray_240,
        width: 145,
        alignSelf: 'center',
        marginBottom:"1%",
        marginTop:"32%"
      },

})
export default style;