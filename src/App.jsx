import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AdvisorSettings from "./pages/AdvisorSettings";
import Email from "./pages/Email";
import EmailTempletes from "./pages/EmailTempletes";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/advisor-settings" element={<AdvisorSettings />}></Route>
        <Route path="/email" element={<Email />}></Route>
        <Route path="/email-templates" element={<EmailTempletes />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
