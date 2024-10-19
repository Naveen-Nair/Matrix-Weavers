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
} from "@chakra-ui/react";

import ChannelBreakdown from "../BuisnessModelGraphs/ChannelBreakdown.js";
import ProductPortfolio from "../BuisnessModelGraphs/ProductPortfolio.js";
import CustomerBreakDown from "../BuisnessModelGraphs/CustomerBreakdown.js";
import MarketingMediaPresence from "views/BuisnessModelGraphs/MarketingBreakdown.js";

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
