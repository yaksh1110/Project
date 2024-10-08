import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import myntraStore from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Items from "./components/Items";
import Bag from "./routes/Bag";
import Home from "./routes/Home";
import AddProduct, { FormAction } from "./components/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
        action: FormAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myntraStore}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
