import React from "react";
import PropTypes from "prop-types";
import AvatarNature from "../assets/avatar-nature.jpg";

function Photographer({ photographer }) {
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
          <section className="Iframe">
            <script src="https://snapwidget.com/js/snapwidget.js" />
            <iframe
              src="https://snapwidget.com/embed/992098"
              className="snapwidget-widget"
              allowtransparency="true"
              frameBorder="0"
              scrolling="no"
              style={{
                marginTop: "48px",
                border: "none",
                overflow: "hidden",
                width: "100%",
                height: "2260px",
              }}
              title="Instagram feed"
            />
          </section>
          <footer className="Footer">
            <p>Designed &amp; Built by Victor Santos🐧</p>
          </footer>
        </>
      )}
    </section>
  );
}

Photographer.propTypes = {
  photographer: PropTypes.bool.isRequired,
};

export default Photographer;
