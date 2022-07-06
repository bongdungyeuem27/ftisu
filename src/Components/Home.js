import React, {useState} from "react";
import function1 from "./images/function1.png";
import function2 from "./images/function2.png";
import function3 from "./images/function3.png";
import function4 from "./images/function4.png";
import function5 from "./images/function5.png";
import function6 from "./images/function6.png";
import "./Home.css";
import Pdf from "react-to-pdf";
import { Link } from "react-router-dom";
import Started from "./Started";
import ListTopCoin from "./Crypto/ListTopCoin";
import { useSelector } from "react-redux";
import { FIATS } from "../Redux/constrants/fiatConst";
import Solution from "./Solution";
import Project from "./Project";

const ref = React.createRef();

export default function Home() {
  const fiat = useSelector((state) => state.fiat.fiat);
  const [fiatObject, setFiatObject] = useState(
    FIATS.find((x) => x.key === fiat)
  );
  return (
    <>
      <section id="main" className="" ref={ref}> 
        {/* ======= Clients Section ======= */}
        <Started></Started>
        <Solution></Solution>
        <Project></Project>

        <ListTopCoin fiatObject={fiatObject}></ListTopCoin>
      </section>

      {/* End #main */}

      {/* <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf> */}

      {/* <button onClick={_exportPdf}>Export to PDF2</button> */}
    </>
  );
}
