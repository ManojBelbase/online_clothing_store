import { data } from "@remix-run/router";
import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  //   // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  // handle submit
  const handleSubmit = async () => {
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);

      await fetch("http://localhost:4000/api/add-product", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success ? alert("product added") : alert("failed");
        });
    }
  };

  return (
    <div className="bg-gray-100 md:w-[60%] mx-2">
      <div className="px-4 py-2">
        <span className="text-gray-600">Product Title</span>
        <div className="border h-9 mt-1">
          <input
            type="text"
            name="name"
            value={productDetails.name}
            onChange={handleInputChange}
            placeholder="Product name"
            className="h-full w-full outline-none px-2 text-sm"
          />
        </div>
      </div>
      <div className="flex">
        <div className="px-4 py-2">
          <span className="text-gray-600">Original Price</span>
          <div className="border h-9 mt-1">
            <input
              type="text"
              value={productDetails.old_price}
              onChange={handleInputChange}
              name="old_price"
              placeholder="Original price"
              className="h-full w-full outline-none px-2 text-sm"
            />
          </div>
        </div>
        <div className="px-4 py-2">
          <span className="text-gray-600">Offered Price</span>
          <div className="border h-9 mt-1">
            <input
              type="text"
              name="new_price"
              value={productDetails.new_price}
              onChange={handleInputChange}
              placeholder="Offered price"
              className="h-full w-full outline-none px-2 text-sm"
            />
          </div>
        </div>
      </div>
      {/* product category */}
      <div className="px-4 py-2 flex flex-col">
        <span className="text-gray-600">Product Category</span>
        <select
          className="h-9 px-2 mt-1 text-gray-600"
          name="category"
          value={productDetails.category}
          onChange={handleInputChange}
        >
          <option value="">Select Category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      <div className="px-4 py-2">
        <span className="text-gray-600">Product Image</span>
        <div className="h-40 w-40 mb-2 flex items-center border justify-center bg-gray-200 rounded-md">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="text-gray-500">
              <BsCloudUpload className="text-6xl text-gray-400" />
              Upload
            </div>
          )}
        </div>
        <div>
          <input
            type="file"
            name="image"
            value={productDetails.image}
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="px-4 py-2">
        <button
          onClick={() => handleSubmit()}
          className="px-4 py-1 bg-[#ffb929] text-white rounded-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
