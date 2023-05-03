import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from "react";
import MyContext from "../../context/index";
import { useNavigate } from 'react-router-dom'
export default () =>{

    const { data, setData } = useContext(MyContext)
    const { carrito, setCarrito} = useContext(MyContext)
    const navigate = useNavigate();


    const goToPizza = (id) =>{
        navigate(`/pizza/${id}`)
    } 


const addPizza = (id) =>{
    console.log("addPizza")

}



    return(
        <>
        
        <div className="home-class">
    <Container>
        <Row className="aling-items-center">
            {data ? data.map(pizza =>
            <Col lg={4} md={12} className= 'my-4'>
                <Card>
                    <Card.Img variant="top" src={pizza.img} />
                    <Card.Body>
                        <Card.Title>{pizza.name}</Card.Title>
                        <Card.Text>
                            <p>{pizza.ingredients}</p>
                            <p>{pizza.price}</p>
                        </Card.Text>
                            <Button variant="dark" onClick={() => goToPizza(pizza.id)} >ver mas</Button>
                            <Button variant="dark" onClick={() => addPizza(pizza.id)}>Añadir</Button>
                    </Card.Body>
                </Card>
            </Col>
            ):<p>loading...</p>}
        </Row>
    </Container>

    
</div>
        </>

    );
}