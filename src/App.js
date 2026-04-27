import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Suppliers from "./pages/Suppliers";
import Tracking from "./pages/Tracking";
import RoutesPage from "./pages/Routes";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Support from "./pages/Support";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;