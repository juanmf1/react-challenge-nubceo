import Container from "react-bootstrap/Container";
import useContext from "../hooks/useContext";
import BandCard from "./BandCard";
import Button from "react-bootstrap/Button";
const Home = ({ setSort }) => {
  const { bands, setToken } = useContext();

  const handleClickYear =() => {
    setSort("year")
  }
 const handleClickCountry = () =>{
     setSort("country")
 }
 const handleClickMembers = () =>{
    setSort("members")
}
const handleClickName= () =>{
    setSort("name")
}
const handleLogOut = () =>{
  setToken(localStorage.removeItem("token"))
}

  return (
    <>
      <Container fluid className="home-container">
        <div className="title-container">
          <h1 className="title m-5">Band-app</h1>
        </div>
        <div className="w-100 d-flex ">
          <Button onClick={handleLogOut} style={{fontSize:"1.2rem", fontWeight: "bolder"}} className="my-3 me-auto" variant="warning"> <i class="bi bi-box-arrow-in-left"></i> Logout</Button>
        </div>
        <div>
            <h3>Sort by:</h3>
            <Button className="m-1" variant="success" onClick={handleClickName}>Name</Button>
            <Button className="m-1" variant="success" onClick={handleClickYear}>Year</Button>
            <Button className="m-1" variant="success" onClick={handleClickCountry}>Country</Button>
            <Button className="m-1" variant="success" onClick={handleClickMembers}>Members</Button>
        </div>

        <div className="bands-container pt-4">
          {bands.map((band) => (
            <BandCard
              name={band.name}
              country={band.country}
              year={band.year}
              id={band.id}
              genreCode={band.genreCode}
              members={band.members}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
