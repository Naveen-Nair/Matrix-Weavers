// Chakra imports
import {
  Flex,
  Grid,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react";
import { useState } from "react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import CompanyDropDown from "../../components/CompanyDropdown/index.js";
import "react-vertical-timeline-component/style.min.css";

export default function StrategicInitiatives() {
  const timeline_data = [
    {
      company: "A",
      title: "Title 1",
      subtitle: "Subtitle 1",
      description: "Description of the milestone",
      indetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      company: "A",
      title: "Title 2",
      subtitle: "Subtitle 2",
      description: "Description of the milestone",
      indetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      company: "A",
      title: "Title 3",
      subtitle: "Subtitle 3",
      description: "Description of the milestone",
      indetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      company: "A",
      title: "Title 4",
      subtitle: "Subtitle 4",
      description: "Description of the milestone",
      indetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];
  const [initiative, setInitiative] = useState(0);

  const strategic_table = [
    {
      company: "A",
      investment_area: "Supply Chain",
      year: 2023,
      amount_invested: "$100M",
      expected_impact: "10% cost savings",
    },
    {
      company: "A",
      investment_area: "Technology Upgrades",
      year: 2022,
      amount_invested: "$200M",
      expected_impact: "Faster deliveries",
    },
    {
      company: "A",
      investment_area: "Marketing",
      year: 2023,
      amount_invested: "$50M",
      expected_impact: "Increased reach",
    },
    {
      company: "A",
      investment_area: "Customer Service",
      year: 2022,
      amount_invested: "$30M",
      expected_impact: "Improved customer satisfaction",
    },
    {
      company: "A",
      investment_area: "Store Expansion",
      year: 2021,
      amount_invested: "$40M",
      expected_impact: "25 new stores opened",
    },
    {
      company: "A",
      investment_area: "Private Labels",
      year: 2023,
      amount_invested: "$70M",
      expected_impact: "Increased profit margins by 12%",
    },
    {
      company: "A",
      investment_area: "E-commerce Platform",
      year: 2023,
      amount_invested: "$150M",
      expected_impact: "Enhanced online customer experience",
    },
    {
      company: "A",
      investment_area: "Sustainability Initiatives",
      year: 2022,
      amount_invested: "$60M",
      expected_impact: "Reduced carbon footprint by 15%",
    },
    {
      company: "A",
      investment_area: "AI-based Customer Insights",
      year: 2021,
      amount_invested: "$90M",
      expected_impact: "Optimized marketing campaigns",
    },
  ];

  function initiativeClick(key) {
    setInitiative(key);
  }

  useEffect(() => {}, [initiative]);

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", md: "2fr 1fr", "2xl": "2fr 1fr" }} // 2:1 width ratio
        templateRows={{ sm: "auto", md: "auto auto" }} // Two rows for the long box and the stacked boxes
        gap="18px"
      >
        {/* Welcome Card */}
        <Card gridColumn="1 / -1" gridRow="1">
          <CompanyDropDown />
        </Card>

        {/* Satisfaction Rate */}
        <Card
          p="0px"
          // gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
          // bgImage={medusa}
          gridColumn={{ md: "1 / 2" }}
          gridRow="3 / 4"
          bgSize="cover"
          bgPosition="50%"
          padding="20px"
        >
          <CardBody w="100%" h="100%" display="flex" flexDirection="column">
            <Text color="#fff" fontSize="1.9em" fontWeight="bold" mb="20px">
              {timeline_data[initiative].title}
            </Text>
            <Text color="gray.400" fontSize="1.2em">
              {timeline_data[initiative].indetail}
            </Text>
          </CardBody>
        </Card>

        <Card p="10px" gridColumn={{ md: "1 / 2" }} gridRow="2 / 3">
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Investment Area
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Year
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Amount Invested
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Expected Impacted
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {strategic_table.map((company, index) => (
                <Tr key={index}>
                  <Td
                    ps="0px"
                    color="#fff"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company.investment_area}
                  </Td>
                  <Td
                    color="gray.400"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company.year}
                  </Td>
                  <Td
                    color="gray.400"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company.amount_invested}
                  </Td>
                  <Td
                    color="gray.400"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company.expected_impact}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Card>

        {/* Referral Tracking */}
        <Card gridColumn={{ md: "2 / 3" }} gridRow="2 / 4">
          <VerticalTimeline>
            {timeline_data.map((company, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                iconOnClick={() => {
                  initiativeClick(index);
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  {company["title"]}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {company["subtitle"]}
                </h4>
                <p>{company["description"]}</p>
              </VerticalTimelineElement>
            ))}

            {/* More VerticalTimelineElement components */}
          </VerticalTimeline>
        </Card>
      </Grid>

      {/* Active Users */}
    </Flex>
  );
}
