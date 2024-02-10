import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./App.css";
import appStore from "./store/appStore.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={appStore}>
        <App />
    </Provider>
);
