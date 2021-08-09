import React from "react";

export const PhotoCard = ({ id, onClick }) => {
  return (
    <div className=" photocard animate__animated animate__fadeIn">
      <a href="#" id="bottle" onClick={onClick}>
        <img src={`./assets/photos/${id}.jpg`} alt={id} className="card-img" />
      </a>
    </div>
  );
};
