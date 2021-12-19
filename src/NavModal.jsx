import React, { useState } from "react";
import ReactDOM from "react-dom";

//data dismiss when name && email

export const NavModal = ({ isSigned, setIsSigned }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const checkEmail = (email) => {
    if (!email) {
      return null;
    }

    console.log(email);
    let len = email.toString().length;
    console.log(len);
    let i=0;
    
    for(i;i<len-1;i++)
    {
      if(email[i]=== '@')
      return true
    }

    return false
  };

  function hassigned(e) {
    e.preventDefault();
    console.log(isSigned); //unlike this line ie. this line will run every time when signin is clicked (direct call)
    
    return setTimeout(() => {
      name && checkEmail(email)
        ? (setIsSigned(true), setName(""), setEmail(""))
        : "";
      //check email function will only run when signin is clicked PROVIDED name box is not empty coz
      //unlike abov console , we r not calling it directly.It is called in conditional
      //rendering [ name && check email?]...here 1st the truthfullness of name
      // will be checked ,and only when it it found true then checkEmail will be evaluated
    }, 100);
  }

  //   function hassigned(){
  //  console.log(isSigned)
  //  return setme(true)
  //  }

  return ReactDOM.createPortal(
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
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
                      <label htmlFor="name" className="col-form-label ">
                        Recipient :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                      {!name ? 
                        <div className="form-text" style={{ color: "red" }}>
                          Mandatory field
                        </div> :"" }
                      
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">
                        Email :
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="message-text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div className="form-text" style={{ color: "red" }}>
                        
                        {
                          !checkEmail(email) && email ? "Please include @ at correct position" : null   }
                         { !email ? "Mandatory field" : null }

                        
                      </div>
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
                      onClick={(e) => hassigned(e)}
                      data-bs-dismiss={name && checkEmail(email) ? "modal" : ""}
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
                    onClick={() => {
                      setTimeout(() => {
                        setIsSigned(false);
                      }, 400);
                    }}
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
