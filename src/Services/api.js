import axios from "axios";
import { baseURL, dummyURL } from "../Constants/urls.js";
export const API = axios.create({
  baseURL: baseURL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
  },
  auth: "",
});

export const DUMMy_API = axios.create({
  baseURL: dummyURL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
  },
  auth: "",
});
