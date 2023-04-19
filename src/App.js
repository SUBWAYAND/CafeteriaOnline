import React  from "react";
import { Header } from "./componentes/header";
import  "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import  {Paginas}  from "./componentes/Paginas";
import { DataProvaider } from "./context/Dataprovider";
import {Carrito} from "./componentes/Carrito";

function App() {
  return (
    <DataProvaider> 
    <div className="App">
      <Router>
      <Header/>
      <Paginas/>
      <Carrito/>
      </Router>
    </div>
    </DataProvaider>
  );
}

export default App;
