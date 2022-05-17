import React from 'react'
import { BarLoader} from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'

export default function Index() {
  return (
    <div style={{top: "50%"}}>   <BarLoader text={"Loading..."}
    //  bgColor={"#F0A500"} 
    center={false} width={"100px"} height={"100px"}/></div>
 
  )
}
