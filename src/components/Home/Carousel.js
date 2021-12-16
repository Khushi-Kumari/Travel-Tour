import React from "react";
import img1 from "../../images/carousel2.jpg";
import img2 from "../../images/carousel3.jfif";
import img3 from "../../images/outdoor.jpg";

export const Carousel = () => {
  return (
    <>
      <div className=" px-5 py-5 bg-light "  >
        <div className="row align-items-center">
          <div className="text-center col-sm-4">
            <h1
              className="fw-bold  text-center"
              style={{ overflowY: "hidden" }}
            >
              Snapshots !!
            </h1>
            <div>Spend your holidays at these amazing places...</div>
          </div>
           <div className="col-sm-1 col-lg-2">  </div> 
          <div className="col-sm-7 col-lg-6" >
            <div
              id="carouselExampleCaptions"
              class="carousel slide carousel-fade "
              data-bs-ride="carousel"
              
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
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
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={img1} class="d-block w-100" alt="..." style={{maxHeight:"200px"}} />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Shimla</h5>
                   
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={img2} class="d-block w-100" alt="..." style={{maxHeight:"200px",width:"auto"}}/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Manali</h5>
                   
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={img3} class="d-block w-100" alt="..." style={{maxHeight:"200px",width:"auto"}}/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Darjeeling</h5>
                    
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};
