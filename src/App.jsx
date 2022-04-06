import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./assets/search.svg";
import Avatar from "./assets/avatar.jpg";

function App() {
  const [title, setTitle] = useState("product designer");
  const [animationEnd, setAnimationEnd] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const [photographer, setPhotographer] = useState(false);

  // Wait first animation to end,
  // then render the input content
  useEffect(() => {
    let timeout;
    setTimeout(() => {
      setAnimationEnd(true);
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
      setSearchResults(true);
    }, 6400);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="App">
      <div className="Header-wrapper">
        {title !== "product designer" && (
          <div className="Back-button">
            <button
              type="button"
              onClick={() => {
                setSearchResults(true);
                setTitle("product designer");
                setFrontend(false);
                setPhotographer(false);
              }}
            >
              Back
            </button>
          </div>
        )}
        <div className="App-search">
          <img src={Search} alt="search icon" />

          {animationEnd && <h1>victor santos {title}</h1>}
        </div>
      </div>

      {searchResults && (
        <div className="Search-results">
          <p>No results containing all your search terms were found.</p>
          <div className="Search-results--inner">
            <div>
              <p>Did you mean:</p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  setSearchResults(false);
                  setTitle("front-end developer");
                  setFrontend(true);
                }}
              >
                victor santos front-end developer
              </button>

              <button
                type="button"
                onClick={() => {
                  setSearchResults(false);
                  setTitle("landscape photographer");
                  setPhotographer(true);
                }}
              >
                victor santos landscape photographer
              </button>
            </div>
          </div>
        </div>
      )}

      {frontend && (
        <div className="Frontend">
          <div className="Frontend-wrapper">
            <div>
              <h3>Olá, tudo bom?</h3>

              <p className="subtitle">
                As you can probably tell, my name is Victor.
              </p>

              <p className="paragraph">
                I&apos;m a creative front-end developer passionate about user
                experience. I love crafting creative, fluid and functional web
                applications.
              </p>
            </div>

            <div>
              <img src={Avatar} alt="Avatar" />
            </div>
          </div>

          <div className="Frontend-div">
            <h4>About me</h4>
          </div>

          <div className="Frontend-div">
            <h4>About me</h4>
          </div>
        </div>
      )}

      {photographer && (
        <div className="Photographer">
          <p className="paragraph">
            Come back sometime soon, my friend. Meanwhile, feel free to check my
            Instagram account&nbsp;@
            <a
              href="https://www.instagram.com/hunter.graphy/"
              target="_blank"
              rel="noreferrer"
            >
              hunter.graphy
            </a>
          </p>

          <script src="https://snapwidget.com/js/snapwidget.js" />

          <iframe
            src="https://snapwidget.com/embed/992098"
            className="snapwidget-widget"
            allowtransparency="true"
            frameBorder="0"
            scrolling="no"
            style={{
              marginTop: "48px",
              border: "none",
              overflow: "hidden",
              width: "100%",
              height: "2260px",
            }}
            title="Instagram feed"
          />
        </div>
      )}
    </div>
  );
}

export default App;
