import React from "react";
import Footer from "../components/Footer";
import CustomNavbar from "../components/NavBar";

import PostCard from "../components/PostCard";

export default function PostCardView() {
  return (
    <div>
      <CustomNavbar />
      <PostCard />
      <Footer />
    </div>
  );
}
