import { Box, Chip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";

function BoardBar() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        borderTop: "1px solid #1bd4bb",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={{
            color: "primary.main",
            backgroundColor: "white",
            border: "none",
            paddingX: "5px",
            borderRadius: "4px",
            "& .MuiSvgIcon-root": {
              color: "primary.main",
            },
            "&:hover": {
              bgcolor: "primary.100",
            },
          }}
          icon={<DashboardIcon />}
          label="TPY MERN Stack Board"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={{
            color: "primary.main",
            backgroundColor: "white",
            border: "none",
            paddingX: "5px",
            borderRadius: "4px",
            "& .MuiSvgIcon-root": {
              color: "primary.main",
            },
            "&:hover": {
              bgcolor: "primary.100",
            },
          }}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={{
            color: "primary.main",
            backgroundColor: "white",
            border: "none",
            paddingX: "5px",
            borderRadius: "4px",
            "& .MuiSvgIcon-root": {
              color: "primary.main",
            },
            "&:hover": {
              bgcolor: "primary.100",
            },
          }}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          // onClick={() => {}}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}></Box>
    </Box>
  );
}

export default BoardBar;
