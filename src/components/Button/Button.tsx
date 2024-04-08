import { Button as MuiButton } from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <MuiButton
      onClick={onClick}
      variant="outlined"
      sx={{
        "&.MuiButtonBase-root": {
          padding: "1rem",
          borderRadius: 0,
          color: "#9ef8a6",
          borderColor: "#9ef8a6",
          fontFamily: "IBM Plex Mono",
          fontSize: "1.2rem",
          fontWeight: 600,

          "&:hover": {
            backgroundColor: "#b1f9b7",
            borderColor: "#b1f9b7",
            boxShadow: "none",
            color: "#111016",
          },

          ".MuiTouchRipple-root": {
            display: "none",
          },

          span: {
            height: "26px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "1rem",
          },
        },
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
