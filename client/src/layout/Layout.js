import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AnimalsProvider from "../context/Animals.context";

const Layout = () => {
  return (
    <AnimalsProvider>
      <Header />
      <Outlet />
      <Footer />
    </AnimalsProvider>
  );
};

export default Layout;
