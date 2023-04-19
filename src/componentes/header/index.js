import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";


export const Header = () => {

  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito
  
  const toogleMEnu = () =>{
    setMenu(!menu)
  }


  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <box-icon name="coffee-togo"></box-icon>
        </div>
      </Link>

      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>

      <div className="cart" onClick={toogleMEnu}>
         <box-icon name="cart"></box-icon>
         <span className="item_total">{carrito.length}</span>
      </div>
    </header>
  );
};
