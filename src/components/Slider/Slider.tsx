import { Slider as MuiSlider } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import "./Slider.scss";

interface SliderProps {
  passwordLength: number;
  setPasswordLength: Dispatch<SetStateAction<number>>;
}

const Slider = ({ passwordLength, setPasswordLength }: SliderProps) => {
  const handlePasswordLengthChange = (
    evt: Event,
    newValue: number | number[],
  ) => {
    setPasswordLength(newValue as number);
  };

  return (
    <div className="slider">
      <div className="title-container">
        <h3 className="slider-title">Character Length</h3>
        <h3 className="slider-value">{passwordLength}</h3>
      </div>

      <MuiSlider
        value={passwordLength}
        onChange={handlePasswordLengthChange}
        min={1}
        max={20}
        sx={(theme) => ({
          "&.MuiSlider-root": {
            color: "#9ef8a6",
            borderRadius: 0,

            ".MuiSlider-thumb": {
              border: "2px solid #9ef8a6",
              backgroundColor: "#eae9ef",
              [theme.breakpoints.down("sm")]: {
                height: 20,
                width: 20,
              },
              [theme.breakpoints.up("sm")]: {
                height: 24,
                width: 24,
              },

              "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                backgroundColor: "#111016",
                boxShadow: "inherit",
              },

              "&::before": {
                display: "none",
              },
            },
          },
        })}
      />
    </div>
  );
};

export default Slider;
