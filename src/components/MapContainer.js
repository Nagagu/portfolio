import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export const MapContainer = (props) => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };
  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: props.photo.lat, lng: props.photo.long }}
    >
      <Marker position={{ lat: props.photo.lat, lng: props.photo.long }} />
    </Map>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyBrpe5Br7ZY9HMhe-bxwEtqi0-lfFNGyK4", 
})(MapContainer);
