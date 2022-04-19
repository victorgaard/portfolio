import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import gallery from "./util/gallery";
import modalOps from "./util/modalOps";
import AvatarNature from "../assets/avatar-nature.jpg";

function Photographer({ Search, setShouldAnimate }) {
  const [modal, setModal] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [titlePhoto, setTitlePhoto] = useState("");
  const [location, setLocation] = useState("");

  const handleBack = () => {
    setModal(false);
    modalOps("close");
  };

  useEffect(() => {
    if (modal) {
      window.onpopstate = handleBack;
    }
  }, [modal]);

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

        <section className="Photographer-div">
          <div className="Photographer-div--header">
            <h4>Ísland</h4>
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
              &nbsp;Iceland&nbsp;&nbsp;&nbsp;&nbsp;August 2021
            </p>
            <p>
              As soon as my wife and I received our second jabs, we instantly
              booked flights to Iceland. We decided to drive across the country
              in a campervan, exploring at our own pace for 2 weeks.
            </p>
            <p>
              We witnessed otherwordly scenes: from erupting volcanoes to
              iceberg beaches, impressive waterfalls, unique wildlife, steep
              mountains, immense fjords, and so much more.
            </p>
            <p>
              2 weeks and 2.702 km later, we finished our long-awaited
              adventure.
            </p>
          </div>
          <div className="img-grid">
            {gallery[0].map((item) => (
              <div
                key={item[0]}
                className={
                  item[2] === "normal" ? "img-wrapper" : "img-wrapper special"
                }
                onClick={() => {
                  setModal(true);
                  setImgSrc(item[1]);
                  setTitlePhoto(item[3]);
                  setLocation(item[4]);
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
              </div>
            ))}
          </div>
        </section>

        <section className="Photographer-div">
          <div className="Photographer-div--header">
            <h4>Sápmi</h4>
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
              &nbsp;Finnish Lapland&nbsp;&nbsp;&nbsp;&nbsp;October 2021
            </p>
            <p>
              One week roadtrip to hunt for the northern lights in the Finnish
              Lapland, inside the arctic circle.
            </p>
            <p>
              There were tons of preparations from our side to make it happen.
              Picking the best location, specific dates, checking all forecasts,
              everything possible to increase the odds of success.
            </p>
            <p>
              It all comes down to luck in the end. If you ever chased the
              northern lights, you know how cruel this factor can be.
            </p>
            <p>
              But in the end, you only need to have luck once. And we did! The
              cosmos smiled at us.
            </p>
          </div>
          <div className="img-grid">
            {gallery[1].map((item) => (
              <div
                key={item[0]}
                className={
                  item[2] === "normal" ? "img-wrapper" : "img-wrapper special"
                }
                onClick={() => {
                  setModal(true);
                  setImgSrc(item[1]);
                  setTitlePhoto(item[3]);
                  setLocation(item[4]);
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
              </div>
            ))}
          </div>
        </section>

        <section className="Photographer-div">
          <h4>Stay tuned</h4>
          <div className="Contact">
            <a
              href="https://www.instagram.com/hunter.graphy/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2.5H7C4.23858 2.5 2 4.73858 2 7.5V17.5C2 20.2614 4.23858 22.5 7 22.5H17C19.7614 22.5 22 20.2614 22 17.5V7.5C22 4.73858 19.7614 2.5 17 2.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0002 11.8701C16.1236 12.7023 15.9815 13.5523 15.594 14.2991C15.2065 15.0459 14.5933 15.6515 13.8418 16.0297C13.0903 16.408 12.2386 16.5397 11.408 16.406C10.5773 16.2723 9.80996 15.8801 9.21503 15.2852C8.62011 14.6903 8.22793 13.9229 8.09426 13.0923C7.9606 12.2616 8.09226 11.41 8.47052 10.6584C8.84878 9.90691 9.45438 9.2938 10.2012 8.9063C10.948 8.5188 11.7979 8.37665 12.6302 8.50006C13.4791 8.62594 14.265 9.02152 14.8719 9.62836C15.4787 10.2352 15.8743 11.0211 16.0002 11.8701Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 7H17.51"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Instagram
            </a>
            <a
              href="https://huntergraphy.picfair.com/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Store
            </a>
          </div>
        </section>

        <footer className="Footer">
          <p>Designed &amp; Built by Victor Santos🐧</p>
        </footer>
        <div
          className={modal ? "modal open" : "modal"}
          aria-hidden="true"
          onClick={() => {
            setModal(false);
            setImgSrc("");
            modalOps("close");
          }}
        >
          <img src={imgSrc} alt={titlePhoto} />
          <div className="infos hidden-flex">
            <p>{titlePhoto}</p>
            <p className="alpha">
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
              &nbsp;{location}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

Photographer.propTypes = {
  Search: PropTypes.string.isRequired,
  setShouldAnimate: PropTypes.func.isRequired,
};

export default Photographer;
