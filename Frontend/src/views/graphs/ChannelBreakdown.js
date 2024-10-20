import { Text } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import Chart from "react-apexcharts";

// Move channelData above the ChannelBreakdown component
const channelData = [
  {
    name: "Reliance Digital",
    store: 60,
    online: 30,
    b2b: 10,
  },
  {
    name: "Vijay Sales",
    store: 65,
    online: 25,
    b2b: 10,
  },
  {
    name: "Aditya Vision",
    store: 70,
    online: 20,
    b2b: 10,
  },
  {
    name: "Poojara",
    store: 80,
    online: 15,
    b2b: 5,
  },
  {
    name: "Bajaj Electronics",
    store: 55,
    online: 35,
    b2b: 10,
  },
];

const ChannelBreakdown = ({ businessData }) => {  
  const chartOptions = {
    labels: ["Store", "Online", "B2B"],
    colors: ["#A7C6ED", "#B3E5B7", "#FFE4A3"], // Lighter colors for pie chart items
    tooltip: {
      style: {
        fontSize: "14px",
        color: "#fff", // Tooltip text color
      },
      theme: "dark", // Set tooltip background color to black
    },
    xaxis: {
      labels: {
        style: {
          colors: "#D3D3D3", // Lighter color for x-axis labels
        },
      },
    },
    legend: {
      position: "bottom",
      markers: {
        fillColors: ["#7FBCFF", "#A4E0B7", "#FFDA8D"], // Match legend colors with labels
      },
      labels: {
        colors: "#fff", // Light color for legend text
      },
    },
  };

  const chartSeries = businessData.map((company) => ({
    name: company.name,
    data: [company.store, company.online, company.b2b],
  }));

  return (
    <Card p="20px" color="white" borderRadius="15px" mb="24px" boxShadow="xl">
      <Text fontSize="2xl" fontWeight="bold" mb="20px">
        Channel Breakdown
      </Text>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        width="100%"
      />
    </Card>
  );
};

export default ChannelBreakdown;
