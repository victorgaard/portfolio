import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import trips from "./util/trips";
import modalOps from "./util/modalOps";
import AvatarNature from "../assets/avatar-nature.jpg";

function Photographer({ Search, setShouldAnimate, setModal }) {
  // Generate a friendly URL path based
  // on image title, location and id
  const prettify = (string) => {
    return string
      .toLowerCase()
      .replaceAll(",", "")
      .replaceAll("'", "")
      .split(" ")
      .join("-");
  };

  const handleBack = () => {
    setModal(false);
    modalOps("close");
  };

  useEffect(() => {
    window.onpopstate = handleBack;
  }, []);

  return (
    <>
      <div className="Header-wrapper">
        <div className="Back-button">
          <Link to="/">
            <button type="button" onClick={setShouldAnimate(false)}>
              Back
            </button>
          </Link>
        </div>

        <div className="App-search-no-animation">
          <img src={Search} alt="search icon" />

          <h1>victor santos landscape photographer</h1>
        </div>
      </div>
      <section className="Photographer">
        <section className="Photographer-wrapper">
          <div>
            <img src={AvatarNature} alt="Avatar" />
          </div>
          <div>
            <h3>Diaries from a wanderer</h3>

            <p className="subtitle">
              A landscape photographer &amp; filmmaker in the making.
            </p>
          </div>
        </section>

        {trips.map((trip) => (
          <section key={trip.id} className="Photographer-div">
            <div className="Photographer-div--header">
              <h4>{trip.country}</h4>
              <p className="subtitle">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_62_38)">
                    <path
                      d="M21 10.5C21 17.5 12 23.5 12 23.5C12 23.5 3 17.5 3 10.5C3 8.11305 3.94821 5.82387 5.63604 4.13604C7.32387 2.44821 9.61305 1.5 12 1.5C14.3869 1.5 16.6761 2.44821 18.364 4.13604C20.0518 5.82387 21 8.11305 21 10.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_38">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                &nbsp;{trip.displayName}&nbsp;&nbsp;&nbsp;&nbsp;{trip.date}
              </p>
              {trip.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="img-grid">
              {trip.photos.map((item) => (
                <Link
                  to={`${prettify(trip.location)}/${item[0]}/${prettify(
                    item[3]
                  )}`}
                  key={item[0]}
                  className={
                    item[2] === "normal" ? "img-wrapper" : "img-wrapper special"
                  }
                  onClick={() => {
                    setModal(true);
                    modalOps("open");
                  }}
                  aria-hidden="true"
                >
                  <img
                    className="zoom"
                    src={item[1]}
                    alt={item[3]}
                    loading="lazy"
                  />
                  <div className="content fade">
                    <span>{item[3]}</span>
                    <span className="location">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_62_38)">
                          <path
                            d="M21 10.5C21 17.5 12 23.5 12 23.5C12 23.5 3 17.5 3 10.5C3 8.11305 3.94821 5.82387 5.63604 4.13604C7.32387 2.44821 9.61305 1.5 12 1.5C14.3869 1.5 16.6761 2.44821 18.364 4.13604C20.0518 5.82387 21 8.11305 21 10.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_62_38">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      {item[4]}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <footer className="Footer">
          <p>Designed &amp; Built by Victor Santos🐧</p>
        </footer>
      </section>
    </>
  );
}

Photographer.propTypes = {
  Search: PropTypes.string.isRequired,
  setShouldAnimate: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default Photographer;
