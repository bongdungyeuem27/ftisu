import React, { useEffect, useState, useRef } from "react";
import "./MyModal.css";

function useOutsideAlerter(ref, closeModal) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeModal();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function MyModal(props) {
  const [modalCurrency, setModalCurrency] = useState(false);
  const wrapperRef = useRef(null);
  const [firstTime, setFirstTime] = useState(true);
  const closeModal = () => {
    setModalCurrency(false);
  };
  const openModal = () => {
    setModalCurrency(true);
  };
  useOutsideAlerter(wrapperRef, closeModal);

  useEffect(() => {
    if (firstTime) setFirstTime(false);
    else openModal();
  }, [props.toggle]);
  return (
    modalCurrency && (
      <div className="t8xka3-0 clxZon modalOpened ">
        <div ref={wrapperRef} style={props.style}>
            
          <div className="t8xka3-1 XuJWe has-title">
            <span>
              <div className="sc-1bafwtq-3 ggaVxK">{props.title}</div>
            </span>
            <button className="" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="24px"
                width="24px"
                viewBox="0 0 24 24"
                className="sc-16r8icm-0 jZwKai close-button"
              >
                <path
                  d="M18 6L6 18M18 18L6 6"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {props.render}
        </div>
      </div>
    )
  );
}
