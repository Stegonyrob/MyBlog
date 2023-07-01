import React from "react";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import CustomNavbar from "../components/NavBar";

export default function HomeView() {
  return (
    <div>
      <CustomNavbar />
      <AboutMe />
      <Footer />
    </div>
  );
}
