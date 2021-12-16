import React from "react";
import ReactDOM from "react-dom";

const overlay = {
  position: "fixed",
  top: "0",
  left: "0",
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
};

const modal = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

export const Modal = ({ close, open, children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={overlay}>
        <div style={modal}>
          {children}
          <br />
          <button onClick={close}>Close </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
