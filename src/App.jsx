import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AdvisorSettings from "./pages/AdvisorSettings";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/advisor-settings" element={<AdvisorSettings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
