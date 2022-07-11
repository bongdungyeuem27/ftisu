import React, { useContext, useState, useEffect } from "react";
import { ChartContext } from "../ChartContextProvider";
import _ from 'lodash';
export default function Item(props) {
  const { listSelected, setListSelected } = useContext(ChartContext);
  const [rerender, setReRender] = useState(false);
  return (
    <span
      className={listSelected.find((c) => c === props.varkey)?"chart-dropdown-item button-active":"chart-dropdown-item"}
      onClick={() => {
        let item = listSelected.find((c) => c === props.varkey);
        let list = listSelected;
        if (!item) {          
            list.push(props.varkey)
        } else {
            _.remove(list, function(a) {
                return a === item;
            });
        }
        setListSelected([...list]);
      }}
    >
      <div className="d-flex">
        {props.icon}
        <span className="ms-2 my-auto">{props.name}</span>
      </div>
    </span>
  );
}
