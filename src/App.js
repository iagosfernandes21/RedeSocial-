//import logo from './logo.svg';
import {Router, Route } from 'react-router-dom';
import './App.css';
import {PaginaPostar } from './compomentes/pages/PaginaPostar/PaginaPostar';
import { PaginaPrincipal } from './compomentes/pages/PaginaPrincipal/PaginaPrincipal';
import history from'./history'

function App() {
  return (
    <Router history= {history}>
      <Route exact path="/">
    <PaginaPrincipal></PaginaPrincipal>
    </Route>     
      <Route exact path="/post">
      <PaginaPostar></PaginaPostar>
      </Route>
      <Route 
        path="/comentarios/:id"
        component={PaginaPostar}>
      </Route>
    </Router>
      );
}

export default App;
