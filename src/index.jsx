import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";  
import appStore from "./utils/appStore"; 
import App from "./App.jsx";
import "./index.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>  {/* ✅ Wrap App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
