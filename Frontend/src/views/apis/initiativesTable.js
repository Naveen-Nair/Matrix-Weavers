const fetchInitiativesTables = async () => {
    try {
      const response = await fetch("http://localhost:3001/initiatives/tables", {
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
      return error
    }
  };
  
  export default fetchInitiativesTables;
  