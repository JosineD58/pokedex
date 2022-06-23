import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PokemonDiscoveryPage from "./pages/PokemonDiscoveryPage";
import PokemonList from "./pages/PokemonList";
import PokemonDetailPage from "./pages/PokemonDetailPage";

function App() {
  return (
    <div className="App container">
      <nav className="navbar">
        <div className="container-fluid">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/list">List</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/list" element={<PokemonList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:pokemon_name" element={<PokemonDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
