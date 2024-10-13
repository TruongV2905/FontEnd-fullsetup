import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./rootReducer";
// import { Persistor } from "redux-persist"; // Import types from redux-persist
// import { Store } from "@reduxjs/toolkit"; // Import Store type

// Persist config typing
const persistConfig = {
  key: "root",
  storage,
};

// Properly typed rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Typed store
export const store = configureStore({
  reducer: persistedReducer,
});

// Typed persistor
export const persistor = persistStore(store);
