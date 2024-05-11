
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import CartHeader from '../../Components/CartHeader';
import Button from '../../Components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { decreaseQuantity, increaseQuantity,clearCart } from '../../../redux/Slices/CustomSlice';

const PayOnDelivery = () => {
  const savedData = useSelector((state) => state.custom);
  const navigation = useNavigation();
  const dispatch = useDispatch();

console.log('here is data that is come line no 17:::',savedData);

  const subtotal = savedData.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = item.quantity || 0;
    return acc + (itemPrice * itemQuantity);
  }, 0);

  // Calculate total price including tax and fees
  const taxAndFees = 30; // Example tax and fees
  const total = subtotal + taxAndFees;
  const NewFunction = ({ item }) => (
    <View style={styles.ChildView}>
      <Image source={item.image} style={styles.LoadedPizza} />
      <View style={styles.InerView}>
        <Text style={styles.Name}>{item.name}</Text>
        <Text style={styles.Price}>PKR Rs {item.price}</Text>
      </View>
      <View style={styles.ButtonsView}>
        <TouchableOpacity onPress={() => dispatch(decreaseQuantity({ id: item.id }))}>
          <Text style={styles.Button}>-</Text>
        </TouchableOpacity>
        <Text style={styles.Quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => dispatch(increaseQuantity({ id: item.id }))}>
          <Text style={styles.Button}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <CartHeader title={'Confirm Your Order' } onPressDelete={() => dispatch(clearCart())}/>
      <ScrollView>
        <FlatList
          data={savedData}
          renderItem={({ item }) => <NewFunction item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.BottomView}>

        <Text style={styles.namePrice}>Subtotal:                                            PKR {subtotal.toFixed(2)}</Text>
          <Text style={styles.namePrice}>Delivery Charges:                                     PKR  30</Text>
          <Image source={require('../../Assets/images/Lineimage.png')} style={styles.Lineimage} />
          <Text style={styles.namePrice}>Total:                                                   PKR {total.toFixed(2)}</Text>


          <Button title={'Voucher Code'} ButtonContainer={styles.ButtonContainer} />
          <Button title={'Place Order'} ButtonContainer={styles.ButtonContainerCheckout} ButtonText={styles.buttontext} onPress={() => navigation.navigate("OrderPlaced")} />
        </View>
      </ScrollView>
    </View>
  )
}

export default PayOnDelivery;
