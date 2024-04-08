import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Slider from "@/components/Slider";
import Checkbox from "@/components/Checkbox";
import StrengthPart from "@/components/StrengthPart";
import Button from "@/components/Button";
import "./RulesField.scss";

const RulesField = () => {
  const [sliderValue, setSliderValue] = useState(10);

  return (
    <article className="generator-container">
      <Slider value={sliderValue} setValue={setSliderValue} />

      <div className="checkbox-container">
        <Checkbox label="Include Uppercase Letters" />
        <Checkbox label="Include Lowercase Letters" />
        <Checkbox label="Include Numbers" />
        <Checkbox label="Include Symbols" />
      </div>

      <StrengthPart strength="Medium" />
      <Button onClick={() => {}}>
        Generate
        <span>
          <ArrowForwardIcon className="generate-button-icon" />
        </span>
      </Button>
    </article>
  );
};

export default RulesField;
