// import
import BusinessModel from "views/Dashboard/BusinessModel.js";
import PerformanceTrends from "views/Dashboard/PerformanceTrends.js";
import CustomerFeedback from "views/Dashboard/CustomerFeedback.js";
import GeogrpahicalCoverage from "views/Dashboard/Geography.js";
import StrategicInitiatives from "views/Dashboard/StrategicInitiatives.js";
// import Profile from "views/Dashboard/Profile.js";
// import SignIn from "views/Pages/SignIn.js";
// import SignUp from "views/Pages/SignUp.js";

import { HomeIcon, StatsIcon, CreditIcon } from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/BusinessModel",
    name: "Business Model",
    icon: <HomeIcon color="inherit" />,
    component: BusinessModel,
    layout: "/admin",
  },
  {
    path: "/GeographicalCoverage",
    name: "Geographical Presence",
    icon: <CreditIcon color="inherit" />,
    component: GeogrpahicalCoverage,
    layout: "/admin",
  },
  {
    path: "/PerformanceTrends",
    name: "Performance Trends",
    icon: <StatsIcon color="inherit" />,
    component: PerformanceTrends,
    layout: "/admin",
  },
  {
    path: "/CustomerFeedback",
    name: "Customer Feedback",
    icon: <CreditIcon color="inherit" />,
    component: CustomerFeedback,
    layout: "/admin",
  },
  {
    path: "/StrategicInitiatives",
    name: "Strategic Initiatives",
    icon: <CreditIcon color="inherit" />,
    component: StrategicInitiatives,
    layout: "/admin",
  },

  // {
  //   name: "ACCOUNT PAGES",
  //   category: "account",
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/profile",
  //       name: "Profile",
  //       icon: <PersonIcon color='inherit' />,
  //       secondaryNavbar: true,
  //       component: Profile,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/signin",
  //       name: "Sign In",
  //       icon: <DocumentIcon color='inherit' />,
  //       component: SignIn,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/signup",
  //       name: "Sign Up",
  //       icon: <RocketIcon color='inherit' />,
  //       secondaryNavbar: true,
  //       component: SignUp,
  //       layout: "/auth",
  //     },
  //   ],
  // },
];
export default dashRoutes;
