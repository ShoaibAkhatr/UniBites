import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image } from 'react-native';
import EditProfile from '../Screens/EditProfile';
import MyOrders from '../Screens/MyOrders';
import Home from '../Screens/Home';
import Shop from '../Screens/Shop';
import Cart from '../Screens/Cart';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{ 
                style: {
                    position: 'absolute',
                    height: 70,
                    elevation: 0,
                    borderTopColor: 'transparent',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                },
                labelStyle: {
                    display: 'none'
                },
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/images/HomeFocus.png') : require('../Assets/images/Home.png')}
                                style={styles.tabBarIcon}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="MyOrders"
                component={MyOrders}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/images/ThirdbottomFocus.png') : require('../Assets/images/Thirdbottom.png')}
                                style={styles.tabBarIcon}
                            />
                        </View>
                    ),
                }}
            />
             <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/images/shopfocus.png') : require('../Assets/images/shop.png')}
                                style={styles.tabBarIcon}
                            />
                        </View>
                    ),
                }}
            />
             <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/images/cartfoc.png') : require('../Assets/images/cart.png')}
                                style={styles.tabBarIcon}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/images/EditFocus.png') : require('../Assets/images/Editbottom.png')}
                                style={styles.tabBarIcon}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;

const styles = StyleSheet.create({
    tabBarIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBarIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
});
