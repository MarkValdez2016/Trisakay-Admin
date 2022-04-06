import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import UserManagement from "layouts/pages/user/index";
import Icon from "@mui/material/Icon";
import SignIn from "layouts/authentication/sign-in";
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },

  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Driver",
    key: "user-management",
    icon: <Icon fontSize="small">User Management</Icon>,
    route: "/user-management/index",
    component: <UserManagement />,
  },
  {
    type: "collapse",
    name: "History",
    key: "History",
    icon: <Icon fontSize="small">history_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    icon: <Icon fontSize="small">Settings</Icon>,
    route: "/user-management/index",
    component: <UserManagement />,
  },
  {
    type: "collapse",
    name: "Sign out",
    icon: <Icon fontSize="small">Sign out</Icon>,
    route: "/sign-in",
    component: <SignIn />,
  },
];

export default routes;
