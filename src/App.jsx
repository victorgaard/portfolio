import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./assets/search.svg";
import Mic from "./assets/mic.svg";

function App() {
  const [animationEnd, setAnimationEnd] = useState(false);
  const [searchResults, setSearchResults] = useState(false);

  // Wait first animation to end,
  // then render the input content
  useEffect(() => {
    let timeout;
    setTimeout(() => {
      setAnimationEnd(!animationEnd);
    }, 1200);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  // Wait second animation to end,
  // then render the search results
  useEffect(() => {
    let timeout;
    setTimeout(() => {
      setSearchResults(!searchResults);
    }, 6400);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-search">
        <img src={Search} alt="search icon" />

        {animationEnd ? (
          <>
            <h1>victor santos product designer</h1>
            <img className="App-search--mic" src={Mic} alt="mic icon" />
          </>
        ) : (
          ""
        )}
      </header>

      {searchResults ? (
        <div className="Search-results">
          <p>No results containing all your search terms were found.</p>
          <div className="Search-results--inner">
            <div>
              <p>Did you mean:</p>
            </div>
            <div>
              <a href="/">
                <h2>victor santos front-end developer</h2>
              </a>
              <a href="/">
                <h2>victor santos landscape photographer</h2>
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
