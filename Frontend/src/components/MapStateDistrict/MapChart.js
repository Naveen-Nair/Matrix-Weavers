import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

import india from './topojsons/india.json';

const MapChart = ({ setTooltipContent, setStateName, setShowDistrict }) => {
  return (
    <>
      <ComposableMap projection="geoMercator" width={150} height={150} projectionConfig={{ scale: 220 }}>
        <ZoomableGroup zoom={1} center={[80,22]}>
          <Geographies geography={india}>
            {({ geographies }) =>
              geographies.map(geo => {
                const { ST_NM } = geo.properties;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(`${ST_NM}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent(""); // Clear tooltip content
                    }}
                    onClick={() => {
                      setStateName(`${ST_NM}`);
                      setShowDistrict(true); // Show district dialog
                    }}
                    data-tooltip-id="my-tooltip"  // Tooltip ID matches the Tooltip component
                    data-tooltip-content={ST_NM}  // Tooltip content set here
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none"
                      },
                      hover: {
                        fill: "forestgreen",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#2E8B57",
                        outline: "none"
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default MapChart;
