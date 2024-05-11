import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import { COLOR, FONT, commonStyles } from "../../data/StyleGuides";

const style = StyleSheet.create({
    container: {
        ...commonStyles.mainContainer,
        flex: 1,
        backgroundColor: COLOR.white
    },
    Titlestyle: {
        marginLeft: "27%",
        color: COLOR.primary,
        fontWeight: "700"
    },
})
export default style;