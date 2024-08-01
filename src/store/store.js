import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import alertSlice from './slice/alertSlice';
import userSlice from './slice/userSlice';
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


  const persistedAuthReducer = persistReducer(persistConfig, authReducer);
  const persistedUserReducer = persistReducer(persistUser, userSlice);

  
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    alert:alertSlice,
    userDetails:persistedUserReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
