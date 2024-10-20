import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import MapChart from "./MapChart";
import MapDialog from "./MapDialog";
import "react-tooltip/dist/react-tooltip.css";

const AreaSelector = () => {
  const [content, setContent] = useState("");
  const [STName, setSTName] = useState("");
  const [show, setShow] = useState(false);

  // useEffect(()=>{
  //     console.log(STName)
  // },[STName])
  const handleClose = () => setShow(false);

  return (
    <React.Fragment>
      <MapDialog show={show} StateName={STName} closeModal={handleClose} />
      <div style={{ backgroundColor: "black" }}>
        <MapChart
          setTooltipContent={setContent}
          setStateName={setSTName}
          setShowDistrict={setShow}
        />
        <div data-tooltip-id="my-tooltip" data-tooltip-content={content}>
          Hover over me
        </div>
        <Tooltip id="my-tooltip" />
      </div>
    </React.Fragment>
  );
};

export default AreaSelector;
