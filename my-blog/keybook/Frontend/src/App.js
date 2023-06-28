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

import HomeView from "./views/HomeView";

//import ErrorView from "./views/ErrorView";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />

            <Route path="/error" element={<ErrorView />} />
            <Route path="*" element={<Navigate to="/error" />} />
            {isAuthenticated ? (
              <>
                <Route path="/home" element={<HomeView />} />
              </>
            ) : (
              <Route path="/error" element={<Navigate to="/error" />} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
