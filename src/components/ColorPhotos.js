import React from "react";
import { PhotosScreen } from "./PhotosScreen";

export const ColorPhotos = () => {
  return (
    <div>
      <h1>Color Collection</h1>
      <hr />
      <PhotosScreen color="true" />
    </div>
  );
};
