import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import "./Root.css";
import SideBar from "../SideBar/SideBar";

const Root = () => {
  return (
    <div className="text">
      <Header></Header>
      <div className="root-main">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
