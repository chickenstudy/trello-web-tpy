import { Box, Button, Chip, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { PersonAdd } from "@mui/icons-material";
const MENU_STYLES = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgcolor: "primary.100",
  },
};

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
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="TPY MERN Stack Board"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
          // onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          // onClick={() => {}}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAdd />}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": { borderColor: "white" },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            gap: "5px",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": {
                bgcolor: "#a4b0be",
              },
            },
          }}
        >
          <Tooltip title="TPY">
            <Avatar
              alt="tpy"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/358115133_3568240746827154_4644488903831173338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Sc0tYb84QMcAX-_cta6&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAbt9PqLFMPHqIe6Cfpct3OZqUykv2HBEqZ31gcW5ZS2A&oe=65AC9CA0"
            />
          </Tooltip>
          <Tooltip title="TPY">
            <Avatar
              alt="tpy"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/358115133_3568240746827154_4644488903831173338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Sc0tYb84QMcAX-_cta6&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAbt9PqLFMPHqIe6Cfpct3OZqUykv2HBEqZ31gcW5ZS2A&oe=65AC9CA0"
            />
          </Tooltip>
          <Tooltip title="TPY">
            <Avatar
              alt="tpy"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/358115133_3568240746827154_4644488903831173338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Sc0tYb84QMcAX-_cta6&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAbt9PqLFMPHqIe6Cfpct3OZqUykv2HBEqZ31gcW5ZS2A&oe=65AC9CA0"
            />
          </Tooltip>
          <Tooltip title="TPY">
            <Avatar
              alt="tpy"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/358115133_3568240746827154_4644488903831173338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Sc0tYb84QMcAX-_cta6&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAbt9PqLFMPHqIe6Cfpct3OZqUykv2HBEqZ31gcW5ZS2A&oe=65AC9CA0"
            />
          </Tooltip>
          <Tooltip title="TPY">
            <Avatar
              alt="tpy"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/358115133_3568240746827154_4644488903831173338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Sc0tYb84QMcAX-_cta6&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAbt9PqLFMPHqIe6Cfpct3OZqUykv2HBEqZ31gcW5ZS2A&oe=65AC9CA0"
            />
          </Tooltip>
          <Tooltip title="TPY">
            <Avatar
              alt="tpy"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/358115133_3568240746827154_4644488903831173338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Sc0tYb84QMcAX-_cta6&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAbt9PqLFMPHqIe6Cfpct3OZqUykv2HBEqZ31gcW5ZS2A&oe=65AC9CA0"
            />
          </Tooltip>
          <Tooltip title="TPY">
            <Avatar
              alt="tpy"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/358115133_3568240746827154_4644488903831173338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Sc0tYb84QMcAX-_cta6&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAbt9PqLFMPHqIe6Cfpct3OZqUykv2HBEqZ31gcW5ZS2A&oe=65AC9CA0"
            />
          </Tooltip>
          <Tooltip title="TPY">
            <Avatar
              alt="tpy"
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/358115133_3568240746827154_4644488903831173338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Sc0tYb84QMcAX-_cta6&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAbt9PqLFMPHqIe6Cfpct3OZqUykv2HBEqZ31gcW5ZS2A&oe=65AC9CA0"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
