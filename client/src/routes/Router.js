import React, { Fragment } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import AppNavbar from "../component/AppNavbar";

const MyRouter = () => {
  return (
    <Fragment>
      <AppNavbar />
      <Header />
      <h1>Hello Body</h1>
      <Footer />
    </Fragment>
  );
};

export default MyRouter;
