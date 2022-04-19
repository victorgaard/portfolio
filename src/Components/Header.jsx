import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Header({ Search, shouldAnimate }) {
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
      {shouldAnimate ? (
        <div className="App-search">
          <img src={Search} alt="search icon" />
          {animationEnd && <h1>victor santos product designer</h1>}
        </div>
      ) : (
        <div className="App-search-no-animation">
          <img src={Search} alt="search icon" />
          <h1>victor santos product designer</h1>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  Search: PropTypes.string.isRequired,
  shouldAnimate: PropTypes.bool.isRequired,
};

export default Header;
