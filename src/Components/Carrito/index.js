import MyContext from "../../context/index";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import { Text } from "react-bootstrap";
import "./index.css";

export default () => {
  const { data, setData } = useContext(MyContext);
  const { carrito, setCarrito } = useContext(MyContext);
  const { total, setTotal } = useContext(MyContext);

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

  const subPizza = (id) => {
    let item = carrito.find((x) => x.id === id);

    if (item) {
      //clono el carrito para poder actualizarlo
      let clone = [...carrito];

      //busco el indice donde se encuentra el item
      let index = clone.findIndex((x) => x.id === id);

      //actualizo la cantidad del item
      clone[index].cantidad--;

      //actualizo el carrito con el clone
      setCarrito(clone);
    }
    calcularTotal();
  };

  return (
    <>
      <p className="fs-4 fw-semibold">Detalles del pedido:</p>
      <ul className="carrito-container">
        {carrito.map((pizza) => (
          <div className="carrito-info">
            <div className="carrito-info1">
              <Image src={pizza.img} />
              <p>{pizza.name}</p>
              <p>{pizza.price * pizza.cantidad}</p>
            </div>
            <div className="carrito-info2">
              <Button variant="danger" onClick={() => addPizza(pizza.id)}>
                +
              </Button>
              <span>{pizza.cantidad}</span>
              <Button variant="danger" onClick={() => subPizza(pizza.id)}>
                -
              </Button>
            </div>
          </div>
        ))}
      </ul>
      <br />
      <div className="carrito-total">
        <h1>Total:{total}</h1>
        <Button>Ir a pagar</Button>
      </div>
    </>
  );
};
