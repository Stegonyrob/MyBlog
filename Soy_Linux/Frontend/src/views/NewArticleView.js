import React from "react";
import Footer from "../components/Footer";
import CustomNavbar from "../components/NavBar";
import PostForm from "../components/PostForm";

export default function HomeView() {
  return (
    <div>
      <CustomNavbar />
      <PostForm />
      <Footer />
    </div>
  );
}
