import React from "react";
import p from "../../images/service1.png";
import q from "../../images/service2.png";
export const Service = () => {
  return (
    <>
      {/* man with camera */}
      <div className="th-container mt-3 ">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start text-center">
            <h1 className="fw-bold">Our Services</h1>
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
              src={p}
              alt=""
              className="px-3 px-md-0 px-sm-5 img-fluid"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* blue background */}
      <div className="th-container mt-4  ">
        <div className="row align-items-center bg-primary ">
          <div className="col-md-3 pt-5 px-5 pb-md-2  text-center text-white  service ">
          <div><i className="fa fa-suitcase fa-3x" aria-hidden="true"></i></div>
            Tourism
            <hr />
          </div>
          <div className="col-md-3 pt-5 px-5 pb-md-2 text-center text-white service ">
           <div> <i className="fa fa-cutlery fa-3x" aria-hidden="true"></i>  </div>
            Food
            <hr />
          </div>
          <div className="col-md-3 pt-5 px-5 pb-md-2 text-center text-white service ">
            <div><i className="fa fa-plane fa-3x" aria-hidden="true"></i></div>
            Transport
            <hr />
          </div>
          <div className="col-md-3 pt-5 px-5 pb-md-2 pb-3 text-center text-white  service">
            <div><i className="fa fa-futbol-o fa-3x" aria-hidden="true"></i></div>
            Enjoyment
            <hr />
          </div>
        </div>
      </div>

      {/* man watching hill */}
      <div className="th-container mt-3 ">
        <div className="row align-items-center">
          <div className="col-md-6 p-3  my-auto">
            {" "}
            {/*  my-auto or display-flex align-items-center  */}
            <img
              src={q}
              alt=""
              className="px-3 px-md-0 px-sm-5 img-fluid"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="col-md-6  text-center">
            <h1 className="fw-bold">Our Priorities</h1>
            <p className="text-md-start text-lg-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              eos dolores in magni, quas reprehenderit ratione voluptatibus
              ipsum est? Corporis, ab labore cupiditate reprehenderit minima
              mollitia magnam repellendus minus quisquam harum iusto, laudantium
              ullam.
            </p>
            <div className="row align-items-center justify-content-center pb-3 ">
              <div className="col-12 mb-1 p-5 p-md-4 p-lg-4 mx-5 shadow rounded-circle w-75">
                Claim Refund
              </div>
              <div className="col-12 mb-1 p-5 p-md-4 p-lg-4 mx-5 shadow rounded-circle w-75">
                Transportation
              </div>
              <div className="col-12 mb-1 p-5 p-md-4 p-lg-4 mx-5 shadow rounded-circle w-75">
                Fooding
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* background attachment fixed .th-overlay */}
   <div className="th-overlay">
   <div className="th-container ">
   
   <div className="th-50">Book Resorts</div>
   <div className="th-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ullam dolorem aspernatur ad veritatis fugiat, rerum earum accusamus porro numquam.</div>
   <button type="button" className="btn btn-outline-light th-20 ">+91-9955987654</button>
   
   </div>
   </div>
    </>
  );
};
