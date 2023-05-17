import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {cartActions} from '../../src/features/cart/cartSlice';

const CartScreen = props => {
  const cartItems = useSelector(state => state.cart.CartItems);
  const dispatch = useDispatch();
  console.log('CartItems: ', cartItems);

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    console.log('total: ', total);
    console.log('item: ', item);
    return total + item.item.price * item.quantity;
  }, 0);

  const renderCellItem = ({item, index}) => {
    return (
      <View
        style={[
          styles.itemCell,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <View>
          <Text style={styles.text}>Name: {item.item.name}</Text>
          <Text style={styles.text}>Details: {item.item.details}</Text>
          <Text style={styles.text}>
            Price: {item.item.price} {'       '}
            {item.quantity > 1 ? item.item.price * item.quantity : null}
          </Text>
          <Text style={styles.text}>Quantity: {item.quantity}</Text>
        </View>
        <View></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FlatList data={cartItems} renderItem={renderCellItem} />
        <Text style={styles.title}>Total price: {totalPrice}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(cartActions.clearCart())}>
          <Text style={styles.textBtn}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
