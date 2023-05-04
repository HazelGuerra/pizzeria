import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import MyContext from "../../context/index";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default () => {
  const { data, setData } = useContext(MyContext);
  const { carrito, setCarrito } = useContext(MyContext);
  const { total, setTotal } = useContext(MyContext);
  const navigate = useNavigate();

  const goToPizza = (id) => {
    navigate(`/pizza/${id}`);
  };

  const addPizza = (id) => {
    //busco en el carrito si ya existe
    let item = carrito.find((x) => x.id === id);

    //busco en el carrito si no existe, entonces lo creo
    if (!item) {
      const pizza = data.find((x) => x.id === id);
      item = {
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        img: pizza.img,
        cantidad: 1,
      };
      //actualiza el carrito
      setCarrito([...carrito, item]);
    } else {
      //clono el carrito para poder actualizarlo
      let clone = [...carrito];

      //busco el indice donde se encuentra el item
      let index = clone.findIndex((x) => x.id === id);

      //actualizo la cantidad del item
      clone[index].cantidad++;

      //actualizo el carrito con el clone
      setCarrito(clone);
    }
    calcularTotal();
  };

  const calcularTotal = () => {
    let resultado = 0;
    carrito.forEach((item) => (resultado += item.cantidad * item.price));
    setTotal(resultado);
  };

  return (
    <div className="home">
      <div className="banner">
        <h1>¡Pizzeria Mamma Mia!</h1>
        <hr />
        <span>Tenemos las mejores pizzas que podras encontrar</span>
      </div>
      <div className="home-card">
        <Container>
          <Row className="aling-items-center">
            {data ? (
              data.map((pizza) => (
                <Col key={pizza.id} lg={4} md={12} className="my-4">
                  <Card>
                    <Card.Img variant="top" src={pizza.img} />
                    <Card.Body>
                      <Card.Title>{pizza.name}</Card.Title>
                      <hr />
                      <Card.Text>
                        <p class="fw-bold">Ingredientes</p>
                        <ul>
                          {pizza.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                        <hr />

                        <p className="precio d-flex justify-content-center">
                          {pizza.price}
                        </p>
                      </Card.Text>
                      <div className="botones">
                        <Button
                          className="mx-2"
                          text-light
                          variant="info"
                          onClick={() => goToPizza(pizza.id)}
                        >
                          Ver mas👀
                        </Button>
                        <Button
                          className="mx-2"
                          text-light
                          variant="danger"
                          onClick={() => addPizza(pizza.id)}
                        >
                          Añadir🛒
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>loading...</p>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};
