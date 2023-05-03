import { Routes, Route } from "react-router-dom";
import Home from "../home/index";
import Carrito from "../Carrito/index";
import Pizza from "../Pizza/index";

export default () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="/pizza/:id" element={<Pizza/>} />
        </Routes>
    )
}