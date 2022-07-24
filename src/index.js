import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/global.css'

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Service from "./pages/Service";
import Store from "./pages/Store";
import Admin from "./pages/Admin";
import Error404 from "./pages/Error404";
import ScrollToTop from "./common/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />} />
            <Route path="service/:id" element={<Service />} />
            <Route path="store" element={<Store />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
