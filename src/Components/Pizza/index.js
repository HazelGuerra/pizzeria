import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../../context/index";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import "./index.css";

export default function () {
  const { data, setData } = useContext(MyContext);
  const { carrito, setCarrito } = useContext(MyContext);
  const { total, setTotal } = useContext(MyContext);
  const navigate = useNavigate();

  const { id } = useParams();

  let pizza = data.find((val) => val.id == id);
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
    <>
      <div className="info">
        <Row>
          <Col className="d-flex justify-content-center my-2">
            <img src={pizza.img}></img>
          </Col>
          <Col className="my-5">
            <h1>{pizza.name}</h1>
            <hr />
            <p>{pizza.desc}</p>
            <p class="fw-bold">Ingredientes</p>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p class="fs-2 fw-semibold">Precio: $ {pizza.price}</p>

            <Button
              className="mx-2"
              variant="danger"
              onClick={() => addPizza(pizza.id)}
            >
              Añadir🛒
            </Button>
            <Button
              className="mx-2"
              variant="info"
              onClick={() => navigate("/")}
            >
              volver al home
            </Button>
          </Col>
        </Row>{" "}
        :
      </div>
    </>
  );
}
