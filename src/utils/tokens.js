import { jwtDecode } from "jwt-decode";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

// Configure local storage settings
ls.config.encrypt = false;
ls.config.secret = import.meta.env.VITE_ENCRYPTION_SECRET_KEY;

// Update encrypter to use AES encryption
ls.config.encrypter = (data, secret) =>
  AES.encrypt(JSON.stringify(data), secret).toString();

// Update decrypter to decrypt AES-encrypted data
ls.config.decrypter = (data, secret) => {
  try {
    return JSON.parse(AES.decrypt(data, secret).toString(encUTF8));
  } catch (e) {
    // Incorrect/missing secret, return the encrypted data instead
    return data;
  }
};

export const tokens = {
  setAccessToken(token) {
    sessionStorage.setItem("accessToken", token);
  },

  getAccessToken() {
    return sessionStorage.getItem("accessToken");
  },

  clearAccessToken() {
    sessionStorage.removeItem("accessToken");
  },

  setRefreshToken(token) {
    ls.set("refreshToken", token, { encrypt: true });
  },

  getRefreshToken() {
    return ls.get("refreshToken", { decrypt: true });
  },

  clearRefreshToken() {
    ls.remove("refreshToken");
  },

  decodeToken(token) {
    return jwtDecode(token);
  },
};
