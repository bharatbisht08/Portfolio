import React from "react";
import Card from "../common/Card/Card";
import "./JourneyCard.scss";

const JourneyCard = () => {
  return (
    <div className="JourneyCard">
      <div className="container">
        <div className="row">
          <Card />

          <Card />

          <Card />

          <Card />

          <Card />

          <Card />
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
