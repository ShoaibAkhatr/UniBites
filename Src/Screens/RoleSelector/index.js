import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Label from '../../Components/Label'
import DropDown from '../../Components/DropDown'
import Button from '../../Components/Button'
import { COLOR } from '../../data/StyleGuides'

const RoleSelector = (props) => {
  const { navigation } = props
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Join as a Customer');
  const [items, setItems] = useState([
    { label: 'Join as a Customer', value: 'Join as a Customer' },
    { label: 'Join as a Rider', value: 'Join as a Rider' },
  ]);

  useEffect(() => {
    if (value) {
      setitem(value);
    }
  }, [value]);
  const handleNavigate = () => {
    setitem(value)
    if (value === 'Join as a Customer') {
      navigation.navigate('TabNavigation')
    }
    if (value === 'Join as a Rider'){
      navigation.navigate('RiderScreen')
    }
  }

  const setitem = async (value) => {
    try {
      await AsyncStorage.setItem('value', value);
      console.log('Value saved successfully.');
    } catch (error) {
      console.error('Error saving value:', error);
    }
  console.log('here is value line no 36 : : ',value);
  };
  return (
    <View style={styles.Container}>
      <View style={styles.HeaderContainer}>
        <Label style={styles.HeaderText}>Welcome to UniBites</Label>
        <Label>Your Favorites dishies</Label>
      </View>

      {/* DropDown */}
      <Label style={styles.SelectLabel}>Select Your Role</Label>
      <DropDown
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={'Select your role'}
        style={styles.DropDown} />

      <Label style={styles.Description}>"I'd like to join as a buyer of food items such as pizza or biryani."</Label>

      <View style={styles.BottomContainer}>
        <Button title='Join Now'
          onPress={() => handleNavigate()}
          disabled={value ? false : true}
           />
        <Button title='Sign In'
          ButtonContainer={styles.SignInButton}
          ButtonText={styles.SignInLabel}
          onPress={() => navigation.navigate('Signin')} />
      </View>
    </View>
  )
}

export default RoleSelector
