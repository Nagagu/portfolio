import { Container, Modal, Row, Col } from "react-bootstrap";
import React from "react";
import { Image } from "react-bootstrap";
import MapContainer from "./MapContainer.js";


export const ModalPhoto = ({ setSelectedPhoto, photo }) => {

  return (
    <div>
      <Modal
        show={true}
        onHide={() => setSelectedPhoto(null)}
        dialogClassName="modalphoto"
        // style={customStyles}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="centerTitle">Where do I took this photo?</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row xs={1} md={2}>
              <Col xs={6} md={6}>
                <Image
                  className="detail-image"
                  src={`./assets/photos/${photo.id}.jpg`}
                  width="100%"
                />
              </Col>

              <Col xs={6} md={6}>
                <MapContainer className="map-image" photo={photo} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
