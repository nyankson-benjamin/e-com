import ForgetPassword from "../components/User/ForgetPassword";
import {  Box } from "@mui/material";
import ForgotImg from "../assets/user/ForgotImg.jpg";
import useScreenWidth from "../Hooks/useScreenWidth";
export default function Forgot() {
  const [screenWidth] = useScreenWidth();
  return (
    <div className="bg-white h-[100vh]">
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
          <Box sx={{ width: "50%",  }}>
            <ForgetPassword />
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
            <ForgetPassword />
          </Box>
        </Box>
      )}
    </div>
  );
}
