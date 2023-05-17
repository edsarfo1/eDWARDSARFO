import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  cartActions,
  increaseQuantity,
} from '../../src/features/cart/cartSlice';

const itemsArray = [
  {
    name: 'Macbook Pro',
    details: 'Macbook Pro 1TB with M2 chip',
    price: 2500,
    id: 1,
  },
  {
    name: 'iPhone 14 Pro Max',
    details: 'iPhone Pro Max 1TB in Midnight',
    price: 1500,
    id: 2,
  },
  {
    name: 'Samsung 50" 4K TV',
    details: 'Curved OLED Smart TV',
    price: 1000,
    id: 3,
  },
  {
    name: 'Playstation 5',
    details: 'Playstation 5 Disc Bundle',
    price: 600,
    id: 4,
  },
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = itemsArray;
  const cartItems = useSelector(state => state.cart.cartItems);

  const renderItem = ({item}) => {
    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
      <View style={styles.itemCell}>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.details}</Text>
          <Text>{item.price}</Text>
        </View>
        <View>
          <Text style={styles.text}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => {
              if (cartItem) {
                dispatch(cartActions.increaseQuantity(cartItem.id));
              } else {
                dispatch(cartActions.addToCart(cartItem));
              }
            }}>
            <Text>Purchase</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={styles.cartTitle}>Cart</Text>

      <FlatList
        data={cartItems}
        renderItem={({item}) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>{item.details}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemCell: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    borderTopWidth: 0.5,
    paddingVertical: 10,
  },
  text: {
    fontWeight: 'bold',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  cartItem: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 5,
  },
});

export default Dashboard;
