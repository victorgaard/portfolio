import React, { useState } from "react";
import PropTypes from "prop-types";
import gallery from "./util/gallery";
import scrollOps from "./util/scrollOps";
import AvatarNature from "../assets/avatar-nature.jpg";

function Photographer({ photographer }) {
  const [modal, setModal] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const getImgSrc = (photo) => {
    setImgSrc(photo);
    setModal(true);
  };

  return (
    <section className="Photographer">
      {photographer && (
        <>
          <section className="Photographer-wrapper">
            <div>
              <img src={AvatarNature} alt="Avatar" />
            </div>
            <div>
              <h3>Join me in the quest for beauty</h3>

              <p className="subtitle">
                A landscape photographer &amp; filmmaker in the making.
              </p>
            </div>
          </section>

          <section className="Photographer-div">
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
            <p>Two weeks in a campervan exploring the whole Iceland.</p>
            <div className="img-grid">
              {gallery[0].map((item) => (
                <div
                  key={item[0]}
                  className={
                    item[2] === "normal" ? "img-wrapper" : "img-wrapper special"
                  }
                  onClick={() => {
                    getImgSrc(item[1]);
                    setTitle(item[3]);
                    setLocation(item[4]);
                    scrollOps("open");
                  }}
                  style={{}}
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

          <footer className="Footer">
            <p>Designed &amp; Built by Victor Santos🐧</p>
          </footer>
          <div
            className={modal ? "modal open" : "modal"}
            onClick={() => {
              setModal(false);
              setImgSrc("");
              scrollOps("close");
            }}
            aria-hidden="true"
          >
            <img src={imgSrc} alt="" />
            <div className="infos hidden-flex">
              <p>{title}</p>
              <p>{location}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

Photographer.propTypes = {
  photographer: PropTypes.bool.isRequired,
};

export default Photographer;
