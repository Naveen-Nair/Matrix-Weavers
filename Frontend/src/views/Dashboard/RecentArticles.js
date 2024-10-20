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
import 
import { useState, useEffect } from "react";
import ChannelBreakdown from "../graphs/ChannelBreakdown.js";
import ProductPortfolio from "../graphs/ProductPortfolio.js";
import CustomerBreakDown from "../graphs/CustomerBreakdown.js";
import MarketingMediaPresence from "../graphs/MarketingBreakdown.js";
import CompanyDropDown from "../../components/CompanyDropdown/index.js";
import BusinessModelApi from "../apis/businessModelSummary.js";

import Card from "components/Card/Card.js";

export default function BusinessModel() {
  const [selcomp, selectCompany] = useState("reliance");
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    BusinessModelApi().then((data) => {
      setApiData(data);
    });
  }, []);
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Card gridColumn="1 / -1" gridRow="1">
        <CompanyDropDown setSelectedCompany={selectCompany} />
      </Card>
    </Flex>
  );
}
