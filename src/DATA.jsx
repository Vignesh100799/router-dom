import React from "react";

import Bottom from "./Bottom";
import dataimg from "./data.jpeg";
import Card from "./Card";

const DATA = ({ course }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <img
              className="responsive-image"
              style={{width:"100%"}}
              height={300}
              src={dataimg}
              alt=""
            />
          </div>
          <Bottom />
          {course.map((item,index) => {
            if (item.id === "Data Science") 
              return <Card key={index} item={item}/>
            return null; 
            
          })}
        </div>
      </div>
    </>
  );
};

export default DATA;
