import BACKEND_URL from "../../utils/API_CONSTS";

export const fetchBusinessModelSummary = async () => {
  try {
    const response = await fetch(BACKEND_URL + "/businessModel", {
      // Adjust the URL to match your backend endpoint
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching business model data:", error);
  }
};

export const fetchBusinessData = async () => {
  try {
    // console.log(BACKEND_URL + "/businessData");
    const response = await fetch(BACKEND_URL + "/businessData", {
      // Adjust the URL to match your backend endpoint
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching business model data:", error);
  }
};

export const fetchBusinessInsights = async (company) => {
  try {
    const response = await fetch(BACKEND_URL + "/businessInsights", {
      // Adjust the URL to match your backend endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ company: company }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching business model data:", error);
  }
};
