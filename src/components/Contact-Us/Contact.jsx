import React, { useState } from "react";
import img1 from "../../images/carousel2.jpg";
import img2 from "../../images/carousel3.jfif";
import img3 from "../../images/outdoor.jpg";
import { Modal } from "../../Modal.jsx";
import { Modal2 } from "../../Modal2.jsx";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backGroundColor: "grey",
  },
};

export const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* carousel */}

      <div className="">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active   ">
              <img
                src={img1}
                className="d-block w-100"
                alt="..."
                style={{ height: "50vh", width: "auto" }}
              />
              <div className="carousel-caption  d-md-block">
                <h5>Shimla</h5>
                <p>Places where you must visit...!!</p>
              </div>
            </div>
            <div className="carousel-item  ">
              <img
                src={img2}
                className="d-block w-100"
                alt="..."
                style={{ height: "50vh", width: "auto" }}
              />
              <div className="carousel-caption  d-md-block">
                <h5>Manali</h5>
                <p>Places where you must visit...!!</p>
              </div>
            </div>
            <div className="carousel-item  ">
              <img
                src={img3}
                className="d-block w-100"
                alt="..."
                style={{ height: "50vh", width: "auto" }}
              />
              <div className="carousel-caption  d-md-block">
                <h5>Darjeeling</h5>
                <p>Places where you must visit...!!</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* form */}
      <div className="th-container py-5">
        <div className="th-30 fw-bold text-center">Plan Your Next Travel</div>
        <form className="px-md-5">
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="exampleInputPassword16"
            />
          </div>

          <div className="mb-3">
            <label for="address" className="form-label">
              Address
            </label>
            <input
              type="address"
              className="form-control"
              id="exampleInputPassword17"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Destination
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          
        

        {/* 1. when we nest this part ( i.e the below div container) inside form element
         then modal disapprears in few sec ...why??? but when it is rendered outside
          </form> then is does not disapprears....this does not happen with bootstrap modal
          2. navbar has higher focus than the below modal (unlike bootstrap modal)*/}
          

          {/* react modal or Modal.jsx */}
        <div onClick={() => console.log("clicked")}>
          <button onClick={() => setIsOpen(true)} className="btn btn-primary mb-2">Refresh</button>
          <Modal open={isOpen} close={() => setIsOpen(false)}>
            The page has been refreshed...
          </Modal>
        </div>


        {/* bootstrap modal or Modal2.jsx */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#Modal2"
        >
         Submit
        </button>
        <Modal2></Modal2>

        </form>


      </div>
    </div>
  );
};
