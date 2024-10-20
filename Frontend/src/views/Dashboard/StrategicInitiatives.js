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
import 'react-vertical-timeline-component/style.min.css';
import fetchInitiativesTables from "views/apis/initiativesTable.js";
import fetchInitiativesTimeline from "views/apis/initiativesTimeline.js";

export default function StrategicInitiatives() {
  const [initiative, setInitiative] = useState(0);
  const [selcomp, selectCompany] = useState("Poojara");
  const [tablelist, setTablelist] = useState([]);
  const [timelinelist, setTimelinelist] = useState([{title:"test", indetail:"test"}]);

  function fetchTables(){
    fetchInitiativesTables().then((res)=>{
      console.log(res)
      const t = res;
      let i=0
      for(i = 0; i<res.length; i++){
        t[i]["key"] = i;
      }
      setTablelist(res)
      // console.log(t)
    }).catch((err)=>{
      console.log(err)
    })
  }

  function fetchTimelines(){
    fetchInitiativesTimeline().then((res)=>{
      console.log(res)
      setTimelinelist(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    fetchTables()
    fetchTimelines()
  }, [initiative])
  

  function initiativeClick(key) {
    setInitiative(key);
  }

  









  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", md: "2fr 1fr", "2xl": "2fr 1fr" }} // 2:1 width ratio
        templateRows={{ sm: "auto", md: "auto auto" }} // Two rows for the long box and the stacked boxes
        gap="18px"
      >
        {/* Welcome Card */}
        <Card gridColumn="1 / -1" gridRow="1">
          <CompanyDropDown setSelectedCompany={selectCompany}/>
        </Card>

        {/* Satisfaction Rate */}
        {/* <Card
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
            {timelinelist && timelinelist.length>initiative} ? <>
          <Text color="#fff" fontSize="1.9em" fontWeight="bold" mb="20px">
          {console.log(timelinelist.length)}  {timelinelist.length>0} ?{timelinelist[initiative].title}:{}
          </Text>
          <Text color="gray.400" fontSize="1.2em">
            {timelinelist.length>0} ? {timelinelist[initiative].indetail}:{}
          </Text></>:<></> 
          </CardBody>
        </Card> */}

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
              {tablelist.length>0 && tablelist.map((company, index) => (
                company.company == selcomp ?
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
                </Tr> : <></>
              ))}
            </Tbody>
          </Table>
        </Card>

        {/* Referral Tracking */}
        <Card  gridColumn={{ md: "2 / 3" }} gridRow="2 / 4">
        
        <VerticalTimeline>
          {timelinelist.length>0 && timelinelist.map((company, index) => (
            company.company == selcomp ?
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
          
          </VerticalTimelineElement> : <></>
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
