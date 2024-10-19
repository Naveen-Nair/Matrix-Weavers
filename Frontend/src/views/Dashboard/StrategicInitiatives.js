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
// Styles for the circular progressbar
import medusa from "assets/img/cardimgfree.png";
import {useState} from "react"
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiHappy } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import {
  IoCheckmarkDoneCircleSharp,
  IoEllipsisHorizontal,
} from "react-icons/io5";
// Data
import {
  barChartDataDashboard,
  barChartOptionsDashboard,
  lineChartDataDashboard,
  lineChartOptionsDashboard,
} from "variables/charts";
import { dashboardTableData, timelineData } from "variables/general";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import CompanyDropDown from "../../components/CompanyDropdown/index.js";
import 'react-vertical-timeline-component/style.min.css';


export default function StrategicInitiatives() {

  const timeline_data = [{"key":1, "title":"Title 1", "subtitle": "Subtitle 1", "description": "Description of the milestone", "indetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}, {"key":2, "title":"Title 2", "subtitle": "Subtitle 2", "description": "Description of the milestone", "indetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}, {"key":3, "title":"Title 3", "subtitle": "Subtitle 3", "description": "Description of the milestone", "indetail":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}, {"key":4, "title":"Title 4", "subtitle": "Subtitle 4", "description": "Description of the milestone", "indetail":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}]
  const [initiative, setInitiative] = useState(0)

  const strategic_table = [
    {
      "Retailer": "Croma",
      "Investment Area": "Supply Chain",
      "Year": 2023,
      "Amount Invested": "$100M",
      "Expected Impact": "10% cost savings"
    },
    {
      "Retailer": "Reliance Digital",
      "Investment Area": "Technology Upgrades",
      "Year": 2022,
      "Amount Invested": "$200M",
      "Expected Impact": "Faster deliveries"
    },
    {
      "Retailer": "Vijay Sales",
      "Investment Area": "Marketing",
      "Year": 2023,
      "Amount Invested": "$50M",
      "Expected Impact": "Increased reach"
    },
    {
      "Retailer": "Bajaj Electronics",
      "Investment Area": "Customer Service",
      "Year": 2022,
      "Amount Invested": "$30M",
      "Expected Impact": "Improved customer satisfaction"
    },
    {
      "Retailer": "Poojara",
      "Investment Area": "Store Expansion",
      "Year": 2021,
      "Amount Invested": "$40M",
      "Expected Impact": "25 new stores opened"
    },
    {
      "Retailer": "Aditya Vision",
      "Investment Area": "Private Labels",
      "Year": 2023,
      "Amount Invested": "$70M",
      "Expected Impact": "Increased profit margins by 12%"
    },
    {
      "Retailer": "Reliance Digital",
      "Investment Area": "E-commerce Platform",
      "Year": 2023,
      "Amount Invested": "$150M",
      "Expected Impact": "Enhanced online customer experience"
    },
    {
      "Retailer": "Croma",
      "Investment Area": "Sustainability Initiatives",
      "Year": 2022,
      "Amount Invested": "$60M",
      "Expected Impact": "Reduced carbon footprint by 15%"
    },
    {
      "Retailer": "Vijay Sales",
      "Investment Area": "AI-based Customer Insights",
      "Year": 2021,
      "Amount Invested": "$90M",
      "Expected Impact": "Optimized marketing campaigns"
    }
  ]
  

  function initiativeClick(key){
    setInitiative(key);
  }

  useEffect(()=>{

  }, [initiative])









  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", md: "2fr 1fr", "2xl": "2fr 1fr" }} // 2:1 width ratio
        templateRows={{ sm: "auto", md: "auto auto" }} // Two rows for the long box and the stacked boxes
        gap="18px"
      >
        {/* Welcome Card */}
        <Card gridColumn="1 / -1" gridRow="1">
          <CompanyDropDown/>
        </Card>
        
        {/* Satisfaction Rate */}
        <Card
          p="0px"
          // gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
          // bgImage={medusa}
          gridColumn={{ md: "1 / 2" }} gridRow="3 / 4"
          bgSize="cover"
          bgPosition="50%"
          padding="20px"
        >
          <CardBody w="100%" h="100%" display="flex" flexDirection="column">
          <Text color="#fff" fontSize="1.9em" fontWeight="bold" mb="20px">
            {timeline_data[initiative]["title"]}
          </Text>
          <Text color="gray.400" fontSize="1.2em">
            {timeline_data[initiative]["indetail"]}
          </Text>
          </CardBody>
        </Card>

        <Card p="10px" gridColumn={{ md: "1 / 2" }} gridRow="2 / 3">
        <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400" >
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
                    {company["Investment Area"]}
                  </Td>
                  <Td
                    color="gray.400"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company["Year"]}
                  </Td>
                  <Td
                    color="gray.400"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company["Amount Invested"]}
                  </Td>
                  <Td
                    color="gray.400"
                    fontFamily="Plus Jakarta Display"
                    borderBottomColor="#56577A"
                  >
                    {company["Expected Impact"]}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          
        </Card>
        
        {/* Referral Tracking */}
        <Card  gridColumn={{ md: "2 / 3" }} gridRow="2 / 4">
        
        <VerticalTimeline>
          { timeline_data.map((company, index) => (
            <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            iconOnClick={()=>{initiativeClick(index)}}
          >
            <h3 className="vertical-timeline-element-title">{company["title"]}</h3>
            <h4 className="vertical-timeline-element-subtitle">{company["subtitle"]}</h4>
            <p>
              {company["description"]}
            </p>
          
          </VerticalTimelineElement>
          ))

          }

{/* More VerticalTimelineElement components */}

</VerticalTimeline>
        </Card>

        

        


      </Grid>
      
        
        {/* Active Users */}
        
    </Flex>
  );
}
