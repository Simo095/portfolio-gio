import { Carousel, Container } from "react-bootstrap";
import TopNavBar from "./TopNavBar";

const Home = () => {
  return (
    <Container fluid>
      <TopNavBar />
      <Carousel>
        <Carousel.Item>
          <div
            className="text-white d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "95vh"
            }}>
            <div className="text-center">
              <h3>Ciao</h3>
              <h2>Qui metto altro</h2>
            </div>
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>OPPURE PRIMA DESCRIZIONE</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="text-white d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "95vh"
            }}>
            <div className="text-center">
              <h3>Ciao</h3>
              <h2>Qui metto altro</h2>
            </div>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>OPPURE SECONDA DESCRIZIONE</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="text-white d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "95vh"
            }}>
            <div className="text-center">
              <h3>Ciao</h3>
              <h2>Qui metto altro</h2>
            </div>
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>OPPURE TERZA DESCRIZIONE</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>
        FACOLTATIVAMENTE SI PO METTERE ALTRO QUI OPPURE FARE LE ALTRE PAGINE QUI SOTTO COME SE FOSSE TUTTO UN FILONE
        UNICO
      </h1>
    </Container>
  );
};
export default Home;
