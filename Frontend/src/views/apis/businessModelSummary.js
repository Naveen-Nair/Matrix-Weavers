const fetchBusinessModelSummary = async () => {
  try {
    const response = await fetch("http://localhost:3001/businessModel", {
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

export default fetchBusinessModelSummary;
