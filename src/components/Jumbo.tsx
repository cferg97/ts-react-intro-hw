import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container } from 'react-bootstrap';

const Jumbo = () => {
    return ( 
        <Jumbotron fluid className="custom-jumbo">
            <Container fluid>
                <h1 className="display-4 text-center">Welcome to Spaceflight News</h1>
            </Container>
        </Jumbotron>
     );
}
 
export default Jumbo;