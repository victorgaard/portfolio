import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SearchResults({ shouldAnimate }) {
  const [searchResults, setSearchResults] = useState(false);

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
    <div>
      {shouldAnimate ? (
        <div className="Search-results">
          {searchResults && (
            <>
              <p>No results containing all your search terms were found.</p>
              <div className="Search-results--inner">
                <div>
                  <p>Did you mean:</p>
                </div>

                <div>
                  <Link to="/developer">
                    <button type="button">
                      victor santos front-end developer
                    </button>
                  </Link>

                  <Link to="/photographer">
                    <button type="button">
                      victor santos landscape photographer
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="Search-results">
          <p>No results containing all your search terms were found.</p>
          <div className="Search-results--inner">
            <div>
              <p>Did you mean:</p>
            </div>

            <div>
              <Link to="/developer">
                <button type="button">victor santos front-end developer</button>
              </Link>

              <Link to="/photographer">
                <button type="button">
                  victor santos landscape photographer
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

SearchResults.propTypes = {
  shouldAnimate: PropTypes.bool.isRequired,
};

export default SearchResults;
