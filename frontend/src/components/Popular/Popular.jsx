import React, { useEffect, useState } from "react";
import Item from "../item/Item";
const Popular = () => {
  const [popularInWomen, setPopularInWomen] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/popular_in_women")
      .then((res) => res.json())
      .then((data) => setPopularInWomen(data?.popularinwomen));
  }, []);
  return (
    <div className="px-2 md:px-20 py-4">
      <h1 className="text-center md:text-4xl font-semibold uppercase relative mb-5 md:mb-10">
        Popular in women
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 block w-28 border-b-2 md:border-b-4 border-black"></span>
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {popularInWomen.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
