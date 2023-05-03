import Context from "../../context";
import { useContext } from "react";




export default () => {
    const { data, setData } = useContext(Context)
    console.log(data)
    return(
        <>
        <div className="carrito-container">
            
            <p>Detalles del pedido</p>
        </div>
        </>
    );
}
