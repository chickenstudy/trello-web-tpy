import { Box } from "@mui/material";

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
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
