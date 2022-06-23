import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import DiscoverPage from "./pages/DiscoverPage";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1>Navbar</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/discover">Discover</NavLink>
      </div>
      <Routes>
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
