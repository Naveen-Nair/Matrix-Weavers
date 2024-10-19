// Chakra imports
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  Icon,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  VStack,
} from "@chakra-ui/react";

import ChannelBreakdown from "../graphs/ChannelBreakdown.js";
import ProductPortfolio from "../graphs/ProductPortfolio.js";
import CustomerBreakDown from "../graphs/CustomerBreakdown.js";
import MarketingMediaPresence from "../graphs/MarketingBreakdown.js";
import CompanyDropDown from "../../components/CompanyDropdown/index.js";

import Card from "components/Card/Card.js";

export default function BusinessModel() {
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <BusinessModelAnalysis data={businessModelData} />
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
        gap="24px"
      >
        <ChannelBreakdown />
        <ProductPortfolio />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
        gap="24px"
      >
        <CustomerBreakDown />
        <MarketingMediaPresence />
      </Grid>
      <Card>
        <Text color="#fff" fontSize="lg" fontWeight="bold" mb="20px">
          Detailed Overview
        </Text>
        <CompanyDropDown />
      </Card>
      <BusinessModelSummary />
      <BusinessModelInsights />
      <BusinessModelSegments />
    </Flex>
  );
}

const BusinessModelAnalysis = ({ data }) => {
  return (
    <Card
      p="20px"
      borderRadius="15px"
      mb="24px"
      color="white"
      boxShadow="xl"
      overflowX="auto" // Enables horizontal scrolling
    >
      <Text fontSize="2xl" fontWeight="bold" mb="20px">
        Business Model Summary
      </Text>

      <Table variant="simple" colorScheme="teal">
        <Thead>
          <Tr>
            <Th color="gray.400" borderBottomColor="gray.600">
              Metric
            </Th>
            {data.map((company, index) => (
              <Th key={index} color="gray.400" borderBottomColor="gray.600">
                {company.name}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Geographical Presence</Td>
            {data.map((company, index) => (
              <Td key={index}>
                {company.geographicalPresence.states} states,{" "}
                {company.geographicalPresence.stores} stores
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Store Ownership (Rented / Owned)</Td>
            {data.map((company, index) => (
              <Td key={index}>
                {company.storeOwnership.rented} rented,{" "}
                {company.storeOwnership.owned} owned
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td>Store Formats</Td>
            {data.map((company, index) => (
              <Td key={index}>{company.storeFormats}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Online Sales Channel</Td>
            {data.map((company, index) => (
              <Td key={index}>{company.onlineSales}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>B2B Channel</Td>
            {data.map((company, index) => (
              <Td key={index}>{company.b2bChannel}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Product Portfolio</Td>
            {data.map((company, index) => (
              <Td key={index}>{company.productPortfolio}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Private Labels</Td>
            {data.map((company, index) => (
              <Td key={index}>{company.privateLabels}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Customer Segments</Td>
            {data.map((company, index) => (
              <Td key={index}>{company.customerSegments}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Affordability Offerings</Td>
            {data.map((company, index) => (
              <Td key={index}>{company.affordabilityOfferings}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>After Sales Services</Td>
            {data.map((company, index) => (
              <Td key={index}>{company.afterSalesServices}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Supply Chain Strength</Td>
            {data.map((company, index) => (
              <Td key={index}>{company.supplyChainStrength}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Use of Technology</Td>
            {data.map((company, index) => (
              <Td key={index}>{company.technologyUse}</Td>
            ))}
          </Tr>
          <Tr>
            <Td>Marketing Strategy</Td>
            {data.map((company, index) => (
              <Td key={index}>{company.marketingStrategy}</Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
    </Card>
  );
};

const businessModelData = [
  {
    name: "Reliance Digital",
    geographicalPresence: { states: 15, stores: 200 },
    storeOwnership: { rented: 120, owned: 80 },
    storeFormats: "Retail, Warehouse",
    onlineSales: "Yes",
    b2bChannel: "Yes",
    productPortfolio: "Electronics, Home Appliances",
    privateLabels: "Yes",
    customerSegments: "Mass, Premium",
    affordabilityOfferings: "EMI, Exchange",
    afterSalesServices: "Warranty, Recycling",
    supplyChainStrength: "Strong (2-day delivery)",
    technologyUse: "High (E-commerce, In-store Tech)",
    marketingStrategy: "Aggressive",
  },
  {
    name: "Vijay Sales",
    geographicalPresence: { states: 10, stores: 150 },
    storeOwnership: { rented: 90, owned: 60 },
    storeFormats: "Retail",
    onlineSales: "Yes",
    b2bChannel: "No",
    productPortfolio: "Electronics",
    privateLabels: "No",
    customerSegments: "Mass",
    affordabilityOfferings: "EMI",
    afterSalesServices: "Warranty",
    supplyChainStrength: "Average (5-day delivery)",
    technologyUse: "Medium",
    marketingStrategy: "Moderate",
  },
  {
    name: "Aditya Vision",
    geographicalPresence: { states: 8, stores: 100 },
    storeOwnership: { rented: 50, owned: 50 },
    storeFormats: "Retail, Franchise",
    onlineSales: "No",
    b2bChannel: "Yes",
    productPortfolio: "Electronics, Appliances",
    privateLabels: "Yes",
    customerSegments: "Mass, Budget",
    affordabilityOfferings: "EMI, Exchange",
    afterSalesServices: "Limited",
    supplyChainStrength: "Strong (3-day delivery)",
    technologyUse: "Low",
    marketingStrategy: "Limited",
  },
  {
    name: "Poojara",
    geographicalPresence: { states: 12, stores: 120 },
    storeOwnership: { rented: 70, owned: 50 },
    storeFormats: "Retail, Outlet",
    onlineSales: "No",
    b2bChannel: "No",
    productPortfolio: "Electronics",
    privateLabels: "No",
    customerSegments: "Mass",
    affordabilityOfferings: "Exchange",
    afterSalesServices: "Limited",
    supplyChainStrength: "Average (6-day delivery)",
    technologyUse: "Low",
    marketingStrategy: "Moderate",
  },
  {
    name: "Bajaj Electronics",
    geographicalPresence: { states: 14, stores: 180 },
    storeOwnership: { rented: 100, owned: 80 },
    storeFormats: "Retail, E-commerce",
    onlineSales: "Yes",
    b2bChannel: "Yes",
    productPortfolio: "Electronics, Appliances",
    privateLabels: "No",
    customerSegments: "Mass, Premium",
    affordabilityOfferings: "EMI, Exchange",
    afterSalesServices: "Warranty, Repair",
    supplyChainStrength: "Strong (2-day delivery)",
    technologyUse: "High",
    marketingStrategy: "Aggressive",
  },
];

const BusinessModelInsights = ({ insights = insightsData }) => {
  return (
    <Card
      p="20px"
      color="white"
      borderRadius="15px"
      mb="24px"
      boxShadow="xl"
      mt="24px"
    >
      <Text fontSize="2xl" fontWeight="bold" mt="20px">
        Business Model Insights
      </Text>
      <VStack align="start" spacing={4}>
        {insights.map((item, index) => (
          <Box
            key={index}
            p="10px"
            borderWidth="1px"
            borderRadius="8px"
            borderColor="gray.600"
          >
            <Text fontWeight="bold">{item.title}</Text>
            <Text color="gray.400">{item.description}</Text>
          </Box>
        ))}
      </VStack>
    </Card>
  );
};

const insightsData = [
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
];

const summaryDataText = {
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
};

const BusinessModelSummary = ({ summaryData = summaryDataText }) => {
  return (
    <Card p="20px" color="white" borderRadius="15px" mt="24px" boxShadow="xl">
      <Text fontSize="2xl" fontWeight="bold" mb="20px">
        Business Model Summary
      </Text>
      <Text color="gray.400" mb="10px">
        {summaryData.description}
      </Text>
      <VStack align="start" spacing={4}>
        <Box
          p="10px"
          borderWidth="1px"
          borderRadius="8px"
          borderColor="gray.600"
        >
          <Text fontWeight="bold" mb="5px">
            Key Strengths:
          </Text>
          <Text color="gray.400">{summaryData.strengths.join(", ")}</Text>
        </Box>
        <Box
          p="10px"
          borderWidth="1px"
          borderRadius="8px"
          borderColor="gray.600"
        >
          <Text fontWeight="bold" mb="5px">
            Areas of Excellence:
          </Text>
          <Text color="gray.400">{summaryData.excellence.join(", ")}</Text>
        </Box>
      </VStack>
    </Card>
  );
};
const segmentsData = [
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
];

const BusinessModelSegments = ({ segments = segmentsData }) => {
  return (
    <Card p="20px" color="white" borderRadius="15px" mb="24px" boxShadow="xl">
      <Text fontSize="2xl" fontWeight="bold" mb="20px">
        Business Model Segments
      </Text>
      <VStack align="start" spacing={4}>
        {segments.map((segment, index) => (
          <Box
            key={index}
            p="10px"
            borderWidth="1px"
            borderRadius="8px"
            borderColor="gray.600"
          >
            <Text fontWeight="bold">{segment.title}</Text>
            <Text color="gray.400">{segment.description}</Text>
          </Box>
        ))}
      </VStack>
    </Card>
  );
};
