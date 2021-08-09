import { Container, Modal, Row, Col } from "react-bootstrap";
import React from "react";
import { Image } from "react-bootstrap";
import { GoogleApiWrapper } from "google-maps-react";
import MapContainer from "./MapContainer.js";

export const ModalPhoto = ({ setSelectedPhoto, photo }) => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };
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
        <Modal.Body className=" show-grid">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <Image src={`./assets/photos/${photo.id}.jpg`} width="100%" />
              </Col>
              <Col xs={6} md={6}>
                <MapContainer photo={photo} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCeUObCwkss-WxO7R8KBKsZOKkUrI52tjQ",
})(ModalPhoto);
