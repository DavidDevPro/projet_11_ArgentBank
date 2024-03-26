import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage par défaut
import { configureStore } from "@reduxjs/toolkit";
// attention!!! bien importer la slice loginSlice
import loginSlice from "./slices";

const persistConfig = {
  key: "Login",
  storage,
};

const persistedReducer = persistReducer(persistConfig, loginSlice.reducer);
//
//
//
// configuration du store Redux en utilisant configureStore
export const store = configureStore({
  reducer: {
    // configuration du reducer de la slice Login
    Login: persistedReducer,
  }, // Configuration du middleware pour éviter les avertissements de sérialisation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
          "persist/FLUSH",
        ],
      },
    }),
});

export const persistor = persistStore(store);
