import React, { useEffect, useState, useRef } from "react";
import ChartDropdown from "../Currency/MyChart/ChartDropdown";
import MyDropdown from "../MyDropdown/";
import Solution from "../Solution"

export default function Index() {
  const ref = useRef();

  useEffect(() => {
    // console.log("ref", ref)
  }, [])
  return (
    // <section className="my-container">

    //   <button
    //   className="btn btn-test"
    //     ref={ref}
    //     // onMouseEnter={() => {
    //     //   a.current = true;
    //     //   // console.log("enter");
    //     // }}
    //     // onMouseLeave={() => {
    //     //   a.current = false;
    //     //   // console.log("leave");
    //     // }}
    //   >
             
    //     Hover over me!
    //   </button>
    //   {/* {console.log("ref", ref.current)} */}
    //   {<MyDropdown elementref={ref} ></MyDropdown>}
     
    // {console.log("parent render")}

   
      
    // </section>
    <Solution></Solution>
  );
}
