import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import "@fontsource/roboto/400.css";
import Typography from "@mui/material/Typography";
import HouseIcon from "@mui/icons-material/House";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Employee = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "#282828",
        minHeight: "100vh",
        minWidth: "100vw",
        borderStyle: "solid",
        borderColor: "#808080",
        borderWidth: "2px",
        display: "flex",
      }}
    >
      <Box>
        <form>
          <Typography
            mt={6}
            sx={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#EDEDF2",
              textAlign: "center",
            }}
          >
            Trang chủ
          </Typography>
          <Stack spacing={2} direction="column" alignItems={"center"}>
            <Avatar alt="Hoàng Kim Chi" src="/path/to/avatar.jpg" />
            <Typography variant="body1" fontWeight={700}>
              Hoàng Kim Chi
            </Typography>
            <Typography variant="body1" fontWeight={700}>
              BA
            </Typography>
            <Typography variant="body2" fontWeight={700}>
              Thời gian làm việc: 09:00 AM - 06:00 PM
            </Typography>
            <AccessTimeIcon fontSize="large" />
            <Typography variant="body1" fontWeight={700}>
              09:01 AM
            </Typography>
            <Typography variant="body1" fontWeight={700}>
              28/07/2024
            </Typography>
          </Stack>
        </form>
        <BottomNavigation
          showLabels
          // value={value}
          onChange={(event, newValue) => {
            // setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Trang chủ" icon={<HouseIcon />} />
          <BottomNavigationAction label="Đơn nghỉ" icon={<MailIcon />} />
          <BottomNavigationAction label="Lịch sử" icon={<RestoreIcon />} />
          <BottomNavigationAction
            label="Tài khoản"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </Box>
    </Container>
  );
};

export default Employee;
