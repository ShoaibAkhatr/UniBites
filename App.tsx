import { View ,Text} from 'react-native'
import React from 'react'
import StackNavigation from './Src/StackNavigation/StackNavigation'
import { Provider } from 'react-redux';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
   <StackNavigation/>
   </Provider>
  )
}

export default App
