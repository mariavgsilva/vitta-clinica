import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Agendamento from "./pages/Agendamento";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/agendamento" element={<Agendamento />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;