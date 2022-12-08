import {Container, Row } from "react-bootstrap"
import Jumbo from "./Jumbo";
import FetchArticles from "./FetchArticles";

const Home = () => {
    
    return (
        <>
        <Container fluid className="mt-3">
        <Jumbo />
      </Container>
      <Container>
        <Row className="justify-content-center">
          <FetchArticles />
        </Row>
      </Container>
      </>
     );
}
 
export default Home;