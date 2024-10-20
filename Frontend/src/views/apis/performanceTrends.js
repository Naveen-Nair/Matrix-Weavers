import BACKEND_URL from "../../utils/API_CONSTS";

const fetchRevenueTrendData = async (company) => {
  try {
    // console.log(company);
    const response = await fetch(BACKEND_URL + "/stockTrend", {
      // Adjust the URL to match your backend endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ company }),
    });
    // console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching revenue trend data:", error);
  }
};

export default fetchRevenueTrendData;
