import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';
function App() {
  return <div className=" flex flex-wrap min-h-screen">
    <Header></Header>
    <Toaster></Toaster>
   <Outlet />
   <Footer></Footer>
   </div>;
}

export default App;
