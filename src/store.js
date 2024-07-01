// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const planttSlice = createSlice({
  name: 'plant',
  initialState: {
    items: [],
  },
  reducers: {
    updatePlant: (state, action) => {
      state.items.push(action.payload);
    },
    clearList: (state) => {
        state.items.pop();
      },
  },
});

export const { updatePlant, clearList } = planttSlice.actions;

const store = configureStore({
  reducer: {
    plant: planttSlice.reducer,
  },
});

export default store;