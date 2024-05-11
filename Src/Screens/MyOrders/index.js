import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import ReuseHeader from '../../Components/ReuseHeader'
const MyOrders = () => {
  return (
    <View style={styles.container}>
         <ReuseHeader title={'My Orders'} titlestyle={styles.Titlestyle} />

    </View>
  )
}

export default MyOrders