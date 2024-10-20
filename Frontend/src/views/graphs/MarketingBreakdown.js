import { Text } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import Chart from "react-apexcharts";

const MarketingMediaPresence = ({ businessData }) => {
  const data = businessData;
  const chartOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: data.map((company) => company.name),
      labels: {
        style: {
          colors: "#D3D3D3", // Lighter color for x-axis labels
        },
      },
    },
    colors: ["#008FFB"], // Color for the bars
    tooltip: {
      theme: "dark", // Dark theme for tooltip
      style: {
        fontSize: "14px",
        color: "#fff", // Tooltip text color
      },
    },
  };

  const chartSeries = [
    {
      name: "Marketing Expenditure",
      data: data.map((company) => company.marketing),
    },
  ];

  return (
    <Card p="20px" color="white" borderRadius="15px" mb="24px" boxShadow="xl">
      <Text fontSize="2xl" fontWeight="bold" mb="20px">
        Marketing & Media Presence
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

const marketingData = [
  {
    name: "Reliance Digital",
    marketing: 80, // Example expenditure in millions
  },
  {
    name: "Vijay Sales",
    marketing: 60, // Example expenditure in millions
  },
  {
    name: "Aditya Vision",
    marketing: 40, // Example expenditure in millions
  },
  {
    name: "Poojara",
    marketing: 70, // Example expenditure in millions
  },
  {
    name: "Bajaj Electronics",
    marketing: 90, // Example expenditure in millions
  },
];

export default MarketingMediaPresence;
