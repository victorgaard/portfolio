import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Developer from "./Components/Developer";
import Photographer from "./Components/Photographer";
import Modal from "./Components/Modal";
import Search from "./assets/search.svg";
import "./reset.css";
import "./App.css";

function App() {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [modal, setModal] = useState(true);

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
            path="/developer"
            element={
              <Developer setShouldAnimate={setShouldAnimate} Search={Search} />
            }
          />
          <Route
            path="/photographer"
            element={
              <Photographer
                setShouldAnimate={setShouldAnimate}
                Search={Search}
                modal={modal}
                setModal={setModal}
              />
            }
          />
          <Route
            path="/photographer/:country/:id/*"
            element={<Modal modal={modal} setModal={setModal} />}
          />
          <Route
            path="*"
            element={
              <Home
                shouldAnimate={shouldAnimate}
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
