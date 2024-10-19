import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import AddProduct from "./Components/AddProduct/AddProduct";
import ProductList from "./Components/ProductList/ProductList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product-lists" element={<ProductList />} />
      </Route>
    </Routes>
  );
}

export default App;
