import React from "react";
import img1 from "../../images/mission1.png";

export const Mission = () => {
  return (
    <div>
      <div className="th-container mt-3">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start text-center">
            <h1 className="fw-bold">Our Mission</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              eos dolores in magni, quas reprehenderit ratione voluptatibus
              ipsum est? Corporis, ab labore cupiditate reprehenderit minima
              mollitia magnam repellendus minus quisquam harum iusto, laudantium
              ullam.
            </p>
          </div>
          <div className="col-md-6 p-3  my-auto">
            {" "}
            {/*  my-auto or display-flex align-items-center  */}
            <img
              src={img1}
              alt=""
              className="px-3 px-md-0 px-sm-5"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
