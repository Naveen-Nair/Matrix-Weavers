import BACKEND_URL from "../utils/API_CONSTS";

const fetchInitiativesTables = async () => {
  try {
    const response = await fetch(BACKEND_URL + "/initiatives/tables", {
      // Adjust the URL to match your backend endpoint
      method: "GET",
    });
    // console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching revenue trend data:", error);
    return error;
  }
};

export default fetchInitiativesTables;
