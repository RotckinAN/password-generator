import { useEffect, useState } from "react";
import { PasswordStrength, StrengthKeys } from "@/src/types.ts";

export const useGetPasswordStrength = ({
  passwordLength,
  rules,
}: PasswordStrength) => {
  const [strength, setStrength] = useState<StrengthKeys>("Weak");

  useEffect(() => {
    const activeCheckboxes = Object.values(rules).filter(
      (item) => !!item,
    ).length;

    if (
      (activeCheckboxes === 2 && passwordLength >= 10) ||
      (activeCheckboxes === 3 && passwordLength < 10) ||
      (activeCheckboxes === 4 && passwordLength < 10)
    ) {
      setStrength("Medium");
    } else if (
      (activeCheckboxes === 3 && passwordLength >= 10) ||
      (activeCheckboxes === 4 && passwordLength >= 10 && passwordLength < 15)
    ) {
      setStrength("Strong");
    } else if (activeCheckboxes === 4 && passwordLength >= 15) {
      setStrength("Very Strong");
    } else {
      setStrength("Weak");
    }
  }, [passwordLength, rules]);

  return { strength };
};
