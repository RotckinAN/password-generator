import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

interface CheckboxProps {
  label: string;
  includeLetNum: boolean;
  setIncludeLetNum:(include:boolean) => void;
}

const Checkbox = ({ label, includeLetNum, setIncludeLetNum }: CheckboxProps) => {

  const handleIncludeLetNumChange = () => {
    setIncludeLetNum(!includeLetNum);
  }
  return (
    <FormControlLabel
      checked={includeLetNum}
      onChange={handleIncludeLetNumChange}
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
        />
      }
    />
  );
};

export default Checkbox;
