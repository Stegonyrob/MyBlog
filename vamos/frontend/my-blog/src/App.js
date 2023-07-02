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
import EditBoxView from "./views/EditBoxView";
import EditableCardView from "./views/EditArticleView";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutMeView />} />
            <Route path="/newarticle" element={<NewArticleView />} />
            <Route path="/editcard/:id" element={<EditableCardView />} />
            <Route path="/editbox/:id" element={<EditBoxView />} />
            <Route path="/home" element={<HomeView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
