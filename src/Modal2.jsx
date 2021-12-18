import React from "react";
import ReactDOM from "react-dom";

export const Modal2 = () => {
  return ReactDOM.createPortal(
    <div>
      <div
        className="modal fade"
        id="Modal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Final Confirmatiom
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">We'll cantact you shortly!!</div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Dont Submit
              </button> */}
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};
