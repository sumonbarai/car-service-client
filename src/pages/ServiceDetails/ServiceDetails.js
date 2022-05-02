import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const handleCheckOut = () => {
    navigate("/checkout");
  };
  const [service, setService] = useState({});
  useEffect(() => {
    const uri = `http://localhost:5000/service/${serviceId}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

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
