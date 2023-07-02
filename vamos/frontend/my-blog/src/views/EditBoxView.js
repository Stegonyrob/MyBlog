import React from "react";
import Footer from "../components/Footer";
import CustomNavbar from "../components/NavBar";
import EditBox from "../components/EditBox";

export default function HomeView() {
  return (
    <div>
      <CustomNavbar />
      <EditBox />
      <Footer />
    </div>
  );
}
