// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ChannelBreakdown from "../graphs/ChannelBreakdown.js";
import ProductPortfolio from "../graphs/ProductPortfolio.js";
import CustomerBreakDown from "../graphs/CustomerBreakdown.js";
import MarketingMediaPresence from "../graphs/MarketingBreakdown.js";
import CompanyDropDown from "../../components/CompanyDropdown/index.js";
import {fetchBusinessModelSummary,fetchBusinessData, fetchBusinessInsights} from "../apis/businessModelSummary.js";

import Card from "components/Card/Card.js";

export default function BusinessModel() {
  const [selcomp, selectCompany] = useState("Reliance Digital");
  const [apiData, setApiData] = useState([]);
  const [businessData, setbusinessData] = useState([]);
  const [businessInsights, setbusinessInsights] = useState();


  useEffect(() => {
    fetchBusinessModelSummary().then((data) => {
      setApiData(data);
    });
    fetchBusinessData().then((data) => {
      setbusinessData(data);
    });
    fetchBusinessInsights(selcomp).then((data) => {
      setbusinessInsights(data);
    });
  }, [selcomp]);
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      {apiData && apiData.data && apiData.data.length > 0 && (
        <BusinessModelAnalysis data={apiData.data} />
      )}
      {businessData && businessData.data && businessData.data.channelData && businessData.data.channelData.length>0 && <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
        gap="24px"
      >
       
       <ChannelBreakdown businessData={businessData.data.channelData} />
       <ProductPortfolio businessData={businessData.data.productData}/>
      </Grid>}
      {businessData && businessData.data && businessData.data.channelData && businessData.data.channelData.length>0 && <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
        gap="24px"
      >
        <CustomerBreakDown businessData={businessData.data.customerSegmentData}/>
        <MarketingMediaPresence businessData={businessData.data.marketingData}/>
      </Grid>}
      <Card>
        <Text color="#fff" fontSize="lg" fontWeight="bold" mb="20px">
          Detailed Overview
        </Text>
        <CompanyDropDown setSelectedCompany={selectCompany} />
      </Card>
      {businessInsights && businessInsights[0] && businessInsights[0].summary && businessInsights[0].insights && businessInsights[0].segments &&
        <div>
          <BusinessModelSummary businessInsights={businessInsights[0].summary}/>
          <BusinessModelInsights businessInsights={businessInsights[0].insights}/>
          <BusinessModelSegments businessInsights={businessInsights[0].segments}/>
        </div>
      }
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

const BusinessModelInsights = ({businessInsights }) => {
  const insights = businessInsights;
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

const BusinessModelSummary = ({businessInsights}) => {
  const summaryData = businessInsights;
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

const BusinessModelSegments = ({ businessInsights}) => {
  const segments = businessInsights;
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

// const insightsData = [
//   {
//     title: "Strengths",
//     description:
//       "The company has a strong online presence, leveraging e-commerce platforms effectively to reach a wider audience. Its customer service is rated highly, indicating strong post-sale support.",
//   },
//   {
//     title: "Weaknesses",
//     description:
//       "The company has limited product diversification, heavily relying on electronics, which exposes it to market fluctuations. Additionally, it has fewer affordability options compared to competitors, making it less attractive to budget-conscious customers.",
//   },
//   {
//     title: "Opportunities",
//     description:
//       "There is significant potential for expanding product categories to include more private labels, which can improve margins. Exploring partnerships for financing options can enhance customer appeal.",
//   },
//   {
//     title: "Threats",
//     description:
//       "Increased competition in the online retail space may impact market share. Economic downturns could affect consumer spending in electronics.",
//   },
//   {
//     title: "Learnings from Competitors",
//     description:
//       "The company can learn from competitors like Vijay Sales and Reliance Digital, who have successfully diversified their product offerings and improved their affordability programs. Emphasizing after-sales services similar to Bajaj Electronics could also enhance customer loyalty.",
//   },
// ];

// const summaryDataText = {
//   description:
//     "The company has established a strong market presence by focusing on innovation and customer-centric offerings. With a diversified product portfolio and effective marketing strategies, it continues to attract a wide range of customers.",
//   strengths: [
//     "Diverse product offerings across multiple categories",
//     "Strong digital marketing presence",
//     "Robust supply chain management",
//     "Responsive customer service",
//   ],
//   excellence: [
//     "High customer satisfaction ratings",
//     "Effective use of technology in operations",
//     "Competitive pricing strategies",
//     "Strong after-sales support",
//   ],
// };

// const segmentsData = [
//   {
//     title: "Marketing Strategy & Media Presence",
//     description:
//       "The company focuses heavily on digital marketing strategies, utilizing social media platforms and influencer partnerships to reach a younger audience. However, its traditional media presence is minimal, which could limit exposure to older demographics.",
//   },
//   {
//     title: "Affordability Offerings",
//     description:
//       "The company provides various financing options and exchange programs, making products more accessible to budget-conscious consumers. However, it lacks comprehensive EMI plans compared to competitors, which could enhance its appeal.",
//   },
//   {
//     title: "After-Sales Offerings",
//     description:
//       "After-sales service is strong, with responsive customer service and effective recycling programs in place. However, there is room for improvement in warranty services, which could enhance customer satisfaction.",
//   },
//   {
//     title: "Supply Chain",
//     description:
//       "The company maintains a robust supply chain with reliable supplier relationships, ensuring timely deliveries. However, increasing efficiency in inventory management could further improve delivery promises.",
//   },
//   {
//     title: "Use of Technology",
//     description:
//       "The company has embraced technology by investing in an intuitive e-commerce platform and in-store tech solutions. However, there is potential to enhance customer experience through better mobile app integration and personalized recommendations.",
//   },
// ];
