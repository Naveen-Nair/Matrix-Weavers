import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Icon,
  Text,
  Stack,
  Table,
  Th,
  Tr,
  Td,
  Thead,
  Tbody,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

// Images
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { BiHappy } from "react-icons/bi";
import CommentsRow from "components/Tables/CommentsRow";
import MapStateHeatMap from "../../components/MapStateHeatMap/index.js";
import CompanyDropDown from "../../components/CompanyDropdown/index.js";

import { FaRegCalendarAlt } from "react-icons/fa";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";

function CustomerFeedback() {
  const feedbackData = [
    {
      name: "Reliance Digital",
      totalReviews: 1200,
      averageReviewScore: 4.2,
      nps: 72,
      customerSatisfaction: "High",
      positiveSentiment: 85,
      customerServiceRating: 4.1,
      feedbackHighlight:
        "Customers appreciate the vast range of products and competitive pricing. Many customers highlight the knowledgeable staff and prompt in-store assistance.",
      improvementAreas:
        "Many reviews mention the need for faster after-sales service, especially for high-value items. Delivery times for online orders could also be improved.",
    },
    {
      name: "Vijay Sales",
      totalReviews: 900,
      averageReviewScore: 3.8,
      nps: 68,
      customerSatisfaction: "Moderate",
      positiveSentiment: 78,
      customerServiceRating: 3.7,
      feedbackHighlight:
        "Vijay Sales is praised for its festive season discounts and offers. Customers also appreciate the easy return policy and store layout.",
      improvementAreas:
        "There are frequent complaints about delayed deliveries for online orders and a need for more proactive customer support for technical issues.",
    },
    {
      name: "Aditya Vision",
      totalReviews: 600,
      averageReviewScore: 3.9,
      nps: 65,
      customerSatisfaction: "Moderate",
      positiveSentiment: 75,
      customerServiceRating: 3.6,
      feedbackHighlight:
        "Customers are satisfied with the in-store shopping experience and appreciate the personalized service provided by the staff in smaller stores.",
      improvementAreas:
        "Limited product variety and geographic reach are common concerns. Customers suggest expanding the store network and product offerings, particularly in smaller cities.",
    },
    {
      name: "Poojara",
      totalReviews: 500,
      averageReviewScore: 3.7,
      nps: 63,
      customerSatisfaction: "Moderate",
      positiveSentiment: 70,
      customerServiceRating: 3.5,
      feedbackHighlight:
        "The compact store size is appreciated by customers looking for a quick shopping experience. Good customer service is often mentioned.",
      improvementAreas:
        "More spacious stores and better organization of product displays are suggested. Some customers also highlight a need for better promotional offers.",
    },
    {
      name: "Bajaj Electronics",
      totalReviews: 1000,
      averageReviewScore: 4.0,
      nps: 70,
      customerSatisfaction: "High",
      positiveSentiment: 82,
      customerServiceRating: 4.0,
      feedbackHighlight:
        "Bajaj Electronics receives positive feedback for its seamless online experience, especially for tech-savvy customers. Pricing transparency is also praised.",
      improvementAreas:
        "Improved customer service in physical stores is often suggested, especially during peak hours. There are also recommendations for adding more in-store product demonstrations.",
    },
  ];

  const newestComments = [
    {
      id: 1,
      name: "John Doe",
      logo: "path/to/logo1.svg", // Replace with actual logo paths
      date: "2024-10-19",
      sentiment: "positive",
      summary: "Great service and quick delivery!",
    },
    {
      id: 2,
      name: "Jane Smith",
      logo: "path/to/logo2.svg", // Replace with actual logo paths
      date: "2024-10-18",
      sentiment: "neutral",
      summary: "The product was okay, not what I expected.",
    },
    {
      id: 3,
      name: "Raj Patel",
      logo: "path/to/logo3.svg", // Replace with actual logo paths
      date: "2024-10-17",
      sentiment: "negative",
      summary: "Very disappointed with the quality.",
    },
    {
      id: 4,
      name: "Emily Johnson",
      logo: "path/to/logo4.svg", // Replace with actual logo paths
      date: "2024-10-16",
      sentiment: "positive",
      summary: "Loved the new features, very user-friendly!",
    },
    {
      id: 5,
      name: "Suresh Kumar",
      logo: "path/to/logo5.svg", // Replace with actual logo paths
      date: "2024-10-15",
      sentiment: "negative",
      summary: "Had issues with customer support.",
    },
  ];
  const olderComments = [
    {
      id: 6,
      name: "Alice Williams",
      logo: "path/to/logo6.svg", // Replace with actual logo paths
      date: "2024-10-14",
      sentiment: "positive",
      summary: "Fantastic experience, highly recommend!",
    },
    {
      id: 7,
      name: "David Brown",
      logo: "path/to/logo7.svg", // Replace with actual logo paths
      date: "2024-10-13",
      sentiment: "neutral",
      summary: "Average service, nothing exceptional.",
    },
    {
      id: 8,
      name: "Priya Singh",
      logo: "path/to/logo8.svg", // Replace with actual logo paths
      date: "2024-10-12",
      sentiment: "negative",
      summary: "Received a damaged product, not happy.",
    },
  ];

  const data = {
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
  };
  const overallSatisfactonRate = 80;
  const selectedCompany = {
    name: "Reliance Digital",
    feedbackHighlights: [
      "Customers appreciate the vast range of products.",
      "Competitive pricing is a key strength.",
      "Staff is knowledgeable and helpful.",
      "In-store assistance is highly rated.",
    ],
    improvementAreas: [
      "After-sales service, particularly for high-value items, needs improvement.",
      "Faster delivery for online orders is recommended.",
      "Improving product availability in specific regions would be beneficial.",
    ],
  };

  const dateRange = "17 - 20/10/2024";
  return (
    <Flex
      direction="column"
      pt={{ base: "120px", md: "75px" }}
      mx="auto"
      mb="40px"
      gap="40px"
    >
      <CustomerFeedbackAnalysis feedbackData={feedbackData} />
      <Card>
        <Text color="#fff" fontSize="lg" fontWeight="bold">
          Detailed Overview
        </Text>
        <CompanyDropDown />
      </Card>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        gap="24px"
      >
        <Card>
          <Text color="#fff" fontSize="lg" fontWeight="bold" mb="4px">
            Customer Feedback Sentiment Distribution
          </Text>
          <MapStateHeatMap
            data={data}
            titleText=""
            legendTitleText="Sentiments analysis"
          />
        </Card>
        <div>
          <Card gridArea={{ md: "2 / 1 / 3 / 2", "2xl": "auto" }}>
            <CardHeader mb="24px">
              <Flex direction="column">
                <Text color="#fff" fontSize="lg" fontWeight="bold" mb="4px">
                  Overall Satisfaction Rate
                </Text>
                <Text color="gray.400" fontSize="sm">
                  Across all regions
                </Text>
              </Flex>
            </CardHeader>
            <Flex direction="column" justify="center" align="center">
              <Box zIndex="-1">
                <CircularProgress
                  size={200}
                  value={overallSatisfactonRate}
                  thickness={6}
                  color="#582CFF"
                  variant="vision"
                  rounded
                >
                  <CircularProgressLabel>
                    <IconBox
                      mb="20px"
                      mx="auto"
                      bg="brand.200"
                      borderRadius="50%"
                      w="48px"
                      h="48px"
                    >
                      <Icon as={BiHappy} color="#fff" w="30px" h="30px" />
                    </IconBox>
                  </CircularProgressLabel>
                </CircularProgress>
              </Box>
              <Stack
                direction="row"
                spacing={{ sm: "42px", md: "68px" }}
                justify="center"
                maxW={{ sm: "270px", md: "300px", lg: "100%" }}
                mx={{ sm: "auto", md: "0px" }}
                p="18px 22px"
                bg="linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgba(10, 14, 35) 91.2%)"
                borderRadius="20px"
                position="absolute"
                bottom="5%"
              >
                <Text fontSize="xs" color="gray.400">
                  0%
                </Text>
                <Flex direction="column" align="center" minW="80px">
                  <Text color="#fff" fontSize="28px" fontWeight="bold">
                    {overallSatisfactonRate}%
                  </Text>
                  <Text fontSize="xs" color="gray.400">
                    Based on likes
                  </Text>
                </Flex>
                <Text fontSize="xs" color="gray.400">
                  100%
                </Text>
              </Stack>
            </Flex>
          </Card>
          <Card my="24px">
            <CardHeader mb="12px">
              <Flex direction="column" w="100%">
                <Flex
                  direction={{ sm: "column", lg: "row" }}
                  justify={{ sm: "center", lg: "space-between" }}
                  align={{ sm: "center" }}
                  w="100%"
                  my={{ md: "12px" }}
                >
                  <Text
                    color="#fff"
                    fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                    fontWeight="bold"
                  >
                    Recently Scraped Comments
                  </Text>
                  <Flex align="center">
                    <Icon
                      as={FaRegCalendarAlt}
                      color="gray.400"
                      w="15px"
                      h="15px"
                      me="6px"
                    />
                    <Text color="gray.400" fontSize="sm">
                      {dateRange}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex direction="column" w="100%">
                <Text color="gray.400" fontSize="xs" mb="18px">
                  NEWEST
                </Text>
                {newestComments.map((comment) => {
                  return (
                    <CommentsRow
                      key={comment.id} // Assuming comment has a unique id
                      name={comment.name}
                      logo={comment.logo}
                      date={comment.date}
                      sentiment={comment.sentiment} // Assume sentiment is a string (e.g., 'positive', 'negative', 'neutral')
                      summary={comment.summary} // Short summary from sentiment analysis
                    />
                  );
                })}
                <Text color="gray.400" fontSize="xs" my="18px">
                  OLDER
                </Text>
                {olderComments.map((comment) => {
                  return (
                    <CommentsRow
                      key={comment.id} // Assuming comment has a unique id
                      name={comment.name}
                      logo={comment.logo}
                      date={comment.date}
                      sentiment={comment.sentiment}
                      summary={comment.summary}
                    />
                  );
                })}
              </Flex>
            </CardBody>
          </Card>
        </div>
      </Grid>
      <Card>
        <FeedbackActionPoints selectedCompany={selectedCompany} />
      </Card>
    </Flex>
  );
}

