import { StyleSheet } from "react-native";
import { COLOR, FONT, TEXT_STYLE, hp } from "../../data/StyleGuides";

export const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor:COLOR.white
    },
    HeaderContainer: {
        marginTop: '8%',
        alignItems: 'center'
    },
    HeaderText: {
        fontSize: 21,
        color: COLOR.black,
        fontFamily: FONT.Poppins_Bold,
    },
    SelectLabel: {
       fontSize:15,
       color:COLOR.black,
        marginLeft: '4.8%',
        marginTop: '4.5%',
    },
    DropDown: {
        bottom: hp(.5)
    },
    BottomContainer: {
        width: '100%',
        marginTop:"50%"
    },
    Description: {
        ...TEXT_STYLE.small_Text,
        width: '90%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '3%'
    },
    SignInButton: {
        backgroundColor: COLOR.primary,
        borderColor: COLOR.white,
        borderWidth: 1,
        marginTop:"5%"
    },
    SignInLabel: {
        color: COLOR.white
    }

})