import React from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {
        chart: {
          type: "line", // Change to 'line' for line chart
          zoom: {
            enabled: false,
          },
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Stock Prices for Reliance",
          align: "left",
        },
        xaxis: {
          categories: [], // This will be filled with dates
        },
        yaxis: {
          title: {
            text: "Price",
          },
        },
      },
    };
  }

  componentDidMount() {
    const { lineChartData } = this.props;
    // console.log(lineChartData);
    // Process data for the chart
    const categories = lineChartData["price"].map((data) => data[0]);
    const prices = lineChartData["price"].map((data) => data[1]);
    const opens = lineChartData["Open"].map((data) => data[1]);
    const highs = lineChartData["High"].map((data) => data[1]);
    const lows = lineChartData["Low"].map((data) => data[1]);

    this.setState({
      chartData: [
        {
          name: "Price",
          data: prices,
        },
        {
          name: "Open",
          data: opens,
        },
        {
          name: "High",
          data: highs,
        },
        {
          name: "Low",
          data: lows,
        },
      ],
      chartOptions: {
        ...this.state.chartOptions,
        xaxis: {
          categories: categories,
        },
      },
    });
  }

  render() {
    return (
      <>
        {this.state.chartData.length > 0 ? (
          <ReactApexChart
            options={this.state.chartOptions}
            series={this.state.chartData}
            type="line" // Use 'line' for line chart
            width="100%"
            height="100%"
          />
        ) : (
          <p>Loading chart...</p>
        )}
      </>
    );
  }
}

export default LineChart;
