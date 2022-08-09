import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/servicio/:servicios" element={<Home />} />
        <Route path="/servicio/:servicios/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
