// 
import React from "react";
import img1 from "../../images/background3.jfif"
import img2 from "../../images/background6.jpg"
import img3 from "../../images/background7.jpg"


export const Cards = () => {
  return (
    <>
      <div className="display-3 text-center mt-5 heading" >Destinations</div>

      <div className=" conatainer px-3 pb-5 w-90vw ">
        <div className="row px-4  justify-content-center">
          <div className="col-sm-4 px-md-3 px-sm-2">
            <div className="card mt-3 shadow-sm rounded mx-auto mt-3 "   >
              <img
                src={img1}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Shimla</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur a Voluptatum exercitationem iusto eaque rem ipsum animi corrupti consequatur cupiditate odio soluta?
                </p>
                {/* <a href="#" className="btn btn-primary btn-sm">
                  Visit
                </a> */}
              </div>
            </div>
          </div>

          <div className="col-sm-4 px-md-3 px-sm-2 mt-4 mt-sm-0">
            <div
              className="card mt-3 shadow-sm rounded mx-auto "
             
            >
              <img
                src={img2}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Kerela</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ea doloribus eligendi beatae magni. Quaerat eius nemo provident quos maiores!
                </p>
                {/* <a href="#" className="btn btn-primary btn-sm">
                 Visit
                </a> */}
              </div>
            </div>
          </div>

          <div className="col-sm-4 px-md-3 px-sm-2 mt-4 mt-sm-0">
            <div
              className="card mt-3 shadow-sm rounded mx-auto mt-3"
             
            >
              <img
                src={img3}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Goa</h5>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit saepe aspernatur quia at. Delectus a, omnis ipsum libero quos earum  ghurty drt jiut hay.

                </p>
                {/* <a href="#" className="btn btn-primary btn-sm">
                  Visit
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
