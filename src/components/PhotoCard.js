import React from "react";

export const PhotoCard = ({ id, onClick }) => {
  return (
    <div>
      <a href="#" id="bottle" onClick={onClick}>
        <img src={`./assets/photos/${id}.jpg`} alt={id} className="card-img" />
      </a>
    </div>
  );
};
