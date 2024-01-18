import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import TopNavBar from "./TopNavBar";

const IAm = () => {
  const [isHoveredWork, setIsHoveredWork] = useState(false);
  const [isHoveredFoto, setIsHoveredFoto] = useState(false);
  return (
    <Container fluid>
      <TopNavBar />
      <Container className="my-5 d-flex justify-content-center gap-4">
        <h2
          onMouseEnter={e => {
            setIsHoveredFoto(true);
          }}
          onMouseLeave={e => {
            setIsHoveredFoto(false);
          }}>
          FOTO
        </h2>
        <Image
          id="imm"
          className=""
          style={{
            transform: `translateX(${isHoveredWork ? -100 : isHoveredFoto ? 100 : 0}px)`,
            transition: `transform 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)`
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&usqp=CAU"
        />
        <h2
          onMouseEnter={e => {
            setIsHoveredWork(true);
          }}
          onMouseLeave={e => {
            setIsHoveredWork(false);
          }}>
          WORK
        </h2>
      </Container>
      <Container>
        <h3>
          Presentazione descrizione o che pensi sia utile, ovviamente se vai sopra lavori e clicchi si mostrano i lavori
          con descrizione e viceversa, ma la pagina viene caricata con sotto una descrizione di gio. Inoltre in mezzo
          mettiamo la sua faccia e animiamo un po la questione quando ci vai sopra o da foto o da work.
        </h3>
      </Container>
    </Container>
  );
};
export default IAm;
