import React from "react";
import Footer from "../components/Footer";
import CustomNavbar from "../components/NavBar";
import EditableCard from "../components/EditCard";

export default function EditableCardView() {
  return (
    <div>
      <CustomNavbar />
      <EditableCard />
      <Footer />
    </div>
  );
}
