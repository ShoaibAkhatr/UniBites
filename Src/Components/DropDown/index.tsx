import { StyleSheet } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { COLOR, FONT, commonStyles, hp, wp } from '../../data/StyleGuides';


const DropDown = ({open, value, items, setOpen, setValue, setItems, placeholder, style, dropDownDirection, labelStyle}) => {
   
    return (
        <>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={[styles.DropDown, style]}
                dropDownDirection={dropDownDirection ? dropDownDirection : "BOTTOM"}
                placeholder={placeholder}
                showTickIcon={false}
                placeholderStyle={[styles.Label, labelStyle]}
                labelStyle={[styles.Label, { color:COLOR.black }]}
                dropDownContainerStyle={styles.DropDownSheet}
                selectedItemContainerStyle={styles.SelectedItem}
                selectedItemLabelStyle={styles.SelectedLabel}
                listItemLabelStyle={styles.ListItems}
            />
        </>
    )
}

export default DropDown

const styles = StyleSheet.create({
    DropDown: {
        ...commonStyles.verticleView,
        width: '92%',
        height: hp(6),
        alignSelf: 'center',
        backgroundColor: COLOR.white,
        borderWidth: 0,
        borderBottomWidth: 1,
        paddingTop: hp(1.2),
        borderBottomColor: COLOR.black
    },
    DropDownSheet: {
        borderColor: 'transparent',
        elevation: 2,
        width: '92%',
        alignSelf: 'center'
    },
    Label: {
        fontSize: 15,
        color: COLOR.black,
        fontFamily: FONT.Roboto_Medium,
        right: wp(1)
    },
    SelectedItem: {
        backgroundColor: COLOR.darkprimary
    },
    SelectedLabel: {
        fontSize: 13,
        color: COLOR.white,
        fontFamily: FONT.Poppins_Regular,
    },
    ListItems: {
        fontSize: 13,
        color: COLOR.black,
        fontFamily: FONT.Poppins_Regular,
    }
})