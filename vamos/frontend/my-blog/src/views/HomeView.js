import React from "react";
//import Home from "../Components/home/Home";
import Footer from "../components/Footer";
import Article from "../components/Article";
import CustomNavbar from "../components/NavBar";

export default function HomeView() {
  return (
    <div>
      <CustomNavbar />
      <Article cards={""} />

      <Footer />
    </div>
  );
}
