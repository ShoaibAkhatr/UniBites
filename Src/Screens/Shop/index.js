import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import ReuseHeader from '../../Components/ReuseHeader'
import SearchBar from '../../Components/SearchBar'
import { COLOR } from '../../data/StyleGuides'
const Shop = () => {
  return (
    <View style={styles.container}>
<ReuseHeader />
<SearchBar  backgroundColor={COLOR.primary}  placeholder={'Get a restaurant...'} tintColor={COLOR.gray_240}/>
    </View>
  )
}

export default Shop