import React from "react";

import Bottom from "./Bottom";
import Card from "./Card";

const All = ({ course }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              width={1200}
              className="img-fluid"
              src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png"
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
