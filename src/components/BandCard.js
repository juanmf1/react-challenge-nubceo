import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import BandInfo from "./BandInfo";
import {useState} from "react";

const BandCard = ({id, country, name, year, genreCode, members}) => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

  return (
      <>
    <Card className="band-card m-2" style={{ width: "14rem" }}>
      <Card.Body>
        <Card.Title style={{ fontWeight: "bolder" }}>{name}</Card.Title>
        <Card.Text>
          <div>{year}</div>
          <div>{country}</div>
        </Card.Text>
        <Button onClick={handleShowModal}className="w-100 details-button" variant="success">
          Details
        </Button>
      </Card.Body>
    </Card>
    <BandInfo name={name} country={country} year={year} id={id} genreCode={genreCode} members={members} show={showModal} onClose={handleCloseModal} id={id}/>
    </>
  );
};

export default BandCard;
