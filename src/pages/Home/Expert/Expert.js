import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col-lg-4 col-md-6 col-12 g-4">
      <div className="custom-card border rounded">
        <img src={img} alt="" className="w-100" />
        <h3 className="p-3">{name}</h3>
        <p className="p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat
          consequuntur nesciunt ex, quidem temporibus facere delectus accusamus,
          adipisci provident rem, esse voluptatem! Soluta ipsum harum deserunt
          repudiandae voluptatum tempore!
        </p>
      </div>
    </div>
  );
};

export default Expert;
