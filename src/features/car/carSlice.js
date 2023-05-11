import {createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {carCollection: []};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addNewCar: (state, action) => {
      state.carCollection.push(action.payload);
    },
    deleteCar: (state, action) => {
      // console.log(state.carCollection);
      // const copyArray = _.clone(state.carCollection);
      // console.log(copyArray);
      // const updatedArray = state.carCollection.filter(thisElement => {
      //   return (
      //     thisElement.brand == action.payload.brand &&
      //     thisElement.name == action.payload.name &&
      //     thisElement.model == action.payload.model
      //   );
      // });
      // console.log(updatedArray);
      // state.carCollection = updatedArray;
    },
  },
});

export const carActions = carSlice.actions;

export default carSlice.reducer;
