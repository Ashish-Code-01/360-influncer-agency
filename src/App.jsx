import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./views/About.jsx"
import Home from "./views/Home.jsx"
import Services from "./views/Service.jsx"
import Portfolio from "./views/Portfolio.jsx"
import Contactus from "./views/Contactus.jsx"
import Platforms from "./views/platforms.jsx"
import ForCreators from "./views/Creators.jsx"
import Blog from "./views/Blog.jsx"
import Testomonials from "./views/Testonimals.jsx"
import Industries from "./views/industries.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolis" element={<Portfolio />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/ForCreators" element={<ForCreators />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Testomonials" element={<Testomonials />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
