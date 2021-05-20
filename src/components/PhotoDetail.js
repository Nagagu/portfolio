import React from "react";

export const PhotoDetail = (photoId, onClick) => {
  return (
    <a href="#" id="bottle" onclick={onClick}>
      <div>
        <img
          src={`../assets/photos/${photoId}.jpg`}
          alt={photoId}
          className="img-thumbnail"
        />
      </div>
    </a>
  );
};
