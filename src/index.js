import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CompanyReducer } from "./Component/redux/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "main-root",
  storage,
};

const persistReducers = persistReducer(persistConfig, CompanyReducer);

const store = createStore(
  persistReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
