import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

interface CheckboxProps {
  label: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <FormControlLabel
      label={label}
      sx={{
        "&.MuiFormControlLabel-root": {
          margin: 0,

          ".MuiTypography-root": {
            fontFamily: "IBM Plex Mono",
            color: "#eae9ef",
            fontWeight: 500,
            paddingLeft: "0.8rem",
          },

          ".MuiButtonBase-root": {
            padding: "2px",
          },
        },
      }}
      control={
        <MuiCheckbox
          sx={{
            color: "#9ef8a6",
            "&.Mui-checked": {
              color: "#b1f9b7",
            },
          }}
        />
      }
    />
  );
};

export default Checkbox;
