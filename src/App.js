import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { useState } from 'react';
import {datos} from './db/asyncmock.js'

function App() {

  const [state, setState] = useState(0);

  let parallax = {
    backgroundImage: "url('./assets/buttercream.jpg')",
    minHeight: "100vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }

  const handleCallBack = (event) =>{
    setState(event)

  }
  
  return (
    <div style={parallax}>
      <NavBar marca="Cupcakes Paraná" cartCount={state}/>
      <ItemListContainer greeting="Bienvenido a Cupcakes Paraná" onAdd={handleCallBack}/>
    </div>
  );
}

export default App;



