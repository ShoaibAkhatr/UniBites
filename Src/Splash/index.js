import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLOR } from '../data/StyleGuides';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {

    const timeout = setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [navigation]); 

  return (
    <View style={styles.container}>
      <View style={styles.ChildContainer}>
        <Image source={require('../Assets/images/Logouni.png')} style={styles.chickenLogo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.primary, // Set background color to white
  },
  chickenLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginRight: '2%'
  },
  ChildContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLOR.white,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  Unibites: {
    alignSelf: 'center',
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "700",
    color: COLOR.black
  }
});
