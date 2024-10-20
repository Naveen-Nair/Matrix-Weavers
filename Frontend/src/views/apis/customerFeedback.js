import BACKEND_URL from "../utils/API_CONSTS";

export const fetchBusinessInsights = async (company) => {
  try {
    const response = await fetch(BACKEND_URL + "/customerFeedback", {
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
