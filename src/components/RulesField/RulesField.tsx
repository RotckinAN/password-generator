import { FC, useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Slider from "@/components/Slider";
import Checkbox from "@/components/Checkbox";
import StrengthPart from "@/components/StrengthPart";
import Button from "@/components/Button";
import "./RulesField.scss";
import { generatePassword } from "@/src/utils/generatePassword.ts";
import { getStrength } from "@/src/utils/getStrength.ts";

interface Props {
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>;
}

const RulesField: FC<Props> = ({ setPasswordValue }) => {
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);

  const [strength, setStrength] = useState<number>(0);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword({
      length: passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    });
    setPasswordValue(newPassword);
  };

  useEffect(() => {
    setStrength(
      getStrength(
        passwordLength,
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols,
      ),
    );
  }, [
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    passwordLength,
  ]);

  return (
    <article className="generator-container">
      <Slider
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />

      <div className="checkbox-container">
        <Checkbox
          label="Include Uppercase Letters"
          includeLetNum={includeUppercase}
          setIncludeLetNum={setIncludeUppercase}
        />
        <Checkbox
          includeLetNum={includeLowercase}
          setIncludeLetNum={setIncludeLowercase}
          label="Include Lowercase Letters"
        />
        <Checkbox
          includeLetNum={includeNumbers}
          setIncludeLetNum={setIncludeNumbers}
          label="Include Numbers"
        />
        <Checkbox
          includeLetNum={includeSymbols}
          setIncludeLetNum={setIncludeSymbols}
          label="Include Symbols"
        />
      </div>

      <StrengthPart strength={strength} />
      <Button onClick={handleGeneratePassword}>
        Generate
        <span>
          <ArrowForwardIcon className="generate-button-icon" />
        </span>
      </Button>
    </article>
  );
};

export default RulesField;
