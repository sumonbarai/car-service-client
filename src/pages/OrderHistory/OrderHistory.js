import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const OrderHistory = () => {
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/order?email=${user?.email}`;
    fetch(url, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user]);

  return (
    <div className="container">
      <h1 className="text-center">Total order{order.length}</h1>
    </div>
  );
};

export default OrderHistory;
