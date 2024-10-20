const mongoose = require("mongoose");

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

const customerFeedbackSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  totalReviews: {
    type: Number,
    required: true,
  },
  averageReviewScore: {
    type: String,
    required: true,
  },
  netPromoterScore: {
    type: Number,
    required: true,
  },
  customerSatisfaction: {
    type: String,
    required: true,
  },
  positiveSentimentPercentage: {
    type: Number, // Stored as a percentage (e.g., 85 for 85%)
    required: true,
  },
  customerServiceRating: {
    type: String,
    required: true,
  },
  feedbackHighlights: {
    type: String,
    required: true,
  },
  improvementAreas: {
    type: String,
    required: true,
  },
});

const CustomerFeedback = mongoose.model(
  "customerFeedbacks",
  customerFeedbackSchema
);

// Populate the database
async function populateDatabase() {
  const feedbacks = [
    {
      companyName: "Reliance Digital",
      totalReviews: 1200,
      averageReviewScore: "4.2 / 5",
      netPromoterScore: 72,
      customerSatisfaction: "High",
      positiveSentimentPercentage: 85,
      customerServiceRating: "4.1 / 5",
      feedbackHighlights:
        "Customers appreciate the vast range of products and competitive pricing. Many customers highlight the knowledgeable staff and prompt in-store assistance.",
      improvementAreas:
        "Many reviews mention the need for faster after-sales service, especially for high-value items. Delivery times for online orders could also be improved.",
    },
    {
      companyName: "Vijay Sales",
      totalReviews: 900,
      averageReviewScore: "3.8 / 5",
      netPromoterScore: 68,
      customerSatisfaction: "Moderate",
      positiveSentimentPercentage: 78,
      customerServiceRating: "3.7 / 5",
      feedbackHighlights:
        "Vijay Sales is praised for its festive season discounts and offers. Customers also appreciate the easy return policy and store layout.",
      improvementAreas:
        "There are frequent complaints about delayed deliveries for online orders and a need for more proactive customer support for technical issues.",
    },
    {
      companyName: "Aditya Vision",
      totalReviews: 600,
      averageReviewScore: "3.9 / 5",
      netPromoterScore: 65,
      customerSatisfaction: "Moderate",
      positiveSentimentPercentage: 75,
      customerServiceRating: "3.6 / 5",
      feedbackHighlights:
        "Customers are satisfied with the in-store shopping experience and appreciate the personalized service provided by the staff in smaller stores.",
      improvementAreas:
        "Limited product variety and geographic reach are common concerns. Customers suggest expanding the store network and product offerings, particularly in smaller cities.",
    },
    {
      companyName: "Poojara",
      totalReviews: 500,
      averageReviewScore: "3.7 / 5",
      netPromoterScore: 63,
      customerSatisfaction: "Moderate",
      positiveSentimentPercentage: 70,
      customerServiceRating: "3.5 / 5",
      feedbackHighlights:
        "The compact store size is appreciated by customers looking for a quick shopping experience. Good customer service is often mentioned.",
      improvementAreas:
        "More spacious stores and better organization of product displays are suggested. Some customers also highlight a need for better promotional offers.",
    },
    {
      companyName: "Bajaj Electronics",
      totalReviews: 1000,
      averageReviewScore: "4 / 5",
      netPromoterScore: 70,
      customerSatisfaction: "High",
      positiveSentimentPercentage: 82,
      customerServiceRating: "4 / 5",
      feedbackHighlights:
        "Bajaj Electronics receives positive feedback for its seamless online experience, especially for tech-savvy customers. Pricing transparency is also praised.",
      improvementAreas:
        "Improved customer service in physical stores is often suggested, especially during peak hours. There are also recommendations for adding more in-store product demonstrations.",
    },
  ];

  try {
    await CustomerFeedback.deleteMany(); // Clear existing data
    const result = await CustomerFeedback.insertMany(feedbacks);
    console.log("Database populated successfully:", result);
  } catch (error) {
    console.error("Error populating database:", error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
}
