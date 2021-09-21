import React from "react";

export const PhotoCard = ({ photo, onClick }) => {
  return (
    <div className=" photocard animate__animated animate__fadeIn">
      <a href="#" onClick={() => onClick(photo)}>
        <img
          src={`./assets/photos/${photo.id}.jpg`}
          alt={photo.id}
          className="card-img"
        />
      </a>
    </div>
  );
};
