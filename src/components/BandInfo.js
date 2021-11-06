import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
const BandInfo = ({
  id,
  country,
  name,
  year,
  genreCode,
  members,
  show,
  onClose,
}) => {
  const [albums, setAlbums] = useState([]);
  const [genre, setGenre] = useState(null);


  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/albums?bandId=${id}`
      )
      .then((response) => setAlbums(response.data));
    axios
      .get(
        `https://my-json-server.typicode.com/improvein/dev-challenge/genre?code=${genreCode}`
      )
      .then((response) => {
          if (!response.data[0]){
              setGenre("Unknown")
          } else{
              setGenre(response.data[0].name)
          }
      });
  }, []);

  return (
    <Modal className="band-info" centered show={show} onHide={onClose}>
      <Modal.Header className="band-info-header" closeButton>
        <Modal.Title className="band-info-title" style={{ fontWeight: "900" }}>
          {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="band-info-body">
        <div className="m-1">
          <u>Country</u>: {country}
        </div>
        <div className="m-1">
          <u>Year</u>: {year}
        </div>
        <div className="m-1">
          <u>Genre</u>: {genre}
        </div>
        <div className="m-1">
          <u>Members</u>:{" "}
          <ul>
            {members.map((member) => (
              <li className="m-1">{member.name}</li>
            ))}
          </ul>
        </div>
        {albums.length > 0 && (
          <div className="m-1">
            <u>Albums</u>:{" "}
            {albums.map((album) => (
              <div className="d-flex m-1">
                <div>{album.name}</div>
                <div className="ms-auto">{album.year}</div>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="band-info-footer">
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BandInfo;
