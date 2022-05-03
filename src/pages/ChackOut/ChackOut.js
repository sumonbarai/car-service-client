import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useSingleService from "../../hooks/useSingleService";
import "./ChackOut.css";
const ChackOut = () => {
  const { serviceId } = useParams();
  const [service] = useSingleService(serviceId);
  const [user] = useAuthState(auth);

  // order place
  const handleOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user?.email,
      service: service.name,
      serviceId: service._id,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    //  order place
    axios.post("http://localhost:5000/order", order).then((response) => {
      console.log(response);
      event.target.reset();
    });
  };

  return (
    <div className=" w-50 m-auto">
      <h1>this is cheack out page</h1>
      <h4>service name: {service.name}</h4>
      <form onSubmit={handleOrder}>
        <input
          className="w-100 m-1"
          type="text"
          name="name"
          placeholder="Name"
          value={user?.displayName}
          readOnly
          disabled
        />
        <input
          className="w-100 m-1"
          type="email"
          name="email"
          placeholder="Email"
          value={user?.email}
          readOnly
          disabled
        />
        <input
          className="w-100 m-1"
          type="text"
          name="serviceName"
          placeholder="service name"
          value={service.name}
          readOnly
          disabled
        />
        <input
          className="w-100 m-1"
          type="text"
          name="address"
          placeholder="Address"
        />
        <input
          className="w-100 m-1"
          type="text"
          name="phone"
          placeholder="phone"
          required
        />
        <input
          className="w-100 m-1 btn btn-secondary"
          type="submit"
          value="Order Now"
          required
        />
      </form>
    </div>
  );
};

export default ChackOut;
