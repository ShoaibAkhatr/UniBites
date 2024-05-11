import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import TabNavigation from '../TabNavigation/TabNavigation';
import Splash from '../Splash';
import OnBoarding from '../Screens/OnBoarding';
import GetMoody from '../Screens/GetMoody';
import Email from '../Screens/Auth/Email';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import Otp from '../Screens/Auth/Otp';
import PasswordRecovered from '../Screens/Auth/PasswordRecovered';
import SignUp from '../Screens/Auth/SignUp';
import Signin from '../Screens/Auth/Signin';
import Success from '../Screens/Auth/Success';
import Payment from '../Screens/Payment';
import Address from '../Screens/Address';
import SureLogout from '../Screens/SureLogout';
import OrderPlaced from '../Screens/OrderPlaced';
import PayOnDelivery from '../Screens/PayOnDelivery';
import RoleSelector from '../Screens/RoleSelector';
import RiderScreen from '../Screens/RiderScreen';




const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="TabNavigation" component={TabNavigation}/>
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="GetMoody" component={GetMoody} />
                <Stack.Screen name="Email" component={Email} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Signin" component={Signin} /> 
                <Stack.Screen name="Success" component={Success} /> 
                <Stack.Screen name="Payment" component={Payment} /> 
                <Stack.Screen name="Address" component={Address} /> 
                <Stack.Screen name="SureLogout" component={SureLogout} /> 
                <Stack.Screen name="OrderPlaced" component={OrderPlaced} /> 
                <Stack.Screen name="PayOnDelivery" component={PayOnDelivery} /> 
                <Stack.Screen name="RoleSelector" component={RoleSelector} /> 
                <Stack.Screen name="RiderScreen" component={RiderScreen} /> 

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;
