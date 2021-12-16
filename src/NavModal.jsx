import React, { useState } from "react";
import ReactDOM from "react-dom";
// if (!global.setTimeOut){
//   global.setTimeOut=function(){};
// }

export const NavModal = ({ isSigned, signed, notSigned }) => {
  return ReactDOM.createPortal(
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {!isSigned ? (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Sign-In
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <form>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label for="name" className="col-form-label">
                        Recipient:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label for="message-text" className="col-form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="message-text"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={signed}
                      data-bs-dismiss="modal"
                    >
                      Sign-in
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <div className="modal-body">
                  You have successfully signed out...
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={notSigned}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
