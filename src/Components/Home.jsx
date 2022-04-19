import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import SearchResults from "./SearchResults";

function Home({ Search, shouldAnimate, setShouldAnimate }) {
  const handleBack = () => {
    setShouldAnimate(false);
  };

  useEffect(() => {
    window.onpopstate = handleBack;
  }, []);

  return (
    <>
      <Header Search={Search} shouldAnimate={shouldAnimate} />
      <SearchResults shouldAnimate={shouldAnimate} />
    </>
  );
}

Home.propTypes = {
  Search: PropTypes.string.isRequired,
  shouldAnimate: PropTypes.bool.isRequired,
  setShouldAnimate: PropTypes.func.isRequired,
};

export default Home;
