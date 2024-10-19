import React from "react";
import DatamapsIndia from "react-datamaps-india";

const MapChart = ({ data, titleText, legendTitleText }) => {

  return (
    <div style={{ width: "100%", height: "1000px" }}> {/* Define width and height */}
      <DatamapsIndia
        style={{ display: "block", width: "100%", height: "100%" }}
        regionData={data}
        hoverComponent={({ value }) => {
          return (
            <div>
              <div>
                {value.name} {value.value}
              </div>
            </div>
          );
        }}
        mapLayout={{
          title: `${titleText}`,
          legendTitle:  `${legendTitleText}`,
          startColor: "#b3d1ff",
          endColor: "#005ce6",
          hoverTitle: "Count",
          noDataColor: "#f5f5f5",
          borderColor: "#8D8D8D",
          hoverColor: "blue",
          hoverBorderColor: "green",
          height: 500,  // Adjust to match container height
          width: "100%" // Use width as percentage or fixed value
        }}
      />
    </div>
  );
};

export default MapChart;
