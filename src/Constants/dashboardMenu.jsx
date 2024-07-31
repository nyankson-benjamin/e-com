import WidgetsIcon from "@mui/icons-material/Widgets";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

import Dashboard from "../components/DashBoard/Components/Dashboard";
import Analytics from "../components/DashBoard/Components/Analytics";
import Invoices from "../components/DashBoard/Components/Users";
import Notification from "../components/DashBoard/Components/Notification";
import Settings from "../components/DashBoard/Components/Settings";
import Calendar from "../components/DashBoard/Components/Calendar";
import Messages from "../components/DashBoard/Components/Messages";
import Schedule from "../components/DashBoard/Components/Schedule";

export const dashBoardMenu = [
  {
    id: 1,
    title: "Dashboard",
    component: <Dashboard />,
    icon: <WidgetsIcon />,
  },
  {
    id: 2,
    title: "Analytics",
    component: <Analytics />,
    icon: <BarChartIcon />,
  },
  {
    id: 3,
    title: "Users",
    component: <Invoices />,
    icon: <SupervisedUserCircleIcon />,
  },
  {
    id: 4,
    title: "Schedule",
    component: <Schedule />,
    icon: <HistoryToggleOffIcon />,
  },
  {
    id: 5,
    title: "Calendar",
    component: <Calendar />,
    icon: <CalendarMonthIcon />,
  },
  {
    id: 6,
    title: "Messages",
    component: <Messages />,
    icon: <MessageIcon />,
  },
  {
    id: 7,
    title: "Notification",
    component: <Notification />,
    icon: <NotificationsNoneIcon />,
  },
  {
    id: 8,
    title: "Settings",
    component: <Settings />,
    icon: <SettingsIcon />,
  },
];