export default CustomerFeedback;

const CustomerFeedbackAnalysis = ({ feedbackData }) => {
  return (
    <Card
      p="20px"
      // bg="gray.700"
      borderRadius="15px"
      mb="24px"
      color="white"
      boxShadow="xl"
      overflowX="auto" // Enables horizontal scrolling
    >
      <Text fontSize="2xl" fontWeight="bold" mb="20px">
        Customer Feedback Analysis
      </Text>

      <Table variant="simple" colorScheme="teal">
        <Thead>
          <Tr>
            <Th color="gray.400" borderBottomColor="gray.600">
              Metric
            </Th>
            {feedbackData.map((company, index) => (
              <Th key={index} color="gray.400" borderBottomColor="gray.600">
                {company.name}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {/* Total Reviews */}
          <Tr>
            <Td>Total Reviews</Td>
            {feedbackData.map((company, index) => (
              <Td key={index}>{company.totalReviews}</Td>
            ))}
          </Tr>
          {/* Average Review Score */}
          <Tr>
            <Td>Average Review Score</Td>
            {feedbackData.map((company, index) => (
              <Td key={index}>{company.averageReviewScore} / 5</Td>
            ))}
          </Tr>
          {/* Net Promoter Score (NPS) */}
          <Tr>
            <Td>Net Promoter Score (NPS)</Td>
            {feedbackData.map((company, index) => (
              <Td key={index}>{company.nps}</Td>
            ))}
          </Tr>
          {/* Customer Satisfaction */}
          <Tr>
            <Td>Customer Satisfaction</Td>
            {feedbackData.map((company, index) => (
              <Td key={index}>{company.customerSatisfaction}</Td>
            ))}
          </Tr>
          {/* Positive Sentiment */}
          <Tr>
            <Td>Positive Sentiment (%)</Td>
            {feedbackData.map((company, index) => (
              <Td key={index}>{company.positiveSentiment}%</Td>
            ))}
          </Tr>
          {/* Customer Service Rating */}
          <Tr>
            <Td>Customer Service Rating</Td>
            {feedbackData.map((company, index) => (
              <Td key={index}>{company.customerServiceRating} / 5</Td>
            ))}
          </Tr>
          {/* Feedback Highlights */}
          <Tr>
            <Td>Feedback Highlights</Td>
            {feedbackData.map((company, index) => (
              <Td key={index}>{company.feedbackHighlight}</Td>
            ))}
          </Tr>
          {/* Improvement Areas */}
          <Tr>
            <Td>Improvement Areas</Td>
            {feedbackData.map((company, index) => (
              <Td key={index}>{company.improvementAreas}</Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
    </Card>
  );
};

const FeedbackActionPoints = ({ selectedCompany }) => {
  return (
    <Box p="20px" borderRadius="15px" mb="24px" color="white" boxShadow="xl">
      <Text fontSize="2xl" fontWeight="bold" mb="20px">
        Action Points from Customer Feedback
      </Text>

      {/* Feedback Highlights */}
      <Text fontSize="lg" fontWeight="bold" mb="10px" color="green.300">
        Feedback Highlights:
      </Text>
      <UnorderedList spacing={3}>
        {selectedCompany.feedbackHighlights.map((highlight, index) => (
          <ListItem key={index}>{highlight}</ListItem>
        ))}
      </UnorderedList>

      {/* Improvement Areas */}
      <Text fontSize="lg" fontWeight="bold" mt="20px" mb="10px" color="red.300">
        Areas for Improvement:
      </Text>
      <UnorderedList spacing={3}>
        {selectedCompany.improvementAreas.map((area, index) => (
          <ListItem key={index}>{area}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
