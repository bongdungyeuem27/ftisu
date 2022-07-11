import React, { useState, useRef, useEffect } from "react";
import ListTopCoin from "./ListTopCoin";
import { FIATS } from "../../Redux/constrants/fiatConst";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Index() {
  const fiat = useSelector((state) => state.fiat.fiat);
  const [fiatObject, setFiatObject] = useState(
    FIATS.find((x) => x.key === fiat)
  );
  return (
    <section>

      <ListTopCoin fiatObject={fiatObject}></ListTopCoin>
    </section>
  );
}
