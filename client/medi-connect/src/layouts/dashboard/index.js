import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Stack, IconButton, Divider, Icon } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Gear } from "phosphor-react";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
 
const DashboardLayout = () => {

  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  console.log(theme);

  return (
    <>
      <Box 
        p = {2}
        sx={{
          backgroundColor: theme.palette.background.paper, 
          height: "100vh",
          width: 100,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}>

        <Stack 
          sx={{width: "max-content"}} 
          direction="column" 
          alignItems={"center"} 
          spacing = {3}
        >
          <Box 
            sx={{
              backgroundColor: theme.palette.primary.main, 
              height: 64,
              width: 64,
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: 32
            }}
          >
            <img src={Logo} alt={"Logo"} />
          </Box> 
          <Stack spacing = {2}>
            {Nav_Buttons.map((element) => (
              element.index === selected ?
              <Box 
                sx = {{
                  backgroundColor: theme.palette.primary.main, 
                  borderRadius: 1.5
                }}>
                <IconButton 
                  sx = {{
                    width: "max-content",
                    color: "#fff"}} 
                  key={element.index}
                > 
                  {element.icon} 
                </IconButton>
              </Box>
              : (
                <IconButton
                  onClick={() => {
                    setSelected(element.index)
                  }}
                  sx = {{width: "max-content", color: "#000"}}
                  key = {element.index}
                >
                  {element.icon}
                </IconButton>
              )
            ))}
            <Divider/>
            <IconButton>
              <Gear/>
            </IconButton>
          </Stack>
        </Stack> 
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
