import { tokens } from "./tokens";

const isLoggedIn = () => {
  return !!tokens.getAccessToken();
};

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getUser = ()=> {
  const userString = localStorage.getItem("user");
  return userString ? JSON.parse(userString) : null;
};

const clearUser = () => {
  localStorage.removeItem("user");
};

const clearAuthCredentials = () => {
  clearUser();
  tokens.clearAccessToken();
};

const logOut = () => {
  window.localStorage.setItem("logout", String(Date.now()));

  clearAuthCredentials();
};

export const user = {
  isLoggedIn,
  setUser,
  getUser,
  clearUser,
  clearAuthCredentials,
  logOut,
};