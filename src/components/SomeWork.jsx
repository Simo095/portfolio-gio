import { Container } from "react-bootstrap";
import TopNavBar from "./TopNavBar";

const SomeWork = () => {
  const foto = ["img1", "img2", "img3", "img4", "img1", "img2", "img3", "img4", "img1", "img2", "img3", "img4"];
  return (
    <Container>
      <TopNavBar />
      <Container className="d-flex flex-wrap gap-3">
        {foto.map(ft => (
          <Container
            className="border border-2 rounded"
            style={{ width: "300px", height: "260px" }}>
            <h3>{ft}</h3>
            <p>titolo immagine</p>
          </Container>
        ))}
      </Container>
    </Container>
  );
};
export default SomeWork;
