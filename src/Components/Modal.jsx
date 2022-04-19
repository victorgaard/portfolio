import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import trips from "./util/trips";
import modalOps from "./util/modalOps";

function Modal({ modal, setModal }) {
  const [imgSrc, setImgSrc] = useState("");
  const [titlePhoto, setTitlePhoto] = useState("");
  const [location, setLocation] = useState("");

  const { country } = useParams();
  const { id } = useParams();

  const getPicture = () => {
    const countryChecker = trips.find((trip) => {
      return trip.location.toLowerCase() === country;
    });

    const idChecker = countryChecker.photos.find((photo) => {
      return photo[0].toString() === id;
    });

    setImgSrc(idChecker[1]);
    setLocation(idChecker[4]);
    setTitlePhoto(idChecker[3]);
  };

  useEffect(() => {
    getPicture();
  }, []);

  return (
    <div
      className={modal ? "modal open" : "modal"}
      aria-hidden="true"
      onClick={() => {
        setModal(false);
        setImgSrc("");
        setTitlePhoto("");
        setLocation("");
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
  );
}

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default Modal;
