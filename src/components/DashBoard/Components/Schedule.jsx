import { Box, Typography } from "@mui/material";
import React from "react";
import { dashBoardItems } from "../../../Constants/dashboardItems";
import useScreenWidth from "../../../Hooks/useScreenWidth";
export default function Schedule() {
  const [screeWidth] = useScreenWidth();
  return (
    <Box sx={{ mt: "35px" }}>
      {screeWidth > 600 ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              m: "auto",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: "left", color: "white", letterSpacing: 2 }}
            >
              Schedule
            </Typography>

            <Typography
              variant="h4"
              sx={{ textAlign: "left", color: "white", letterSpacing: 2 }}
            >
              Date
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              m: "auto",
              width: "90%",
              //   justifyContent: "space-between",
            }}
          >
            {dashBoardItems.map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "268px",
                  height: "116px",
                  bgcolor: "#364153",
                  ml: "30px",
                  mt: "32px",
                  textAlign: "left",
                  borderRadius: "10px",
                }}
                key={index}
              >
                {item.id === 1 ? (
                  <Box
                    sx={{
                      bgcolor: "#a4a2f3",
                      width: "60px",
                      height: "60px",
                      borderRadius: "38px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#605CFF",
                    }}
                  >
                    {" "}
                    {item.icon}
                  </Box>
                ) : item.id === 2 ? (
                  <Box
                    sx={{
                      bgcolor: "#2FE5A7",
                      width: "60px",
                      height: "60px",
                      borderRadius: "38px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#aef5dd",
                    }}
                  >
                    {" "}
                    {item.icon}
                  </Box>
                ) : item.id === 3 ? (
                  <Box
                    sx={{
                      bgcolor: "#f7a9d0",
                      width: "60px",
                      height: "60px",
                      borderRadius: "38px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#FF69B4",
                    }}
                  >
                    {" "}
                    {item.icon}
                  </Box>
                ) : (
                  <Box
                    sx={{
                      bgcolor: "#a2a0f5",
                      width: "60px",
                      height: "60px",
                      borderRadius: "38px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#605CFF",
                    }}
                  >
                    {" "}
                    {item.icon}
                  </Box>
                )}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    ml: "30px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    {item.figure}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "14px",
                      color: "#FFFFFF",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              m: "auto",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: "left", color: "white", letterSpacing: 2 }}
            >
              Schedule
            </Typography>

            <Typography
              variant="h4"
              sx={{ textAlign: "left", color: "white", letterSpacing: 2 }}
            >
              Date
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // m: "auto",
              width: "90%",
              //   justifyContent: "space-between",
            }}
          >
            {dashBoardItems.map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "268px",
                  height: "116px",
                  bgcolor: "#364153",
                  ml: "30px",
                  mt: "32px",
                  textAlign: "left",
                  borderRadius: "10px",
                }}
                key={index}
              >
                {item.id === 1 ? (
                  <Box
                    sx={{
                      bgcolor: "#a4a2f3",
                      width: "60px",
                      height: "60px",
                      borderRadius: "38px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#605CFF",
                    }}
                  >
                    {" "}
                    {item.icon}
                  </Box>
                ) : item.id === 2 ? (
                  <Box
                    sx={{
                      bgcolor: "#2FE5A7",
                      width: "60px",
                      height: "60px",
                      borderRadius: "38px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#aef5dd",
                    }}
                  >
                    {" "}
                    {item.icon}
                  </Box>
                ) : item.id === 3 ? (
                  <Box
                    sx={{
                      bgcolor: "#f7a9d0",
                      width: "60px",
                      height: "60px",
                      borderRadius: "38px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#FF69B4",
                    }}
                  >
                    {" "}
                    {item.icon}
                  </Box>
                ) : (
                  <Box
                    sx={{
                      bgcolor: "#a2a0f5",
                      width: "60px",
                      height: "60px",
                      borderRadius: "38px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#605CFF",
                    }}
                  >
                    {" "}
                    {item.icon}
                  </Box>
                )}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    ml: "30px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    {item.figure}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "14px",
                      color: "#FFFFFF",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}
