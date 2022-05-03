import { useEffect, useState } from "react";

const useSingleService = (serviceId) => {
  const [service, setService] = useState({});
  useEffect(() => {
    const uri = `http://localhost:5000/service/${serviceId}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [service];
};
export default useSingleService;
