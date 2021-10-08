import { useState } from "react";
import ClientOnlyPortal from "./clientOnlyPortal";

const bgBlack = {
  background: "rgba(0,0,0,0.5)",
};
export default function Modal(props) {
  return (
    <>
      <ClientOnlyPortal selector="#portal">
        <div
          className="modal d-block"
          style={bgBlack}
          onClick={props.close}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {props.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={props.close}
                ></button>
              </div>
              <div className="modal-body">{props.children}</div>
            </div>
          </div>
        </div>
      </ClientOnlyPortal>
    </>
  );
}
