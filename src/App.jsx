import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Frontend from "./Components/Frontend";
import Photographer from "./Components/Photographer";
import Search from "./assets/search.svg";
import "./App.css";

function App() {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                shouldAnimate={shouldAnimate}
                setShouldAnimate={setShouldAnimate}
                Search={Search}
              />
            }
          />
          <Route
            path="/frontend"
            element={
              <Frontend setShouldAnimate={setShouldAnimate} Search={Search} />
            }
          />
          <Route
            path="/photographer"
            element={
              <Photographer
                setShouldAnimate={setShouldAnimate}
                Search={Search}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
