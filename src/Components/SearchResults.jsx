import React, { useEffect } from "react";
import PropTypes from "prop-types";

function SearchResults({
  searchResults,
  setSearchResults,
  setFrontend,
  setPhotographer,
  setTitle,
}) {
  // Wait second animation to end,
  // then render the search results
  useEffect(() => {
    let timeout;
    setTimeout(() => {
      setSearchResults(true);
    }, 4300);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="Search-results">
      {searchResults && (
        <>
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
        </>
      )}
    </div>
  );
}

SearchResults.propTypes = {
  searchResults: PropTypes.bool.isRequired,
  setSearchResults: PropTypes.func.isRequired,
  setFrontend: PropTypes.func.isRequired,
  setPhotographer: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default SearchResults;
