import React, { useState } from "react";
import ReactDOM from "react-dom";


//data dismiss when name && email

export const NavModal = ({ isSigned  , setIsSigned }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


 
    function hassigned(e){  
       e.preventDefault() ;
        console.log(isSigned) ;
       return setTimeout(() => {
       name && email ? setIsSigned(true) : '';
      setName('');
      setEmail('')
        }, 100)
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
                      <label htmlFor="name" className="col-form-label " style={{color : 'red'}} >
                        Recipient : 
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={(event)=>setName(event.target.value)}

                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label"  style={{color : 'red'}} >
                        Email :
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="message-text"
                        name="email"
                        onChange={(e)=>setEmail(e.target.value)}
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
                      onClick={(e)=>hassigned(e)}
                      
                      data-bs-dismiss={ name && email ? "modal": ""} 
                     

                      
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
                    onClick={()=> {setTimeout(() => {
                      setIsSigned(false)
                    }, 400)}  }
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
