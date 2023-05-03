import { Container,Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


export default () => {
    return(
        <>
        <Navbar bg="info" variant="danger">
            <Container>
                <Navbar.Brand className="text-white ms-3 position-absolute top-0 end-0">Pizzeria</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="text-white ms-3 text-decoration-none" to="/">Home</Link>
                    <Link className="text-white ms-3 text-decoration-none" to="/carrito">Carrito</Link>
                </Nav>

            </Container>
        </Navbar>
        </>
    );
}















