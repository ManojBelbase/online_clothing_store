import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Shop from "./pages/Shop.jsx";
import Mens from "./pages/Mens.jsx";
import Womens from "./pages/Womens.jsx";
import Kids from "./pages/Kids.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import Login from "./auth/Login.jsx";

import Kids_banner from "./assets/banner_kids.png";
import mens_banner from "./assets/banner_mens.png";
import womens_banner from "./assets/banner_women.png";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route
          path="/mens"
          element={<Mens banner={mens_banner} category={"men"} />}
        />
        <Route
          path="/womens"
          element={<Womens banner={womens_banner} category={"women"} />}
        />
        <Route
          path="/kids"
          element={<Kids banner={Kids_banner} category={"kid"} />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Cart />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
