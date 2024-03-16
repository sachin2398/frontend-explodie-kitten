import React from 'react';

const index = ({ id, card }) => {
  return (
    <div className="card-scene">
      <div id={id} className="card">
        <div className="card-face card-backing">
          <div className="grain-overlay"></div>

          <div className="top-banner">Click to Flip</div>
          <div className="back-main">
            <div className="pipboy">
              <div className="twelve-point-star"></div>
              <img src="/images/cat_cover.png" alt="card cover" />
            </div>
          </div>
        </div>
        <div className="card-face card-front">
          <h1>{card}</h1>
          <div className="main-pane">
            <img className="slugger" src={`/images/${card}.png`} alt="card front" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
