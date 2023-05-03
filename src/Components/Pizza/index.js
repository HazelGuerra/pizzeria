import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from 'react'
import Context from '../../context/index'
import { useNavigate } from 'react-router-dom'
import {Row, Col, Button} from "react-bootstrap"



export default function () {

    //const [pizza, setPizza] = useState({})
    const {data, setData} = useContext(Context)
    
 
    const { id } = useParams()

    let pizza = data.find(val => val.id == id)
    console.log(pizza)
   

    return (
        <>
         <Row>
            <Col className="d-flex justify-content-center my-2"><img src={pizza.img}></img></Col>
            <Col className="my-5">
            <h1>{pizza.name}</h1>

            
             <p>{pizza.desc}</p>
             <p>{pizza.price}</p>
             

         <Button variant="primary" >volver al home</Button>
     </Col>
 </Row> :
        </>
    )
}