// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR } from '../data/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  chickenLogo: {
    height: 115,
    width: 239,
  },
  chunkyChicken: {
    height: 124,
    width: 220,
    marginTop: '20%',
  }
});
