 
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
	Tr
} from '@chakra-ui/react';
// Styles for the circular progressbar
import medusa from 'assets/img/cardimgfree.png';
// Custom components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import BarChart from 'components/Charts/BarChart';
import LineChart from 'components/Charts/LineChart';
import IconBox from 'components/Icons/IconBox';
// Icons
import { CartIcon, DocumentIcon, GlobeIcon, RocketIcon, StatsIcon, WalletIcon } from 'components/Icons/Icons.js';
import DashboardTableRow from 'components/Tables/DashboardTableRow';
import TimelineRow from 'components/Tables/TimelineRow';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiHappy } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { IoCheckmarkDoneCircleSharp, IoEllipsisHorizontal } from 'react-icons/io5';
// Data
import {
	barChartDataDashboard,
	barChartOptionsDashboard,
	lineChartDataDashboard,
	lineChartOptionsDashboard
} from 'variables/charts';
import { dashboardTableData, timelineData } from 'variables/general';
import MapStateDistrict from "../../components/MapStateDistrict/index.js"
import MapStateHeatMap from "../../components/MapStateHeatMap/index.js"
import CompanyDropDown from "../../components/CompanyDropdown/index.js"

const data = {
	"Andaman & Nicobar Island": {
	  value: 150
	},
	"Andhra Pradesh": {
	  value: 470
	},
	"Arunanchal Pradesh": {
	  value: 248
	},
	Assam: {
	  value: 528
	},
	Bihar: {
	  value: 755
	},
	Chandigarh: {
	  value: 95
	},
	Chhattisgarh: {
	  value: 1700
	},
	Delhi: {
	  value: 1823
	},
	Goa: {
	  value: 508
	},
	Gujarat: {
	  value: 624
	},
	Haryana: {
	  value: 1244
	},
	"Himachal Pradesh": {
	  value: 640
	},
	"Jammu & Kashmir": {
	  value: 566
	},
	Jharkhand: {
	  value: 814
	},
	Karnataka: {
	  value: 2482
	},
	Kerala: {
	  value: 899
	},
	Lakshadweep: {
	  value: 15
	},
	"Madhya Pradesh": {
	  value: 1176
	},
	Maharashtra: {
	  value: 727
	},
	Manipur: {
	  value: 314
	},
	Meghalaya: {
	  value: 273
	},
	Mizoram: {
	  value: 306
	},
	Nagaland: {
	  value: 374
	},
	Odisha: {
	  value: 395
	},
	Puducherry: {
	  value: 245
	},
	Punjab: {
	  value: 786
	},
	Rajasthan: {
	  value: 1819
	},
	Sikkim: {
	  value: 152
	},
	"Tamil Nadu": {
	  value: 2296
	},
	Telangana: {
	  value: 467
	},
	Tripura: {
	  value: 194
	},
	"Uttar Pradesh": {
	  value: 2944
	},
	Uttarakhand: {
	  value: 1439
	},
	"West Bengal": {
	  value: 1321
	}
  }
export default function Dashboard() {
	return (
		<Flex flexDirection='column' pt={{ base: '120px', md: '75px' }} gap="20px">
				<Card>
				<CompanyDropDown />

				</Card>
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }} gap='24px'>
	
				<Card>
					<Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
						Store Distribution
					</Text>
					<MapStateHeatMap data={data} titleText="" legendTitleText="Number of stores deployed" />
				</Card>
			</Grid>
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }} gap='24px'>
	
				<Card>
					<Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
						Customer Feedback Sentiment Distribution
					</Text>
					<MapStateHeatMap data={data} titleText="" legendTitleText="Sentiments analysis" />
				</Card>
			</Grid>
			<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }} gap='24px'>

				<Card>
					<Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
						State Map Data
					</Text>
					<MapStateDistrict />
				</Card>
			</Grid>
		</Flex>
	);
}
