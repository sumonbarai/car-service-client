import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSingleService from "../../hooks/useSingleService";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const [service] = useSingleService(serviceId);
  const handleCheckOut = () => {
    navigate(`/checkout/${serviceId}`);
  };

  return (
    <div>
      <h1 className="text-center">this is service details page </h1>
      <h2 className="text-center">name : {service.name}</h2>
      <div className="text-center">
        <button onClick={handleCheckOut} className="btn btn-info">
          check out
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
