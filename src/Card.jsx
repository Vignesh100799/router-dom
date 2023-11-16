import React from "react";

const Card = ({ item }) => {
  const date = new Date();
  return (
    <div className=" text-center col-xl-4 col-md-6 col-sm-12">
      <div
        className="card  bg-light m-3 p-3"
        style={{ width: "23rem", height: "450px" }}
      >
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text text-truncate ">{item.description}</p>
          <button className="btn btn-info ">More Info</button>
        </div>
        <p className="card-text text-center border-top">
          <small className="text-body-secondary">{`${date.toDateString()}  . No comments`}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
