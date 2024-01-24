import {PropsWithChildren} from "react";
import {Typography, useTheme} from "@mui/material";

export function FabCardHeader({children}: PropsWithChildren) {
  const theme = useTheme();
  return <Typography component="div" sx={{
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: "1.2rem",
    textTransform: "uppercase",
    fontFamily: theme.typography.h1.fontFamily,
    p: 1,
  }}>
    {children}
  </Typography>
}