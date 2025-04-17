import React from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar"

import "./Root.css";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="container">
      <Header></Header>
      <div className="flex">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
