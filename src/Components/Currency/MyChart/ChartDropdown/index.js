import React, { useState, useRef, useEffect } from "react";
import "./style.css";

function useOutsideAlerter(ref, toggleRef, setOnShow) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setOnShow(false);
      }
    }
    if (ref !== undefined) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Bind the event listener

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function Index(props) {
  const [onShow, setOnShow] = useState(false);
  const wrapperRef = useRef(null);
  const toggleRef = useRef(null);
  useOutsideAlerter(wrapperRef, toggleRef, setOnShow);

  return (
    <div className="chartdropdown">
      <span
        className="chart-dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        ref={toggleRef}
        onClick={() => setOnShow(!onShow)}
      >
        {props.list?.at(props.selected)}
        {onShow ? (
          <i className="fa-light fa-angle-up my-auto ms-1"></i>
        ) : (
          <i className="fa-light fa-angle-down my-auto ms-1"></i>
        )}
      </span>

      {onShow && (
        <div className="chart-dropdown-menu" ref={wrapperRef}>
          {props.list?.map((value, index) => {
            return (
              <span key={index} className="chart-dropdown-item" href="#"
              onClick={()=>{
                props.onChange(index);
                setOnShow(false);
              }}
              >
                {value}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
