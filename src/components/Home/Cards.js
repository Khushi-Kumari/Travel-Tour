// 
import React from "react";

export const Cards = () => {
  return (
    <>
      <div className="display-3 text-center mt-5 heading" >Travell Tour</div>

      <div className=" conatainer px-3 pb-5 w-90vw ">
        <div className="row px-4 align-items-center justify-content-center">
          <div className="col-sm-4 px-md-3 px-sm-2">
            <div className="card mt-3 shadow-sm rounded mx-auto mt-3 "   >
              <img
                src="https://images.unsplash.com/photo-1609947524246-9d473ebe9724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 px-md-3 px-sm-2 mt-4 mt-sm-0">
            <div
              className="card mt-3 shadow-sm rounded mx-auto "
             
            >
              <img
                src="https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 px-md-3 px-sm-2 mt-4 mt-sm-0">
            <div
              className="card mt-3 shadow-sm rounded mx-auto mt-3"
             
            >
              <img
                src="https://images.unsplash.com/photo-1531668773489-559122894014?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
