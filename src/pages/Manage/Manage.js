import React from "react";
import useServices from "../../hooks/useServices";

const Manage = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure ?");
    if (confirm) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="container">
      <h1>All services</h1>
      {services.map((service) => (
        <h2 key={service._id}>
          {service.name}
          <button onClick={() => handleDelete(service._id)}>x</button>
        </h2>
      ))}
    </div>
  );
};

export default Manage;
