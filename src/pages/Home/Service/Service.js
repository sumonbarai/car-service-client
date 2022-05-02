import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, price, description, img } = service;
  const navigate = useNavigate();
  const handleServiceDetails = (id) => {
    navigate(`/serviceDetails/${id}`);
  };

  return (
    <div className="col-lg-4 col-md-6 col-12 g-3">
      <div className="custom-card border rounded p-3">
        <img src={img} alt="" className="w-100" />
        <h3 className="mt-4">{name}</h3>
        <p>Price: {price}</p>
        <p>{description}</p>
        <button
          onClick={() => handleServiceDetails(_id)}
          className="btn btn-secondary text-uppercase"
        >
          more info
        </button>
      </div>
    </div>
  );
};

export default Service;
