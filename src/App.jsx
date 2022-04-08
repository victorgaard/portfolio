import React, { useState } from "react";
import Header from "./Components/Header";
import SearchResults from "./Components/SearchResults";
import Frontend from "./Components/Frontend";
import Photographer from "./Components/Photographer";
import "./App.css";

function App() {
  const [title, setTitle] = useState("product designer");
  const [searchResults, setSearchResults] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const [photographer, setPhotographer] = useState(false);

  return (
    <div className="App">
      <Header
        setSearchResults={setSearchResults}
        setFrontend={setFrontend}
        setPhotographer={setPhotographer}
        title={title}
        setTitle={setTitle}
      />

      <SearchResults
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        setFrontend={setFrontend}
        setPhotographer={setPhotographer}
        setTitle={setTitle}
      />

      <Frontend frontend={frontend} />

      <Photographer photographer={photographer} />
    </div>
  );
}

export default App;
