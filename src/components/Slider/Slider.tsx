import { Slider as MuiSlider } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import "./Slider.scss";

interface SliderProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const Slider = ({ value, setValue }: SliderProps) => {
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
        min={1}
        max={20}
        sx={{
          "&.MuiSlider-root": {
            color: "#9ef8a6",
            borderRadius: 0,

            ".MuiSlider-thumb": {
              height: 24,
              width: 24,
              backgroundColor: "#111016",
              border: "2px solid #9ef8a6",

              "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                boxShadow: "inherit",
              },

              "&::before": {
                display: "none",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Slider;
