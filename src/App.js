import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom";
import Navbar from "./Components/navbar/index";
import Body from "./Components/body/index";
import Brand from './Components/Brand';
import Context from './context';
import { useState } from 'react';




function App() {
  

  //cargue el archivo de pizzas
  const pizzas = require('./pizzas.json');
  //cargue la data del archivo de pizzas en el context inicial 
  const [data, setData] = useState(pizzas)
  //le paso la data al provider

  const [carrito, setCarrito] = useState([])
  const sharedState = {data, setData, carrito, setCarrito}
  
  


  return (
    //llame al context
    <Context.Provider value={sharedState}>
    <BrowserRouter>
    <Navbar/>
    <Brand/>
    <Body/>
    </BrowserRouter>
    </Context.Provider>
    
  );
}

export default App;
