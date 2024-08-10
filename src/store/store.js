import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import alertSlice from './slice/alertSlice';
import userSlice from './slice/userSlice';
import searchSlice from './slice/searchSlice';
import cartSlice from './slice/cartSlice';
import modalSlice from './slice/modalSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'authslice', // Key for the persisted data in storage
    storage,
  };

  const persistUser = {
    key: 'userDetails', // Key for the persisted data in storage
    storage,
  };
  const persistCart = {
    key: 'cart', // Key for the persisted data in storage
    storage,
  };


  const persistedAuthReducer = persistReducer(persistConfig, authReducer);
  const persistedUserReducer = persistReducer(persistUser, userSlice);
  const persistedCartReducer = persistReducer(persistCart, cartSlice);


  
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    alert:alertSlice,
    userDetails:persistedUserReducer,
    searchItem:searchSlice,
    cartItem: persistedCartReducer,
    modal:modalSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
