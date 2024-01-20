import { Box } from "@mui/material";

function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) => theme.trello.boardContentHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      board content
    </Box>
  );
}

export default BoardContent;
