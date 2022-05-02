import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="service-area" id="services">
      <div className="container">
        <h2 className="text-center text-uppercase m-4">our service</h2>
        <div className="row">
          {services.map((service) => (
            <Service service={service} key={service._id}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
