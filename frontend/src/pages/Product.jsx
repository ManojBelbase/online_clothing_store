import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../components/BreadCrum/BreadCrum";
import ProductDetail from "../components/ProductDetails/ProductDetail";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  // Ensure that productId is valid and find the product
  const product = all_products?.find((e) => e.id === Number(productId));

  // If product is not found, render a fallback or null
  if (!product) {
    return <div>Product not found</div>; // Handle error or loading state
  }

  return (
    <div>
      {/* Pass the product to BreadCrum only if it exists */}
      <BreadCrum product={product} />
      <ProductDetail product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
