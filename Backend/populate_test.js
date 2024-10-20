const mongoose = require("mongoose");
const InsightsData = require("./models/performance_trends/Company.js");

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
    performanceTrendsSummary: [
      "The company's revenue has seen a steady increase over the past year, driven primarily by their expansion into digital markets and strategic partnerships with technology firms. Revenue growth for the year was reported at 15%, indicating strong performance in emerging sectors.",
      "Market share has also grown, now accounting for 28% of the overall e-commerce market. This is largely due to recent acquisitions, which have strengthened the company's presence in key regions.",
      "Profit margins have improved as a result of cost-cutting measures and improved operational efficiencies, with a 12% margin recorded for the last fiscal year.",
      "Additionally, the company has been successful in improving its cost efficiency, reducing operational costs by 5% over the past year, thanks to better supply chain management and automation efforts.",
      "Customer retention remains a strong point, with an 88% retention rate. This is attributed to improved customer service and enhanced digital experiences.",
    ],
    strategicInitiatives: {
      investments: [
        {
          year: "2023",
          amount: "2 Billion USD",
          focus: "E-commerce Platforms",
        },
        { year: "2022", amount: "1.5 Billion USD", focus: "Digital Services" },
      ],
      acquisitions: [
        {
          year: "2023",
          company: "Company X",
          value: "1 Billion USD",
          sector: "Supply Chain",
        },
        {
          year: "2021",
          company: "Company Y",
          value: "500 Million USD",
          sector: "Retail",
        },
      ],
      partnerships: [
        {
          year: "2023",
          partner: "Tech Company A",
          focus: "AI-driven Retail Solutions",
        },
        {
          year: "2022",
          partner: "Energy Company B",
          focus: "Sustainability Initiatives",
        },
      ],
    },
    futureOutlook: {
      growthProjections: [
        { year: "2024", revenue: "50 Billion USD", growthRate: "10%" },
        { year: "2025", revenue: "55 Billion USD", growthRate: "12%" },
      ],
      challenges: [
        "Rising competition in the e-commerce sector.",
        "Regulatory hurdles in international expansion.",
      ],
      customerSentiment: {
        positive: "85%",
        negative: "15%",
        keyFeedback:
          "Strong digital offerings, but logistics needs improvement.",
      },
      sustainability: {
        greenEnergyTransition: "50% by 2025",
        majorInitiatives: [
          "Renewable energy sources",
          "Reduction in carbon footprint",
        ],
      },
    },
  },
  {
    companyName: "Vijay Sales",
    performanceTrendsSummary: [
      "Vijay Sales has consistently improved its online sales, with a 20% growth in revenue attributed to effective marketing strategies and an expanded product range.",
      "The company holds a 15% market share in the electronics sector, focusing on customer service and innovative promotional tactics.",
      "Profit margins have stabilized at 10%, thanks to improved supplier relationships and operational efficiencies.",
      "Operational costs have decreased by 3% due to streamlined logistics and inventory management.",
      "Customer loyalty is high, with a retention rate of 80%, reflecting strong customer satisfaction.",
    ],
    strategicInitiatives: {
      investments: [
        { year: "2023", amount: "1 Billion USD", focus: "E-commerce Growth" },
        { year: "2022", amount: "800 Million USD", focus: "Digital Marketing" },
      ],
      acquisitions: [
        {
          year: "2022",
          company: "Retail Co",
          value: "400 Million USD",
          sector: "E-commerce",
        },
      ],
      partnerships: [
        {
          year: "2023",
          partner: "E-Payment Company",
          focus: "Secure Payment Solutions",
        },
      ],
    },
    futureOutlook: {
      growthProjections: [
        { year: "2024", revenue: "30 Billion USD", growthRate: "8%" },
        { year: "2025", revenue: "32 Billion USD", growthRate: "9%" },
      ],
      challenges: [
        "Increasing competition in the retail sector.",
        "Maintaining supply chain efficiency.",
      ],
      customerSentiment: {
        positive: "90%",
        negative: "10%",
        keyFeedback:
          "Excellent service, but product delivery needs improvement.",
      },
      sustainability: {
        greenEnergyTransition: "40% by 2025",
        majorInitiatives: [
          "Energy-efficient products",
          "Reducing plastic usage in packaging",
        ],
      },
    },
  },
  {
    companyName: "Aditya Vision",
    performanceTrendsSummary: [
      "Aditya Vision has achieved a 25% growth in revenue this year, primarily due to its strong online presence and customer loyalty programs.",
      "The company commands a 10% market share in the electronics space, with a focus on affordability and value.",
      "Profit margins stand at 9%, thanks to cost management and promotional discounts.",
      "Operational costs have decreased by 4%, leading to improved cost efficiency.",
      "The customer retention rate is approximately 75%, highlighting the effectiveness of its marketing campaigns.",
    ],
    strategicInitiatives: {
      investments: [
        {
          year: "2023",
          amount: "500 Million USD",
          focus: "Digital Infrastructure",
        },
      ],
      acquisitions: [],
      partnerships: [
        {
          year: "2023",
          partner: "Local Delivery Service",
          focus: "Faster Delivery Solutions",
        },
      ],
    },
    futureOutlook: {
      growthProjections: [
        { year: "2024", revenue: "15 Billion USD", growthRate: "12%" },
        { year: "2025", revenue: "17 Billion USD", growthRate: "13%" },
      ],
      challenges: [
        "Balancing pricing with quality offerings.",
        "Navigating changing consumer preferences.",
      ],
      customerSentiment: {
        positive: "80%",
        negative: "20%",
        keyFeedback: "Good prices but limited product range.",
      },
      sustainability: {
        greenEnergyTransition: "35% by 2025",
        majorInitiatives: [
          "Sourcing from sustainable suppliers",
          "Reducing waste in operations",
        ],
      },
    },
  },
  {
    companyName: "Poojara",
    performanceTrendsSummary: [
      "Poojara has experienced a 18% increase in revenue, driven by an effective online marketing campaign and strategic partnerships.",
      "The company holds a 12% market share, focusing on premium electronics.",
      "Profit margins are recorded at 11%, reflecting improved operational processes.",
      "Operational cost reductions have been achieved through better supply chain management.",
      "The customer retention rate is 82%, largely due to enhanced customer service.",
    ],
    strategicInitiatives: {
      investments: [
        {
          year: "2023",
          amount: "750 Million USD",
          focus: "Product Innovation",
        },
      ],
      acquisitions: [],
      partnerships: [
        {
          year: "2022",
          partner: "Fashion Brand",
          focus: "Cross-Promotional Opportunities",
        },
      ],
    },
    futureOutlook: {
      growthProjections: [
        { year: "2024", revenue: "20 Billion USD", growthRate: "9%" },
        { year: "2025", revenue: "22 Billion USD", growthRate: "10%" },
      ],
      challenges: [
        "Maintaining quality while expanding product lines.",
        "Increased costs of raw materials.",
      ],
      customerSentiment: {
        positive: "75%",
        negative: "25%",
        keyFeedback: "Quality products but higher prices.",
      },
      sustainability: {
        greenEnergyTransition: "30% by 2025",
        majorInitiatives: [
          "Carbon offset programs",
          "Energy-efficient production methods",
        ],
      },
    },
  },
  {
    companyName: "Bajaj Electronics",
    performanceTrendsSummary: [
      "Bajaj Electronics reported a 22% revenue growth due to its wide product range and competitive pricing strategies.",
      "The company commands a 16% market share in the electronics industry.",
      "Profit margins are approximately 8%, aided by operational efficiencies.",
      "Operational costs have been effectively managed, leading to a reduction of 6%.",
      "Customer retention stands at 78%, supported by loyalty programs.",
    ],
    strategicInitiatives: {
      investments: [
        { year: "2023", amount: "1 Billion USD", focus: "Technology Upgrades" },
        {
          year: "2022",
          amount: "600 Million USD",
          focus: "Customer Experience",
        },
      ],
      acquisitions: [
        {
          year: "2022",
          company: "Gadget World",
          value: "300 Million USD",
          sector: "Retail",
        },
      ],
      partnerships: [],
    },
    futureOutlook: {
      growthProjections: [
        { year: "2024", revenue: "25 Billion USD", growthRate: "11%" },
        { year: "2025", revenue: "28 Billion USD", growthRate: "10%" },
      ],
      challenges: [
        "Navigating price wars with competitors.",
        "Supply chain disruptions.",
      ],
      customerSentiment: {
        positive: "82%",
        negative: "18%",
        keyFeedback: "Great prices but needs better service.",
      },
      sustainability: {
        greenEnergyTransition: "45% by 2025",
        majorInitiatives: [
          "Energy conservation programs",
          "Investment in renewable energy sources",
        ],
      },
    },
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
