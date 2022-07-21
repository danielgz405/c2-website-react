import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/global.css'

import Layout from "./pages/layout/Layout";
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

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmV7Ya0cyFesqiAB8XTxIxJkcg6kiCwOg",
  authDomain: "cyc-acabados-arquitectonicos.firebaseapp.com",
  projectId: "cyc-acabados-arquitectonicos",
  storageBucket: "cyc-acabados-arquitectonicos.appspot.com",
  messagingSenderId: "26227357137",
  appId: "1:26227357137:web:ab2e654ce6ade2a9b4dcf0",
  measurementId: "G-YPXNC5K04M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
