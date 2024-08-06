
export const signUp = [
  {
    id: 1,
    Placeholder: "First Name",
    type: "text",
    value: "fname",
    name: "fname",
  },
  {
    id: 2,
    Placeholder: "Last Name",
    type: "text",
    value: "lname",
    name: "lname",
  },
  {
    id: 3,
    Placeholder: "Enter Email",
    type: "email",
    value: "email",
    pattern: "^[a-zA-Z0-9*@[a-zA-Z0-9.-]+[a-zA-]*",
    error: "Invalid email",
    name: "email",
  },
  {
    id: 4,
    Placeholder: "Phone Number",
    type: "text",
    value: "contact",
    name: "contact",
  },
  {
    id: 5,
    Placeholder: "Password",
    type: "password",
    value: "password",
    pattern: "/^[a-fA-F0-9 0-9]{8}$/",
    error: "Password does not match",
    name: "password",
  },

  {
    id: 6,
    Placeholder: "Re-enter Password",
    type: "password",
    value: "confirmPassword",
    pattern: "/^[a-fA-F0-9 0-9]{8}$/",
    error: "Password does not match",
    name: "confirmPassword",
  },
];
