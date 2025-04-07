import About from "./views/About.jsx"
import Home from "./views/Home.jsx"
import Services from "./views/Service.jsx"
import Portfolio from "./views/Portfolio.jsx"
import Contactus from "./views/Contactus.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolis" element={<Portfolio />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
