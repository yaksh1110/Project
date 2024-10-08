// import logo from "./logo.svg";
import "./App.css";
import * as React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import Items from "./components/Items";
import { Outlet } from "react-router-dom";
import FetchItems from "./components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  // console.log("fetchStatus", fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {/* <LoadingSpinner/> */}
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
