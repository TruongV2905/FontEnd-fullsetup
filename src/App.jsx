import { ConfigProvider } from "antd";
import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./config/router";
import { persistor, store } from "./redux/store";
import StateProvider from "./contexts/StateProvider";

function App() {
  return (
    <ConfigProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StateProvider>
            <RouterProvider router={router} />
            <ToastContainer />
          </StateProvider>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
