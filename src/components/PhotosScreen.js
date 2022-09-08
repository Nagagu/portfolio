import React, { useState } from "react";
import { PhotoCard } from "./PhotoCard";
import { photos } from "../data/photos";
import Masonry from "react-masonry-css";
import { Container} from "react-bootstrap";
import { ModalPhoto } from "./ModalPhoto";

export const PhotosScreen = ({ filterFunction }) => {
  const filteredPhotos = photos.filter(filterFunction);
  const breakpoints = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
  };
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
  };
  return (
    <Container className="masonry">
      <Masonry
        breakpointCols={breakpoints}
        // columnClassName="my-masonry-grid_column animate__animated animate__fadeIn"
        columnClassName="my-masonry-grid_column"
      >
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} onClick={handleOpenModal} />
        ))}
      </Masonry>
      {selectedPhoto !== null ? (
        <ModalPhoto setSelectedPhoto={setSelectedPhoto} photo={selectedPhoto} />
      ) : null}
    </Container>
  );
};
