import React, { useState } from "react";
import { PhotoCard } from "./PhotoCard";
import { photos } from "../data/photos";
import Masonry from "react-masonry-css";
import { PhotoDetail } from "./PhotoDetail";
import { Container, Image, Modal } from "react-bootstrap";
import { ModalPhoto } from "./ModalPhoto";

export const PhotosScreen = ({ filterFunction }) => {
  const filteredPhotos = photos.filter(filterFunction);
  const breakpoints = {
    default: 5,
    1100: 2,
    700: 1,
  };
  const [photo, setSelectedPhoto] = useState(null);

  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
  };
  return (
    <Container className="masonry">
      <Masonry
        breakpointCols={breakpoints}
        columnClassName="my-masonry-grid_column animate__animated animate__fadeIn"
      >
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            {...photo}
            onClick={() => {
              handleOpenModal(photo);
            }}
          />
        ))}
      </Masonry>
      {photo !== null ? (
        <ModalPhoto setSelectedPhoto={setSelectedPhoto} photo={photo} />
      ) : null}
    </Container>
  );
};
