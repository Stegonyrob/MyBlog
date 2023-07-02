import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMeView from "./views/AboutMeView";
import HomeView from "./views/HomeView";
import NewArticleView from "./views/NewArticleView";
import EditBoxView from "./views/EditBoxView";
import EditableCardView from "./views/EditArticleView";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<AboutMeView />} />
            <Route path="/newarticle" element={<NewArticleView />} />
            <Route path="/editcard/:id" element={<EditableCardView />} />
            <Route path="/editbox/:id" element={<EditBoxView />} />
            <Route path="/home" element={<HomeView />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
