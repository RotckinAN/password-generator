import { Slider as MuiSlider } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import "./Slider.scss";

interface SliderProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  minValue: number;
}

const Slider = ({ value, setValue, minValue }: SliderProps) => {
  const handleChange = (evt: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className="slider">
      <div className="title-container">
        <h3 className="slider-title">Character Length</h3>
        <h3 className="slider-value">{value}</h3>
      </div>

      <MuiSlider
        value={value}
        onChange={handleChange}
        min={minValue}
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
