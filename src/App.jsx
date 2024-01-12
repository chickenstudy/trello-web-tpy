import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

import { useColorScheme } from "@mui/material/styles";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LightModeIcon fontSize="small" /> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
// luu dark or light mode vao local storage
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}
function App() {
  return (
    <>
      <ModeToggle />
      <hr />
      <ModeSelect />
      <br />
      <div>tuna park yang</div>
      <br />
      <Button variant="contained">Hello World</Button>
      <Button variant="text">Hello World</Button>
      <Button variant="outlined" color="success">
        Hello World
      </Button>

      <Typography variant="body2" color="text.secondary">
        Hello World
      </Typography>
    </>
  );
}

export default App;
