import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {

  let parallax = {
    backgroundImage: "url('./assets/buttercream.jpg')",
    minHeight: "100vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }

  return (
    <div style={parallax}>
      <NavBar marca="Cupcakes Paraná"/>
      <ItemListContainer greeting="Bienvenido a Cupcakes Paraná"/>
    </div>
  );
}

export default App;



