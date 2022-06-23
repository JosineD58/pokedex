import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return <div className="App"></div>;
  <Routes>
    <Route path="/discover" element={<DiscoverPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/" element={<HomePage />} />
  </Routes>;
}

export default App;
