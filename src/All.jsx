import React from "react";
import img from "./all.webp";
import Bottom from "./Bottom";
import Card from "./Card";

const All = ({ course }) => {
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
          <Bottom />
        </div>
        <div className="container">
          <div className="row">
            {course.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default All;
