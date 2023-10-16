import React from "react";
// Stylesheet
// import "./RootLayout.scss";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
//Images
const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
export default RootLayout;
