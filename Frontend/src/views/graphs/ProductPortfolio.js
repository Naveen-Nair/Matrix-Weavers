import { Text } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import Chart from "react-apexcharts";

const ProductPortfolio = ({businessData}) => {
  const data = businessData;
  const chartOptions = {
    chart: {
      type: "bar",
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true, // Set to true for a horizontal bar chart
      },
    },
    xaxis: {
      categories: data.map((company) => company.name),
      labels: {
        style: {
          colors: "#D3D3D3", // Lighter color for x-axis labels
        },
      },
    },
    colors: ["#008FFB", "#00E396", "#FEB019"],
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

  const chartSeries = [
    { name: "Electronics", data: data.map((company) => company.electronics) },
    {
      name: "Home Appliances",
      data: data.map((company) => company.appliances),
    },
    {
      name: "Private Labels",
      data: data.map((company) => company.privateLabels),
    },
  ];

  return (
    <Card p="20px" color="white" borderRadius="15px" mb="24px" boxShadow="xl">
      <Text fontSize="2xl" fontWeight="bold" mb="20px">
        Product Portfolio
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

// const productData = [
//   {
//     name: "Reliance Digital",
//     electronics: 60,
//     appliances: 30,
//     privateLabels: 10,
//   },
//   {
//     name: "Vijay Sales",
//     electronics: 55,
//     appliances: 35,
//     privateLabels: 10,
//   },
//   {
//     name: "Aditya Vision",
//     electronics: 40,
//     appliances: 40,
//     privateLabels: 20,
//   },
//   {
//     name: "Poojara",
//     electronics: 45,
//     appliances: 45,
//     privateLabels: 10,
//   },
//   {
//     name: "Bajaj Electronics",
//     electronics: 50,
//     appliances: 25,
//     privateLabels: 25,
//   },
// ];

export default ProductPortfolio;
