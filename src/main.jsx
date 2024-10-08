import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/fonts.css";
import "./styles/transitions.css";
import { Provider } from "react-redux";
import store from "./redux/storeConfig.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Analytics } from "@vercel/analytics/react";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Analytics />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
