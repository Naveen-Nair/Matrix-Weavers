import { Text } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import Chart from "react-apexcharts";

const CustomerSegmentDistribution = ({ businessData }) => {
  const data = businessData;
  const chartOptions = {
    chart: {
      type: "bubble",
      zoom: { enabled: false },
    },
    xaxis: {
      categories: ["Corporate", "Home Users", "Students"],
      labels: {
        style: {
          colors: "#D3D3D3", // Lighter color for x-axis labels
        },
      },
    },
    yaxis: {
      title: {
        text: "Number of Customers",
        style: {
          color: "#D3D3D3", // Lighter color for y-axis title
        },
      },
    },
    legend: {
      position: "top",
      labels: {
        colors: "#D3D3D3", // Light color for legend text
      },
    },
    tooltip: {
      theme: "dark", // Dark theme for tooltip
      style: {
        fontSize: "14px",
        color: "#fff", // Tooltip text color
      },
    },
  };

  const chartSeries = data.map((company) => ({
    name: company.name,
    data: company.segments.map((segment) => ({
      x: segment.x,
      y: segment.y,
      z: segment.y, // Bubble size based on the number of customers
    })),
  }));

  return (
    <Card p="20px" color="white" borderRadius="15px" mb="24px" boxShadow="xl">
      <Text fontSize="2xl" fontWeight="bold" mb="20px">
        Customer Segment Distribution
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

const customerSegmentData = [
  {
    name: "Reliance Digital",
    segments: [
      { x: "Corporate", y: 30 },
      { x: "Home Users", y: 50 },
      { x: "Students", y: 20 },
    ],
  },
  {
    name: "Vijay Sales",
    segments: [
      { x: "Corporate", y: 40 },
      { x: "Home Users", y: 45 },
      { x: "Students", y: 15 },
    ],
  },
  {
    name: "Aditya Vision",
    segments: [
      { x: "Corporate", y: 25 },
      { x: "Home Users", y: 35 },
      { x: "Students", y: 40 },
    ],
  },
  {
    name: "Poojara",
    segments: [
      { x: "Corporate", y: 20 },
      { x: "Home Users", y: 50 },
      { x: "Students", y: 30 },
    ],
  },
  {
    name: "Bajaj Electronics",
    segments: [
      { x: "Corporate", y: 35 },
      { x: "Home Users", y: 25 },
      { x: "Students", y: 40 },
    ],
  },
];

export default CustomerSegmentDistribution;
