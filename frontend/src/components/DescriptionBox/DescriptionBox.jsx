import React from "react";

const DescriptionBox = () => {
  return (
    <div className="px-2 md:px-20 mt-4 md:mt-10">
      <div>
        <div className="flex">
          <p className="px-4 py-2 border">Description</p>
          <p className="px-4 py-2 border">Reviews(122)</p>
        </div>
        <div className="p-4 border">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            dolores nulla voluptates sapiente. Repellendus vero quam sint veniam
            qui tenetur ex, praesentium voluptatibus mollitia voluptate
            temporibus beatae quod voluptas nihil dolor maiores quos deserunt
            aliquam officia enim molestiae explicabo itaque? <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sapiente repellat temporibus eveniet? Optio, nesciunt assumenda?
            Asperiores impedit repellendus ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
