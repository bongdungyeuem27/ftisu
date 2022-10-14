import React from 'react'
import "./caculator.css"

export default function Index() {
  return (
    <div className="">
 <div className="my-container row d-flex justify-content-center w-100 d-inline-flex  rounded bg-theme-light-gray ">


    
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3    my-4 d-flex justify-content-between" >
        
        <div className="mx-1  border rounded-start   ">
            <a className=" px-4  py-3 d-inline-flex font-size-875">
                BTC
            </a>
        </div>
        <div className=" border rounded-end   ">
            <input className="w-100  px-3  py-3 d-inline-flex font-size-875">
                
            </input>
        </div>
        
    </div>


    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1  bg-gradient justify-content-center  my-4 d-flex" >
        

            <i className="fa-solid fa-arrow-right-arrow-left py-2  line-height-15 font-size-15">

            </i>


        
    </div>
   
   


   <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3  my-4 d-flex justify-content-between" >
        
        <div className="mx-1  border rounded-start   ">
            <a className=" px-4  py-3  d-inline-flex font-size-875">
                BTC
            </a>
        </div>
        <div className="border rounded-end  ">
            <input className="form-control w-100  px-3  py-3 font-size-875">
                
            </input>
        </div>
        
    </div>
   

   


    

 </div>
 </div>

  )
}
