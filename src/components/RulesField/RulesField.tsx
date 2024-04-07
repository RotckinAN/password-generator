import { useState } from "react";
import Slider from "@/components/Slider";
import Checkbox from "@/components/Checkbox";
import "./RulesField.scss";

const RulesField = () => {
  const [sliderValue, setSliderValue] = useState(10);

  return (
    <article className="generator-container">
      <Slider value={sliderValue} setValue={setSliderValue} />

      <Checkbox label="Include Uppercase Letters" />
      <Checkbox label="Include Lowercase Letters" />
      <Checkbox label="Include Numbers" />
      <Checkbox label="Include Symbols" />
    </article>
  );
};

export default RulesField;
