// src/pages/SiteBanner.js
import React from 'react';
import { withRouter } from 'react-router-dom';

const SiteBanner = () => {
  const siteName = "FileUpload";
  const siteMotto = "Smooth File Uploads web app.";

  return (
    <div>
      <section className="hero is-link">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="is-size-3 has-text-weight-bold has-text-danger has-text-centered">{siteName}</h1>
          <h2 className="is-size-5 has-text-weight-bold has-text-centered">{siteMotto}</h2>
        </div>
      </div>
      </section>
    </div>
  )
}

export default withRouter(SiteBanner);