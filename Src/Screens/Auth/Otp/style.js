import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import { COLOR, FONT } from "../../../data/StyleGuides";



const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    enter: {
        fontWeight: "500",
        fontSize: 14,
        fontFamily: FONT.Urbanist_Regular,
        color:COLOR.black,
        marginTop: "10%",
        marginLeft: "5%"
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
        marginTop: '30%',
      
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginHorizontal:"10%",
        marginTop:"20%"
    },
    Otp: {
        width: 45,
        height: 45,
        backgroundColor: COLOR.white,
        marginBottom: '2%',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 1,
        elevation: 1,
        borderWidth: 2,
        fontSize: 16,
        color: COLOR.primary
    },
    input: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 16,
    },
    Footer: {
        flex: 0.3,
        justifyContent: 'flex-end'
    },
    button: {
        backgroundColor: COLOR.primary,
        width: '100%',
        alignSelf: "center",
        padding: '3%',
        borderRadius: 20,
    },
    buttonText: {
        color: COLOR.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bottomView:{
        alignSelf:"flex-end",justifyContent:"flex-end",
        width:"100%"
    },
    welcomeText: {
        fontSize: 24,
        fontFamily: FONT.Urbanist_SemiBold,
        color: COLOR.primary,
        marginTop: '2%',
        fontWeight:"700",
        alignSelf:'center',
        marginTop:"5%"
      },
      LineView: {
        height: 4,
        backgroundColor: COLOR.gray_240,
        width: 145,
        alignSelf: 'center',
        marginBottom:"3%",
        marginTop:"57%"
      }
  

})
export default style;