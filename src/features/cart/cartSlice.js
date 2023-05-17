import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;

      const itemPresentKey = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToAdd.name;
      });

      if (itemPresentKey !== -1) {
        // Item found
        const itemFound = state.cartItems[itemPresentKey];
        itemFound.quantity += 1;
      } else {
        // Item doesn't exist
        state.cartItems.push({item: itemToAdd, quantity: 1});
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemPresentIndex = state.cartItems.findIndex(
        thisElement => thisElement.item.id === itemId,
      );
      const itemFound = state.cartItems[itemPresentIndex];

      if (!itemFound?.quantity) {
        return;
      } else if (itemFound.quantity >= 1) {
        itemFound.quantity += 1;
      } else {
        return;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemPresentIndex = state.cartItems.findIndex(
        thisElement => thisElement.item.id === itemId,
      );
      const itemFound = state.cartItems[itemPresentIndex];

      if (!itemFound?.quantity) {
        return;
      } else if (itemFound.quantity > 1) {
        itemFound.quantity -= 1;
      } else if (itemFound.quantity === 1) {
        state.cartItems.splice(itemPresentIndex, 1);
      } else {
        return;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;

      const itemPresentIndex = state.cartItems.findIndex(
        thisElement => thisElement.item.id === itemId,
      );
      const itemFound = state.cartItems[itemPresentIndex];

      if (!itemFound?.quantity) {
        return;
      } else if (itemFound.quantity > 1) {
        // Item more than 1
        itemFound.quantity -= 1;
      } else if (itemFound.quantity === 1) {
        state.cartItems.splice(itemPresentIndex, 1);
      } else {
        return;
      }
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
