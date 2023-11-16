import React from "react";

import Bottom from "./Bottom";
import img from "./full.jpeg";
import Card from "./Card";

const FULL = ({ course }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <img
            style={{
              width: "100%",
              boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.5)",
            }}
            className="responsive-image d-sm-none d-md-block"
            src={img}
            alt=""
          />
        </div>
        <Bottom />

        {course.map((item, index) => {
          if (item.id === "Full stack") return <Card key={index} item={item} />;
          return null;
        })}
      </div>
    </>
  );
};

export default FULL;
