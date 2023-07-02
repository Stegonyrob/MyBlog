import React from "react";
import Footer from "../components/Footer";
import CustomNavbar from "../components/NavBar";
import EditBox from "../components/EditBox";
import App from "../App.css";
export default function EditBoxView() {
  return (
    <div>
      <CustomNavbar />
      <EditBox />
      <Footer />
    </div>
  );
}
