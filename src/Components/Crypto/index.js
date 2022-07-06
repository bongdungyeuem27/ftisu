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
      <div className="hm-solutions__card hover1">
        <span className="hm-solutions__card-body">
          <span className="hm-solutions__card-icon">
            <img className="solution-icon"></img>
          </span>
          <span className="hm-solutions__card-info">
            <h3 className="hm-solutions__card-title">SmartCV</h3>
            <ul className="hm-solutions__card-list">
              <li className="body-text body-text--sm hm-solutions__card-item">
                Truffle-Ganache
              </li>
              <li className="body-text body-text--sm hm-solutions__card-item">
                Solidity Smart Contract
              </li>
              <li className="body-text body-text--sm hm-solutions__card-item">
                ReactJs
              </li>
              <li className="body-text body-text--sm hm-solutions__card-item">
                Blockchain
              </li>
            </ul>
          </span>
        </span>

      </div>
      <ListTopCoin fiatObject={fiatObject}></ListTopCoin>
    </section>
  );
}
