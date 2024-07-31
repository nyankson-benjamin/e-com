import ResetPassword from "../components/User/ResetPassword";
import {Box } from "@mui/material";
import ForgotImg from "../assets/user/ForgotImg.jpg";
import useScreenWidth from "../Hooks/useScreenWidth";
import AppsBar from "../TopBar/AppBar";
export default function Reset() {
  const [screenWidth] = useScreenWidth();
  return (
    <div className="bg-white h-[100vh]">
      <AppsBar />
      {screenWidth > 600 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            m: "auto",
            width: "90%",
          }}
        >
          <Box sx={{ width: "40%" }}>
            <img src={ForgotImg} alt="" className="mt-10" style={{ width: "100%" }} />
          </Box>
          <Box sx={{ width: "50%" }}>
            <ResetPassword />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            m: "auto",
            width: "90%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <ResetPassword />
          </Box>
        </Box>
      )}
    </div>
  );
}
