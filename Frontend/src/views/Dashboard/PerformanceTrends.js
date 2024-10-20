import React, { useEffect, useState } from "react";

// Chakra imports
import { Flex, Text, Box, Stack, Heading, SimpleGrid } from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import fetchRevenueTrendData from "../apis/performanceTrends.js";
import StockLineChart from "../graphs/StockLineChart.js";
import CompanyDropDown from "../../components/CompanyDropdown/index.js";

const PerformanceTrends = () => {
  const [companiesData, setCompaniesData] = useState([]);

  useEffect(() => {
    const fetchAllCompaniesData = async () => {
      const companies = [
        "bajaj",
        "reliance",
        // "vijay_sales",
        // "aditya_vision",
        // "poojara",
      ]; // Add all your company names here
      console.log(companies);
      const allCompaniesData = await Promise.all(
        companies.map((company) => fetchRevenueTrendData(company))
      ).catch((error) => console.error("Error fetching data:", error));
      // console.log(allCompaniesData);
      // Combine the results into a single array
      setCompaniesData(allCompaniesData);
    };

    fetchAllCompaniesData();
  }, []);

  // useEffect(async () => {
  //   console.log(companiesData);
  // }, [companiesData]);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card gridColumn="1 / -1" gridRow="1">
        <CompanyDropDown />
      </Card>
      <PerformanceTrendsSummary />

      {companiesData.length > 0 && (
        <Card p="28px 0px 0px 0px" mt="24px">
          <CardHeader mb="20px" ps="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color="#fff" fontWeight="bold" mb="6px">
                Sales Overview
              </Text>
              <Text fontSize="md" fontWeight="medium" color="gray.400">
                <Text as="span" color="green.400" fontWeight="bold">
                  (+5%) more
                </Text>{" "}
                in 2021
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" minH={{ sm: "300px" }}>
            <StockLineChart lineChartData={companiesData[0]} />
          </Box>
        </Card>
      )}
      <CompanyAnalysis />
    </Flex>
  );
};

export default PerformanceTrends;

const StrategicInitiativesCard = ({
  investments,
  acquisitions,
  partnerships,
}) => {
  return (
    <Card p={4}>
      <Heading fontSize="lg" color="white">
        Strategic Initiatives
      </Heading>
      <Stack spacing={3} mt={4}>
        <Text fontWeight="bold" color="teal.500">
          Investments:
        </Text>
        {investments.map((investment, index) => (
          <Text key={index} color="#fff">
            {investment.year}: {investment.amount} in {investment.focus}
          </Text>
        ))}

        <Text fontWeight="bold" mt={2} color="teal.500">
          Acquisitions:
        </Text>
        {acquisitions.map((acquisition, index) => (
          <Text key={index} color="#fff">
            {acquisition.year}: Acquired {acquisition.company} for{" "}
            {acquisition.value} ({acquisition.sector})
          </Text>
        ))}

        <Text fontWeight="bold" mt={2} color="teal.500">
          Partnerships:
        </Text>
        {partnerships.map((partnership, index) => (
          <Text key={index} color="#fff">
            {partnership.year}: Partnered with {partnership.partner} for{" "}
            {partnership.focus}
          </Text>
        ))}
      </Stack>
    </Card>
  );
};
const FutureOutlookCard = ({
  growthProjections,
  challenges,
  customerSentiment,
  sustainability,
}) => {
  return (
    <Card p={4}>
      <Heading fontSize="lg" color="white">
        Future Outlook
      </Heading>
      <Stack spacing={3} mt={4}>
        <Text fontWeight="bold" color="teal.500">
          Growth Projections:
        </Text>
        {growthProjections.map((projection, index) => (
          <Text key={index} color="#fff">
            {projection.year}: Revenue of {projection.revenue} (
            {projection.growthRate} growth)
          </Text>
        ))}

        <Text fontWeight="bold" mt={2} color="teal.500">
          Challenges:
        </Text>
        {challenges.map((challenge, index) => (
          <Text key={index} color="#fff">
            {challenge}
          </Text>
        ))}

        <Text fontWeight="bold" mt={2} color="teal.500">
          Customer Sentiment:
        </Text>
        <Text color="#fff">Positive: {customerSentiment.positive}</Text>
        <Text color="#fff">Negative: {customerSentiment.negative}</Text>
        <Text color="#fff">Key Feedback: {customerSentiment.keyFeedback}</Text>

        <Text fontWeight="bold" mt={2} color="teal.500">
          Sustainability:
        </Text>
        <Text color="#fff">
          Green Energy Transition: {sustainability.greenEnergyTransition}
        </Text>
        <Text color="#fff">
          Initiatives: {sustainability.majorInitiatives.join(", ")}
        </Text>
      </Stack>
    </Card>
  );
};
const CompanyAnalysis = ({ data = apiData }) => {
  return (
    <Box p={5}>
      <SimpleGrid columns={[1, 2]} spacing={10}>
        <StrategicInitiativesCard
          investments={data.strategicInitiatives.investments}
          acquisitions={data.strategicInitiatives.acquisitions}
          partnerships={data.strategicInitiatives.partnerships}
        />
        <FutureOutlookCard
          growthProjections={data.futureOutlook.growthProjections}
          challenges={data.futureOutlook.challenges}
          customerSentiment={data.futureOutlook.customerSentiment}
          sustainability={data.futureOutlook.sustainability}
        />
      </SimpleGrid>
    </Box>
  );
};

const PerformanceTrendsSummary = ({
  summary = apiData.performanceTrendsSummary,
}) => {
  return (
    <Card p={4} mt={"24px"}>
      <Heading fontSize="lg" color="teal.500">
        Overall Performance Trends
      </Heading>
      <Stack spacing={4} mt={4}>
        {summary.map((paragraph, index) => (
          <Text key={index} color="#fff">
            {paragraph}
          </Text>
        ))}
      </Stack>
    </Card>
  );
};

const apiData = {
  companyName: "Reliance",
  performanceTrendsSummary: [
    "The company's revenue has seen a steady increase over the past year, driven primarily by their expansion into digital markets and strategic partnerships with technology firms. Revenue growth for the year was reported at 15%, indicating strong performance in emerging sectors.",
    "Market share has also grown, now accounting for 28% of the overall e-commerce market. This is largely due to recent acquisitions, which have strengthened the company's presence in key regions.",
    "Profit margins have improved as a result of cost-cutting measures and improved operational efficiencies, with a 12% margin recorded for the last fiscal year.",
    "Additionally, the company has been successful in improving its cost efficiency, reducing operational costs by 5% over the past year, thanks to better supply chain management and automation efforts.",
    "Customer retention remains a strong point, with an 88% retention rate. This is attributed to improved customer service and enhanced digital experiences.",
  ],
  strategicInitiatives: {
    investments: [
      { year: "2023", amount: "2 Billion USD", focus: "E-commerce Platforms" },
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
      keyFeedback: "Strong digital offerings, but logistics needs improvement.",
    },
    sustainability: {
      greenEnergyTransition: "50% by 2025",
      majorInitiatives: [
        "Renewable energy sources",
        "Reduction in carbon footprint",
      ],
    },
  },
};
