import {
  Flex,
  Grid,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Td,
  Tr,
  VStack,
  Box,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";
import MapStateHeatMap from "../../components/MapStateHeatMap/index.js";
import CompanyDropDown from "../../components/CompanyDropdown/index.js";
import { useState, useEffect } from "react";
import {
  fetchgeographicaldata,
  fetchcompanyOverview,
} from "views/apis/goegraphical_presence.js";
const apiData = {
  summary:
    "Croma currently operates in 5 states with a total of 10 stores. The company holds a market share of 12%, with its strongest presence in regions such as 15. Over the past year, it has experienced a growth rate of 5%. Croma currently operates in 5 states with a total of 10 stores.  The company holds a market share of 12%, with its strongest presence in regions such as 15.  Over the past year, it has experienced a growth rate of 5%.",
  suggestions:
    "Croma should consider increasing its store presence in underperforming regions like . There's also a growth opportunity in , where competitors like   hold significant market share. Furthermore, by adopting new formats or focusing on high-demand categories,  Croma could challenge the largest competitors such as . Croma should consider increasing its store presence in underperforming regions like .  There's also a growth opportunity in , where competitors like   hold significant market share. Furthermore, by adopting new formats or focusing on high-demand categories,  Croma could challenge the largest competitors such as .",
  data: {
    "Andaman & Nicobar Island": {
      value: 150,
    },
    "Andhra Pradesh": {
      value: 470,
    },
    "Arunanchal Pradesh": {
      value: 248,
    },
    Assam: {
      value: 528,
    },
    Bihar: {
      value: 755,
    },
    Chandigarh: {
      value: 95,
    },
    Chhattisgarh: {
      value: 1700,
    },
    Delhi: {
      value: 1823,
    },
    Goa: {
      value: 508,
    },
    Gujarat: {
      value: 624,
    },
    Haryana: {
      value: 1244,
    },
    "Himachal Pradesh": {
      value: 640,
    },
    "Jammu & Kashmir": {
      value: 566,
    },
    Jharkhand: {
      value: 814,
    },
    Karnataka: {
      value: 2482,
    },
    Kerala: {
      value: 899,
    },
    Lakshadweep: {
      value: 15,
    },
    "Madhya Pradesh": {
      value: 1176,
    },
    Maharashtra: {
      value: 727,
    },
    Manipur: {
      value: 314,
    },
    Meghalaya: {
      value: 273,
    },
    Mizoram: {
      value: 306,
    },
    Nagaland: {
      value: 374,
    },
    Odisha: {
      value: 395,
    },
    Puducherry: {
      value: 245,
    },
    Punjab: {
      value: 786,
    },
    Rajasthan: {
      value: 1819,
    },
    Sikkim: {
      value: 152,
    },
    "Tamil Nadu": {
      value: 2296,
    },
    Telangana: {
      value: 467,
    },
    Tripura: {
      value: 194,
    },
    "Uttar Pradesh": {
      value: 2944,
    },
    Uttarakhand: {
      value: 1439,
    },
    "West Bengal": {
      value: 1321,
    },
  },
};
const companiesData = [
  {
    name: "Reliance Digital",
    numberOfStates: 15,
    storeCount: 200,
    storesRented: 120,
    storesOwned: 80,
    storeFormats: ["Retail", "Warehouse"],
  },
  {
    name: "Vijay Sales",
    numberOfStates: 10,
    storeCount: 150,
    storesRented: 90,
    storesOwned: 60,
    storeFormats: ["Retail"],
  },
  {
    name: "Aditya Vision",
    numberOfStates: 8,
    storeCount: 100,
    storesRented: 50,
    storesOwned: 50,
    storeFormats: ["Retail", "Franchise"],
  },
  {
    name: "Poojara",
    numberOfStates: 12,
    storeCount: 120,
    storesRented: 70,
    storesOwned: 50,
    storeFormats: ["Retail", "Outlet"],
  },
  {
    name: "Bajaj Electronics",
    numberOfStates: 14,
    storeCount: 180,
    storesRented: 100,
    storesOwned: 80,
    storeFormats: ["Retail", "E-commerce"],
  },
];

export default function Dashboard() {
  const [selcomp, selectCompany] = useState("Reliance Digital");
  const [geographyData, setgeographyData] = useState([]);
  const [companyOverviewData, setcompanyOverviewData] = useState([]);

  useEffect(() => {
    fetchgeographicaldata(selcomp).then((data) => {
      // console.log(data[0].data);
      setgeographyData(data);
    });
    fetchcompanyOverview().then((data) => {
      // console.log(data);
      setcompanyOverviewData(data);
    });
  }, [selcomp]);

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }} gap="20px">
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="lg" color="#fff" fontWeight="bold">
            Companies Overview
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Company Name
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Number of States
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Store Count
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Stores Rented
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Stores Owned
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Store Formats
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {companiesData.map((company, index) => (
                <Tr key={index}>
                  <Td
                    ps="0px"
                    color="#fff"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company.name}
                  </Td>
                  <Td
                    color="gray.400"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company.numberOfStates}
                  </Td>
                  <Td
                    color="gray.400"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company.storeCount}
                  </Td>
                  <Td
                    color="gray.400"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company.storesRented}
                  </Td>
                  <Td
                    color="gray.400"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company.storesOwned}
                  </Td>
                  <Td
                    color="gray.400"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company.storeFormats.join(", ")}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>

      <Card>
        <Text color="#fff" fontSize="lg" fontWeight="bold" mb="20px">
          Detailed Overview
        </Text>
        <CompanyDropDown setSelectedCompany={selectCompany} />
      </Card>
      {geographyData && geographyData[0] && (
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
          gap="24px"
        >
          <Card>
            <Text color="#fff" fontSize="lg" fontWeight="bold" mb="4px">
              Store Distribution
            </Text>
            <MapStateHeatMap
              data={geographyData[0].data}
              titleText=""
              legendTitleText="Number of stores deployed"
            />
          </Card>
          <div>
            <SuggestionsCard geoData={geographyData[0].suggestions} />
            <InsightsSummary
              geoData={geographyData[0].performanceTrendsSummary}
            />
          </div>
        </Grid>
      )}
    </Flex>
  );
}

function InsightsSummary({ geoData }) {
  const insights = geoData;
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
        Insights
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
            {/* <Text fontWeight="bold">{item.title}</Text> */}
            <Text color="gray.400">{item}</Text>
          </Box>
        ))}
      </VStack>
    </Card>
  );
}

function SuggestionsCard({ geoData }) {
  const suggestions = geoData;

  return (
    <Card>
      <Text color="#fff" fontSize="lg" fontWeight="bold" mb="20px">
        Strategic Suggestions
      </Text>
      <Text color="gray.400" fontSize="md">
        {suggestions}
      </Text>
    </Card>
  );
}
