import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Search from "../assets/search.svg";

function Header({
  setSearchResults,
  setFrontend,
  setPhotographer,
  title,
  setTitle,
}) {
  const [animationEnd, setAnimationEnd] = useState(false);

  // Wait first animation to end,
  // then render the input content
  useEffect(() => {
    let timeout;
    setTimeout(() => {
      setAnimationEnd(true);
    }, 500);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
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
  );
}

Header.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  setFrontend: PropTypes.func.isRequired,
  setPhotographer: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default Header;
