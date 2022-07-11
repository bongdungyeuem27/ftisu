  import React, { useState, useRef, useEffect, useContext } from "react";
  import "./style.css";
  import { ChartContext } from "../ChartContextProvider";
  import Item from "./Item";
  import { listOfChartIndicator } from "../listOfChartIndicator";

  function useOutsideAlerter(ref, toggleRef, setOnShow) {
    const allIndicator = useContext(ChartContext);
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        // console.log('target', event.target)
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
          <div className="d-flex">
            <svg
              className="my-auto"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              data-icon="line-type-line"
              style={{
                fill: "rgb(70, 78, 86)",
                stroke: "rgb(70, 78, 86)",
                strokeWidth: 0,
                verticalAlign: "bottom",
              }}
            >
              <path d="M9.048 19.345c-.263 0-.518-.103-.707-.293l-2.985-2.986L2.71 18.73c-.39.39-1.022.393-1.415.003-.392-.39-.393-1.023-.004-1.414l3.354-3.375c.186-.19.44-.295.707-.295h.003c.265 0 .52.105.707.293l2.625 2.625 2.623-6.52c.125-.312.398-.54.726-.607.332-.07.67.034.908.272l4.28 4.265 3.774-9.352c.207-.512.794-.757 1.302-.553.513.207.76.79.554 1.3l-4.34 10.752c-.127.312-.4.538-.73.606-.327.067-.667-.034-.905-.272L12.6 12.195l-2.624 6.523c-.125.312-.4.54-.728.606-.066.014-.134.02-.2.02" />
            </svg>
            <span className="ms-2 my-auto">Indicators</span>
          </div>
          
          {onShow ? (
            <i className="fa-light fa-angle-up my-auto ms-1"></i>
          ) : (
            <i className="fa-light fa-angle-down my-auto ms-1"></i>
          )}
        </span>

        {onShow && (
          <div className="chart-dropdown-menu" ref={wrapperRef}>
            {listOfChartIndicator?.map((value, index) => {
              // console.log(value)
              return (
                <Item
                  key={index}
                  varkey= {value.key}
                  // onClick={() => {
                  //   setOnShow(false);
                  // }}
                  icon={value.icon}
                  name={value.name}
                ></Item>
              );
            })}
          </div>
        )}
      </div>
    );
  }
