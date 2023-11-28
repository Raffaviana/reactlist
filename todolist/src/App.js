import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Lista from "./pages/Lista";
import Galeria from "./pages/Galeria";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>{/* responsável pela estrutura */}
      
      <Routes>{/* o que vai renderizar, responsável pelas rotas */}
        {/* camimhos */}
        <Route path='/cadastro' element={<Cadastro />}></Route>{/* especifica elemento e componente */}
        <Route path='/' element={<Login />}></Route>
        <Route path='/lista' element={<Lista />}></Route>
        <Route path='/galeria' element={<Galeria />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
