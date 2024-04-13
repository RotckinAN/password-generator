import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";
import { ChangeEvent } from "react";

interface CheckboxProps {
  label: string;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const Checkbox = ({ label, value, onChange, checked }: CheckboxProps) => {
  return (
    <FormControlLabel
      label={label}
      sx={(theme) => ({
        "&.MuiFormControlLabel-root": {
          margin: 0,

          ".MuiTypography-root": {
            fontFamily: "IBM Plex Mono",
            color: "#eae9ef",
            fontWeight: 500,
            [theme.breakpoints.down("sm")]: {
              paddingLeft: "0.5rem",
              fontSize: "0.85rem",
            },
            [theme.breakpoints.up("sm")]: {
              paddingLeft: "0.8rem",
              fontSize: "1rem",
            },
          },

          ".MuiButtonBase-root": {
            padding: "2px",
          },
        },
      })}
      control={
        <MuiCheckbox
          sx={{
            color: "#9ef8a6",
            "&.Mui-checked": {
              color: "#b1f9b7",
            },
          }}
          onChange={onChange}
          value={value}
          checked={checked}
        />
      }
    />
  );
};

export default Checkbox;
