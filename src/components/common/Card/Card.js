import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 Cards">
      <div className="card shadow">
        <img
          src="https://drive.google.com/uc?export=view&id=1aj_vT5zjJlkdEQ_VcCsdnvpVBi-Fjwyb"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h2 className="card-title">Card One</h2>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-body card-p">
          <div className="row">
            <div className="col col-xs-4 ">
              <i className="far fa-comments"></i> 456
            </div>
            <div className="col col-xs-4 ">
              <i className="far fa-heart icon"></i> 2.4k
            </div>
            <div className="col col-xs-4">
              <i className="fas fa-share icon"></i> 99
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
