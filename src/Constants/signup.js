// import PersonIcon from "@mui/icons-material/Person";
// import EmailIcon from "@mui/icons-material/Email";
// import CallIcon from "@mui/icons-material/Call";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
// import LockOpen from "@mui/icons-material/LockOpen";
export const signUp = [
  {
    id: 1,
    Placeholder: "First Name",
    type: "text",
    value: "fname",
    name: "fname",
    // icon: <PersonIcon />,
  },
  {
    id: 2,
    Placeholder: "Last Name",
    type: "text",
    value: "lname",
    // icon: <PersonIcon />,
    name: "lname",
  },
  {
    id: 3,
    Placeholder: "Enter Email",
    type: "email",
    value: "email",
    // icon: <EmailIcon />,
    pattern: "^[a-zA-Z0-9*@[a-zA-Z0-9.-]+[a-zA-]*",
    error: "Invalid email",
    name: "email",
  },
  {
    id: 4,
    Placeholder: "Phone Number",
    type: "text",
    value: "contact",
    // icon: <CallIcon />,
    name: "contact",
  },
  {
    id: 5,
    Placeholder: "Password",
    type: "password",
    value: "password",
    // icon: <LockOpen />,
    pattern: "/^[a-fA-F0-9 0-9]{8}$/",
    error: "Password does not match",
    name: "password",
  },

  {
    id: 6,
    Placeholder: "Re-enter Password",
    type: "password",
    value: "confirmPassword",
    // icon: <LockOpenIcon />,
    pattern: "/^[a-fA-F0-9 0-9]{8}$/",
    error: "Password does not match",
    name: "confirmPassword",
  },
];
