// Footer + our clients ( code of thse both sections are here)

import React from "react";
import client1 from "../../images/client1.png";
import client2 from "../../images/client2.png";
import client3 from "../../images/client3.png";

export const Footer = () => {
  return (
    <>
      {/*** Our Clients ***/}
        <div className=" px-5 shadow-sm p-3 my-3 mx-5">
        <h1 className="text-center">Our Clients</h1>
      <div className="row align-items-center ">
        <div className="col-sm-4 py-3  text-center">
          <img src={client1} alt="" className="" style={{ width: "95px" }} />
        </div>
        <div className="col-sm-4 py-3  text-center">
          <img src={client2} alt="" className="" style={{ width: "100px" }} />
        </div>
        <div className="col-sm-4 py-3  text-center">
          <img src={client3} alt="" className="" style={{ width: "90px" }} />
        </div>
      </div>
      </div>


       {/*** Footer ***/}
<footer className=" text-center mt-2 pt-2 bg-light">

<p className="fw-lighter">Copyright &copy; 2015 travetro All rights Reserved</p>
</footer>
      
    </>
  );
};
