import React from "react";
//import Home from "../Components/home/Home";
import Footer from "../components/Footer";
import Card from "../components/Card";
import CustomNavbar from "../components/NavBar";

export default function HomeView() {
  return (
    <div>
      <CustomNavbar />
      <Card />
      <Footer />
    </div>
  );
}
