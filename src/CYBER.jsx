import React from "react";

import Bottom from "./Bottom";
import Card from "./Card";

const CYBER = ({ course }) => {
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
            src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp"
            alt=""
          />
        </div>
        <Bottom />
        {course.map((item, index) => {
          if (item.id === "Cyber security")
            return <Card key={index} item={item} />;
          return null;
        })}
      </div>
    </>
  );
};

export default CYBER;
