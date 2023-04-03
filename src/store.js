import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducers/counter'

const store = configureStore({
  reducer: counterSlice,
});

export default store;