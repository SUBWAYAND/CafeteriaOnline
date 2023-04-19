import React, { useContext } from "react";
import image from "../../image/1.jpg";
import { DataContext } from "../../context/Dataprovider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  const reducir = id =>{
    carrito.forEach(item =>{  
      if(item.id == id){
        item.id === 1 ? item.cantidad = 1: item.cantidad -=1;
         }
         setCarrito([...carrito])
      })
  }

  const aumentar = id =>{
    carrito.forEach(item =>{  
      if(item.id == id){
        item.cantidad +=1;
      }
         setCarrito([...carrito])
      })
  }

  const removeProducto = id =>{
    if(window.confirm("¿Deseas cancelar este producto?")){
      carrito.forEach((item, index) =>{ 
        if(item.id === id){
          item.cantidad = 1;
          carrito.splice(index, 1)
        }  
      })
  setCarrito([...carrito])
  }

   }


  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito__close" onClick={tooglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Comprando</h2>

        <div className="carrito_center">
          { 
          carrito.map((producto)=>(     
            <div className="carrito__item" key={producto.id}>
              <img className="vaso__carrito" src={producto.image} alt="hola" />
              <div>
                <h3>{producto.title}</h3>
                <p className="price">${producto.price}</p>
              </div>
              <div>
                <box-icon name="up-arrow" type="solid" onClick={() => aumentar(producto.id)}></box-icon>
                <p className="cantidad">{producto.cantidad}</p>
                <box-icon name="down-arrow" type="solid" onClick={() => reducir(producto.id)}></box-icon>
              </div>
              <div className="remove__item" onClick={() => removeProducto(producto.id)}>
                <box-icon name="trash"></box-icon>
              </div>
            </div>        
          )) 
}
        </div>

        <div>
          <div className="carrito__footer">
            <h3>Total a Pagar: {total}</h3>
            <button className="btn">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
