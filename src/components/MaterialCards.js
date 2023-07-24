/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import '../styles/material-card-styles.css'

const MaterialCards = () => {
  return(
      <div className="material-cards-container">
        <div className="row">
          <div className="col-md-4">
            <div className="card card-1">
              <h2>Kick</h2>
              <p id="p-material-cards">A Kick live streaming solutions platform.</p>
            </div>
          </div>
          <div className="col-md-4">  
            <div className="card card-3">
              <h2>Custom Widgets</h2>
              <p id="p-material-cards">Learn how to easily customize and integrate </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MaterialCards;