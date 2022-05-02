import React from "react";
import { useForm } from "react-hook-form";

const Addservice = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert("succefully save");
        }
      });
  };

  return (
    <div className="container w-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          className="w-100 m-1 p-1"
          {...register("name", { required: true })}
        />
        <input
          placeholder="Price"
          className="w-100 m-1 p-1"
          {...register("price")}
        />
        <textarea
          placeholder="Description"
          className="w-100 m-1 p-1"
          type="text"
          {...register("description")}
        />
        <input
          placeholder="Img"
          className="w-100 m-1 p-1"
          type="text"
          {...register("img")}
        />
        <input className="w-100 m-1 p-1" type="submit" />
      </form>
    </div>
  );
};

export default Addservice;
