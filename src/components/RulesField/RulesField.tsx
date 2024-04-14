import { ChangeEvent, useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Slider from "@/components/Slider";
import Checkbox from "@/components/Checkbox";
import StrengthPart from "@/components/StrengthPart";
import Button from "@/components/Button";

import { useGetPasswordStrength } from "@/src/hooks/useGetPasswordStrength.ts";
import { getActiveCheckboxesQuantity } from "@/src/utils/getActiveCheckboxesQuantity.ts";
import { CheckboxState, PasswordStrength } from "@/src/types.ts";
import "./RulesField.scss";

interface RulesFieldProps {
  handlePasswordGenerate: (data: PasswordStrength) => void;
}

const checkboxesInitialState: CheckboxState = {
  isUppercaseChecked: true,
  isLowercaseChecked: true,
  isNumbersChecked: false,
  isSymbolsChecked: false,
};

const RulesField = ({ handlePasswordGenerate }: RulesFieldProps) => {
  const [sliderValue, setSliderValue] = useState(10);
  const [minSliderValue, setMinSliderValue] = useState(1);

  const [checkboxesValue, setCheckboxesValue] = useState(
    checkboxesInitialState,
  );

  const { strength } = useGetPasswordStrength({
    passwordLength: sliderValue,
    rules: checkboxesValue,
  });

  const {
    isUppercaseChecked,
    isLowercaseChecked,
    isNumbersChecked,
    isSymbolsChecked,
  } = checkboxesValue;

  const handleCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt?.target) {
      const { value, checked } = evt.target;

      setCheckboxesValue((prev) => ({
        ...prev,
        [`is${value}Checked` as keyof CheckboxState]: checked,
      }));
    }
  };

  const handleGenerate = () => {
    handlePasswordGenerate({
      passwordLength: sliderValue,
      rules: checkboxesValue,
    });
  };

  useEffect(() => {
    const activeCheckboxes = getActiveCheckboxesQuantity(checkboxesValue);

    activeCheckboxes
      ? setMinSliderValue(activeCheckboxes)
      : setMinSliderValue(1);
  }, [checkboxesValue]);

  return (
    <article className="generator-container">
      <Slider
        value={sliderValue}
        setValue={setSliderValue}
        minValue={minSliderValue}
      />

      <div className="checkbox-container">
        <Checkbox
          label="Include Uppercase Letters"
          value="Uppercase"
          onChange={handleCheckboxChange}
          checked={isUppercaseChecked}
        />
        <Checkbox
          label="Include Lowercase Letters"
          value="Lowercase"
          onChange={handleCheckboxChange}
          checked={isLowercaseChecked}
        />
        <Checkbox
          label="Include Numbers"
          value="Numbers"
          onChange={handleCheckboxChange}
          checked={isNumbersChecked}
        />
        <Checkbox
          label="Include Symbols"
          value="Symbols"
          onChange={handleCheckboxChange}
          checked={isSymbolsChecked}
        />
      </div>

      <StrengthPart strength={strength} />

      <Button onClick={handleGenerate}>
        Generate
        <span>
          <ArrowForwardIcon className="generate-button-icon" />
        </span>
      </Button>
    </article>
  );
};

export default RulesField;
