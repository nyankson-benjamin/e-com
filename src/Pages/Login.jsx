import SignIn from "../components/User/SignIn";
import useScreenWidth from "../Hooks/useScreenWidth";
import signupImg from "../assets/signup.jpg";
import { Box } from "@mui/material";
import useLogin from "../Hooks/useLogin";
export default function Login() {
  const [screenWidth] = useScreenWidth();
  const [
    handleSubmit,
    email,
    password,
    disable,
    handleEmail,
    handlePassword,
    ,
    alert,
    handleCloseAlert,
    isLoading
  ] = useLogin();
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
          className="bg-white py-2 rounded-lg"
        >
          <Box sx={{ width: "40%" }}>
            <img src={signupImg} alt="" style={{ width: "100%" }} />
          </Box>
          <Box sx={{ width: "50%" }}>
            <SignIn
              handleCloseAlert={handleCloseAlert}
              email={email}
              handleEmail={handleEmail}
              password={password}
              handlePassword={handlePassword}
              alert={alert}
              disable={disable}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
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
          className="bg-white py-3 rounded-lg"
        >
          <Box sx={{ width: "100%" }}>
            <SignIn
              handleCloseAlert={handleCloseAlert}
              email={email}
              handleEmail={handleEmail}
              password={password}
              handlePassword={handlePassword}
              alert={alert}
              disable={disable}
              handleSubmit={handleSubmit}
            />
          </Box>
        </Box>
      )}
    </div>
  );
}
