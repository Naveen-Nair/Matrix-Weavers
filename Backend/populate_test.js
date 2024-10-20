const mongoose = require("mongoose");
const InsightsData = require("./models/geographical_presence_store_formats/company_overview.model.js");

// Replace 'yourMongoDBConnectionString' with your actual MongoDB connection string
const mongoDBConnectionString =
  "mongodb+srv://user_1_spider:user_1_spider@cluster0.gpmuqfi.mongodb.net/Chroma_app";

// Connect to MongoDB
mongoose
  .connect(mongoDBConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
    populateDatabase();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
  const companiesData = [
    {
      companyName: "Reliance Digital",
      numberOfStates: 15,
      storeCount: 200,
      storesRented: 120,
      storesOwned: 80,
      storeFormats: ["Retail", "Warehouse"],
    },
    {
      companyName: "Vijay Sales",
      numberOfStates: 10,
      storeCount: 150,
      storesRented: 90,
      storesOwned: 60,
      storeFormats: ["Retail"],
    },
    {
      companyName: "Aditya Vision",
      numberOfStates: 8,
      storeCount: 100,
      storesRented: 50,
      storesOwned: 50,
      storeFormats: ["Retail", "Franchise"],
    },
    {
      companyName: "Poojara",
      numberOfStates: 12,
      storeCount: 120,
      storesRented: 70,
      storesOwned: 50,
      storeFormats: ["Retail", "Outlet"],
    },
    {
      companyName: "Bajaj Electronics",
      numberOfStates: 14,
      storeCount: 180,
      storesRented: 100,
      storesOwned: 80,
      storeFormats: ["Retail", "E-commerce"],
    },
  ];

// Populate the database
async function populateDatabase() {
  try {
    await InsightsData.deleteMany(); // Clear existing data
    const result = await InsightsData.create(companiesData);
    console.log("Database populated successfully:", result);
  } catch (error) {
    console.error("Error populating database:", error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
}
