import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Pricing from "./pages/Pricing";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="bg"><Home /></div>} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
