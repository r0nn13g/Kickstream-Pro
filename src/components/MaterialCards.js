/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import '../styles/material-card-styles.css'

const MaterialCards = () => {
  return(
      <div class="material-cards-container">
        <div class="row">
          <div class="col-md-4">
            <div class="card card-2">
              <h2>UI Components</h2>
              <p id="p-material-cards">Robust buttons, inputs, and more!</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-1">
              <h2>Kick</h2>
              <p id="p-material-cards">A Kick live streaming solutions platform.</p>
            </div>
          </div>

          <div class="col-md-4">  
            <div class="card card-3">
              <h2>Custom Widgets</h2>
              <p id="p-material-cards">Learn how to easily customize and integrate </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MaterialCards;