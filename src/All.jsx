import React from "react";
import img from './all.webp'
import Bottom from "./Bottom";
import Card from "./Card";

const All = ({ course }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              style={{width:"100%"}}
              className="img-fluid"
              src={img}
              alt=""
            />
          </div>
          <Bottom />
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {course.map((item,index ) => {
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default All;
