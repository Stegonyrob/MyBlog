import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";
import CustomNavbar from "../components/NavBar";
import EditCard from "../components/EditCard";

function renderEditableCardView() {
  ReactDOM.render(
    <Router>
      <CustomNavbar />
      <EditCard />
      <Footer />
    </Router>,
    document.getElementById("root")
  );
}

export default renderEditableCardView;
