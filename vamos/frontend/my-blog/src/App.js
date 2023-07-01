import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
} from "react-router-dom";
import AboutMeView from "./views/AboutMeView";
import HomeView from "./views/HomeView";
import NewArticleView from "./views/NewArticleView";
import SuggestedPagesView from "./views/SuggestPagesView";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutMeView />} />
            <Route path="/newarticle" element={<NewArticleView />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="/suggested-pages" element={<SuggestedPagesView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
