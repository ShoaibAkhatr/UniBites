import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR, FONT } from '../../data/StyleGuides'






const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    TextsImage_Style: {
        width: 115,
        height: 20
    },
    Image_View: {
        width: '63%'
    },
    Profile_View: {
        width: '90%',
        height: 250,
        borderRadius: 10,
        marginHorizontal: "5%",
        marginTop: '10%',
        marginBottom: '5%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',

    },
    ImageStyling: {
        width: 240,
        height: 240,
        borderRadius: 140
    },
    Circular_View: {
        width: 240,
        height: 240,
        borderRadius: 140,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.grey_9

    },
    User_Image: {
        position: 'absolute',
        height: 240,
        width: 240,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 140
    },
    bottomView: {
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: "5%"
    },
    ProfileText: {
        fontSize: 20,
        fontWeight: "700",
        fontFamily: FONT.Roboto_Bold,
        color: COLOR.primary,
        alignSelf: 'center',
        marginBottom: "5%"
    },
    Upload: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: FONT.Roboto_Regular,
        color: COLOR.black,
        alignSelf: 'center',

    },
    Uploadbtn: {
        fontSize: 20,
        fontWeight: "600",
        fontFamily: FONT.Roboto_Bold,
        color: COLOR.primary,
        alignSelf: 'center',
        marginTop: "10%"
    },
    btnsView: {
        marginTop: "30%"
    },
    Buttoncontainer: {
        marginTop: "0%"
    },
    btnText: {
        color: COLOR.primary
    },

})
export default style