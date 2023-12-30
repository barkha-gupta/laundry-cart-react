import React from "react";
import Main_Header from "../../components/main-header/main-header";
import Side_Navbar from "../../components/side-navbar/side-navbar";
import Footer from "../../components/footer/footer";

export default function Orders() {
  return (
    <>
      <Main_Header />
      <div className="hero-container">
        <Side_Navbar />
        <div className="orders-containers"></div>
      </div>
      <Footer />
    </>
  );
}
