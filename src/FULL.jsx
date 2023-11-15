import React from "react";

import Bottom from "./Bottom";
import img from './full.jpeg'
import Card from "./Card";

const FULL = ({course}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div  className="col-xl-12-sm-6">
          <img className="responsive-image" width={1200}
              height={300} src={img} alt="" />
          </div>
          <Bottom/>

          {course.map((item,index) => { if(item.id === "Full stack"){
            return (
                <Card key={index} item={item}/>
            );}
          })}
        </div>
      </div>
    </>
  );
};

export default FULL;
