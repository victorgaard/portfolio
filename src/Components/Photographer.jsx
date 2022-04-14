import React, { useState } from "react";
import PropTypes from "prop-types";
import gallery from "./util/gallery";
import modalOps from "./util/modalOps";
import AvatarNature from "../assets/avatar-nature.jpg";

function Photographer({ photographer }) {
  const [modal, setModal] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

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
                booked flights to Iceland. We decided to drive across the
                country in a campervan, exploring at our own pace for 2 weeks.
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
                    setTitle(item[3]);
                    setLocation(item[4]);
                    modalOps("open");
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

          <section className="Photographer-div">
            <h4>Get in touch</h4>
            <p>Don&apos;t be a stranger. Let&apos;s connect:</p>
            <div className="Contact">
              <a
                href="https://github.com/victorgaard"
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
                  <g clipPath="url(#clip0_42_15)">
                    <path
                      d="M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999M9 18.9999C4 20.4999 4 16.4999 2 15.9999L9 18.9999Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_15">
                      <rect width="22" height="22" />
                    </clipPath>
                  </defs>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/victor-ferreira-santos/"
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
                    d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 9H2V21H6V9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:hey@victorsantos.work"
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
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Email
              </a>
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
              modalOps("close");
            }}
            aria-hidden="true"
          >
            <img src={imgSrc} alt={title} />
            <div className="infos hidden-flex">
              <p>{title}</p>
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
        </>
      )}
    </section>
  );
}

Photographer.propTypes = {
  photographer: PropTypes.bool.isRequired,
};

export default Photographer;
