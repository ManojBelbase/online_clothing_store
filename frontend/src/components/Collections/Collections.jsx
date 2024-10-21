import React, { useEffect } from "react";
import Item from "../item/Item";
// import new_collections from "../../assets/new_collections.js";
import { useState } from "react";
const Collections = () => {
  const [new_collections, setNew_Collections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/new-collection")
      .then((res) => res.json())
      .then((data) => setNew_Collections(data.newcollection || []));
  }, []);
  console.log(new_collections);
  return (
    <div className="px-2 md:px-20 py-4">
      <h1 className="text-center md:text-4xl font-semibold uppercase relative mb-5 md:mb-10">
        New Collections
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 block w-28 border-b-2 md:border-b-4 border-black"></span>
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {new_collections.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Collections;
