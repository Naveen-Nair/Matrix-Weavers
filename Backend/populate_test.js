const mongoose = require("mongoose");
const InsightsData = require("./models/buisness_model/insightsData.js");

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

// Data to insert
const insightsData = [
  {
    companyName: "Reliance Digital",
    insights: [
      {
        title: "Strengths",
        description:
          "The company has a strong online presence, leveraging e-commerce platforms effectively to reach a wider audience. Its customer service is rated highly, indicating strong post-sale support.",
      },
      {
        title: "Weaknesses",
        description:
          "The company has limited product diversification, heavily relying on electronics, which exposes it to market fluctuations. Additionally, it has fewer affordability options compared to competitors, making it less attractive to budget-conscious customers.",
      },
      {
        title: "Opportunities",
        description:
          "There is significant potential for expanding product categories to include more private labels, which can improve margins. Exploring partnerships for financing options can enhance customer appeal.",
      },
      {
        title: "Threats",
        description:
          "Increased competition in the online retail space may impact market share. Economic downturns could affect consumer spending in electronics.",
      },
      {
        title: "Learnings from Competitors",
        description:
          "The company can learn from competitors like Vijay Sales and Reliance Digital, who have successfully diversified their product offerings and improved their affordability programs. Emphasizing after-sales services similar to Bajaj Electronics could also enhance customer loyalty.",
      },
    ],
    summary: {
      description:
        "The company has established a strong market presence by focusing on innovation and customer-centric offerings. With a diversified product portfolio and effective marketing strategies, it continues to attract a wide range of customers.",
      strengths: [
        "Diverse product offerings across multiple categories",
        "Strong digital marketing presence",
        "Robust supply chain management",
        "Responsive customer service",
      ],
      excellence: [
        "High customer satisfaction ratings",
        "Effective use of technology in operations",
        "Competitive pricing strategies",
        "Strong after-sales support",
      ],
    },
    segments: [
      {
        title: "Marketing Strategy & Media Presence",
        description:
          "The company focuses heavily on digital marketing strategies, utilizing social media platforms and influencer partnerships to reach a younger audience. However, its traditional media presence is minimal, which could limit exposure to older demographics.",
      },
      {
        title: "Affordability Offerings",
        description:
          "The company provides various financing options and exchange programs, making products more accessible to budget-conscious consumers. However, it lacks comprehensive EMI plans compared to competitors, which could enhance its appeal.",
      },
      {
        title: "After-Sales Offerings",
        description:
          "After-sales service is strong, with responsive customer service and effective recycling programs in place. However, there is room for improvement in warranty services, which could enhance customer satisfaction.",
      },
      {
        title: "Supply Chain",
        description:
          "The company maintains a robust supply chain with reliable supplier relationships, ensuring timely deliveries. However, increasing efficiency in inventory management could further improve delivery promises.",
      },
      {
        title: "Use of Technology",
        description:
          "The company has embraced technology by investing in an intuitive e-commerce platform and in-store tech solutions. However, there is potential to enhance customer experience through better mobile app integration and personalized recommendations.",
      },
    ],
  },
  {
    companyName: "Vijay Sales",
    insights: [
      {
        title: "Strengths",
        description:
          "Vijay Sales has a well-established brand presence and is known for its competitive pricing, which attracts a wide range of customers.",
      },
      {
        title: "Weaknesses",
        description:
          "Limited online sales capabilities hinder its growth potential, especially in the current digital-first market.",
      },
      {
        title: "Opportunities",
        description:
          "Enhancing their online platform and expanding into B2B sales can provide significant growth opportunities.",
      },
      {
        title: "Threats",
        description:
          "The increasing competition from e-commerce giants poses a significant threat to their traditional retail model.",
      },
      {
        title: "Learnings from Competitors",
        description:
          "Vijay Sales can adopt strategies from Reliance Digital's successful online sales model and customer engagement techniques.",
      },
    ],
    summary: {
      description:
        "Vijay Sales has positioned itself as a trusted retailer with a strong focus on customer service and competitive pricing. The company is actively seeking to expand its online presence to complement its brick-and-mortar stores.",
      strengths: [
        "Strong brand recognition",
        "Competitive pricing",
        "Diverse product range",
        "Effective promotional strategies",
      ],
      excellence: [
        "High customer retention rates",
        "Responsive customer support",
        "Established supplier relationships",
        "Strong logistics network",
      ],
    },
    segments: [
      {
        title: "Marketing Strategy & Media Presence",
        description:
          "Vijay Sales utilizes a mix of digital and traditional marketing channels, but there is room for improvement in social media engagement.",
      },
      {
        title: "Affordability Offerings",
        description:
          "The company offers various financing options but lacks comprehensive EMI plans that could enhance customer affordability.",
      },
      {
        title: "After-Sales Offerings",
        description:
          "The after-sales service is solid, but customer feedback indicates a desire for more responsive warranty services.",
      },
      {
        title: "Supply Chain",
        description:
          "Vijay Sales maintains a strong supply chain, but increasing efficiency in inventory management could lead to improved delivery times.",
      },
      {
        title: "Use of Technology",
        description:
          "The company has started investing in e-commerce solutions but needs to further enhance its digital infrastructure to compete effectively.",
      },
    ],
  },
  {
    companyName: "Aditya Vision",
    insights: [
      {
        title: "Strengths",
        description:
          "Aditya Vision excels in personalized customer service, which has garnered a loyal customer base.",
      },
      {
        title: "Weaknesses",
        description:
          "Limited product diversification and a smaller geographical presence restrict growth potential.",
      },
      {
        title: "Opportunities",
        description:
          "Expanding online presence and diversifying product offerings can attract a broader customer base.",
      },
      {
        title: "Threats",
        description:
          "Increasing competition from larger retailers and online platforms may impact market share.",
      },
      {
        title: "Learnings from Competitors",
        description:
          "Aditya Vision can learn from the successful product diversification strategies of Bajaj Electronics.",
      },
    ],
    summary: {
      description:
        "Aditya Vision is known for its exceptional customer service and strong community ties. While it has a loyal customer base, the company recognizes the need to expand its online presence.",
      strengths: [
        "Strong community relationships",
        "High customer satisfaction ratings",
        "Personalized shopping experience",
      ],
      excellence: [
        "Effective use of social media marketing",
        "Responsive customer support",
        "Niche product offerings",
      ],
    },
    segments: [
      {
        title: "Marketing Strategy & Media Presence",
        description:
          "Aditya Vision employs targeted marketing strategies that resonate well with local communities, but they could expand their reach through online marketing.",
      },
      {
        title: "Affordability Offerings",
        description:
          "While the company provides affordable options, enhancing financing programs could attract budget-conscious consumers.",
      },
      {
        title: "After-Sales Offerings",
        description:
          "Aditya Vision has a strong after-sales service reputation but could improve warranty options.",
      },
      {
        title: "Supply Chain",
        description:
          "The supply chain is robust, but the company should explore partnerships with logistics providers to enhance delivery speed.",
      },
      {
        title: "Use of Technology",
        description:
          "Investments in technology are needed to improve online sales capabilities and customer engagement.",
      },
    ],
  },
  {
    companyName: "Poojara",
    insights: [
      {
        title: "Strengths",
        description:
          "Poojara's customer service is frequently praised, contributing to a loyal customer base and strong community ties.",
      },
      {
        title: "Weaknesses",
        description:
          "Limited product offerings may deter customers looking for a wider selection. A low marketing presence could affect brand visibility.",
      },
      {
        title: "Opportunities",
        description:
          "Enhancing online sales capabilities and broadening product lines could attract more customers.",
      },
      {
        title: "Threats",
        description:
          "Growing competition from larger retailers poses a risk, as does economic uncertainty affecting consumer spending.",
      },
      {
        title: "Learnings from Competitors",
        description:
          "Poojara can adopt successful promotional strategies used by Vijay Sales to enhance customer engagement.",
      },
    ],
    summary: {
      description:
        "Poojara is well-regarded for its strong customer service but needs to enhance its product offerings and marketing strategies to remain competitive.",
      strengths: [
        "High levels of customer satisfaction",
        "Strong community ties",
        "Responsive customer service",
      ],
      excellence: [
        "Effective local marketing strategies",
        "Responsive after-sales support",
      ],
    },
    segments: [
      {
        title: "Marketing Strategy & Media Presence",
        description:
          "Poojara relies heavily on local marketing strategies but should invest in digital marketing to broaden its audience.",
      },
      {
        title: "Affordability Offerings",
        description:
          "The company has basic financing options, but enhancing these could improve accessibility for customers.",
      },
      {
        title: "After-Sales Offerings",
        description:
          "After-sales service is a strong point, but improvements in warranty services could further enhance customer loyalty.",
      },
      {
        title: "Supply Chain",
        description:
          "Poojara maintains a reliable supply chain but should consider partnerships for logistics to improve efficiency.",
      },
      {
        title: "Use of Technology",
        description:
          "Investments in technology are essential for improving the online shopping experience and engaging with customers.",
      },
    ],
  },
  {
    companyName: "Bajaj Electronics",
    insights: [
      {
        title: "Strengths",
        description:
          "Bajaj Electronics has a strong online presence and excellent customer service ratings, enhancing customer loyalty.",
      },
      {
        title: "Weaknesses",
        description:
          "Inconsistent customer experiences in physical stores may deter some customers. Limited brand partnerships restrict product variety.",
      },
      {
        title: "Opportunities",
        description:
          "Expanding in-store product demonstrations and improving customer service can further enhance customer satisfaction.",
      },
      {
        title: "Threats",
        description:
          "Intense competition in the electronics retail market could affect market share. Economic fluctuations may impact consumer spending.",
      },
      {
        title: "Learnings from Competitors",
        description:
          "Bajaj Electronics should analyze Reliance Digital's effective e-commerce strategy and consider diversifying its product portfolio.",
      },
    ],
    summary: {
      description:
        "Bajaj Electronics is known for its robust online sales and customer-centric approach. The company is focused on maintaining high customer satisfaction and exploring new market opportunities.",
      strengths: [
        "Diverse product range",
        "Strong digital marketing presence",
        "Robust customer support",
      ],
      excellence: [
        "High customer satisfaction ratings",
        "Effective use of technology in operations",
        "Strong after-sales support",
      ],
    },
    segments: [
      {
        title: "Marketing Strategy & Media Presence",
        description:
          "Bajaj Electronics effectively utilizes digital marketing strategies but could enhance its engagement through targeted advertising.",
      },
      {
        title: "Affordability Offerings",
        description:
          "The company provides various financing options but could expand its EMI plans to attract more budget-conscious customers.",
      },
      {
        title: "After-Sales Offerings",
        description:
          "After-sales service is strong, but improvements in warranty services could further enhance customer satisfaction.",
      },
      {
        title: "Supply Chain",
        description:
          "Bajaj Electronics has a robust supply chain with reliable suppliers, but increasing efficiency in inventory management could improve service.",
      },
      {
        title: "Use of Technology",
        description:
          "Investments in technology, such as a better e-commerce platform, could enhance the overall customer experience.",
      },
    ],
  },
];

// Populate the database
async function populateDatabase() {
  try {
    await InsightsData.deleteMany(); // Clear existing data
    const result = await InsightsData.create(insightsData);
    console.log("Database populated successfully:", result);
  } catch (error) {
    console.error("Error populating database:", error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
}
