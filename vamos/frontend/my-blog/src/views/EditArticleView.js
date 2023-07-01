import React from "react";
import Footer from "../components/Footer";
import CustomNavbar from "../components/NavBar";
import PostEdit from "../components/EditCard";

export default function HomeView() {
  return (
    <div>
      <CustomNavbar />
      <EditableCard />
      <Footer />
    </div>
  );
}
