import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyContext from "../../context/index";
import "./index.css";

export default () => {
  const { total, setTotal } = useContext(MyContext);

  return (
    <>
      <Navbar bg="info" variant="danger">
        <Container>
          <Navbar.Brand className="text-white">
            🍕Pizzeria Mamma Mia
          </Navbar.Brand>
          <Nav className="navbar ms-auto">
            <Link className="text-white mx-3 text-decoration-none" to="/">
              Home
            </Link>
            <Link
              className="text-white mx-3 text-decoration-none"
              to="/carrito"
            >
              🛒
            </Link>
            <p>{total}</p>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
