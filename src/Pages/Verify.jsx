import useScreenWidth from "../Hooks/useScreenWidth";
import confirmImg from "../assets/user/confirm.jpg";
import { Box } from "@mui/material";
import VerifyEmail from "../components/User/VerifyEmail";
export default function Verify() {
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
            <img src={confirmImg} alt="" className="mt-10" style={{ width: "100%" }} />
          </Box>
          <Box sx={{ width: "50%" }}>
            <VerifyEmail />
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
          <Box sx={{ width: "100%" }}><VerifyEmail /></Box>
        </Box>
      )}
    </div>
  );
}
