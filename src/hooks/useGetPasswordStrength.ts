import { useEffect, useState } from "react";
import { PasswordStrength, StrengthKeys } from "@/src/types.ts";
import { getActiveCheckboxesQuantity } from "@/src/utils/getActiveCheckboxesQuantity.ts";

export const useGetPasswordStrength = ({
  passwordLength,
  rules,
}: PasswordStrength) => {
  const [strength, setStrength] = useState<StrengthKeys>("Weak");

  useEffect(() => {
    const activeCheckboxes = getActiveCheckboxesQuantity(rules);

    if (
      (activeCheckboxes === 2 && passwordLength >= 10) ||
      (activeCheckboxes === 3 && passwordLength < 10) ||
      (activeCheckboxes === 4 && passwordLength < 10)
    ) {
      setStrength("Medium");
      return;
    }

    if (
      (activeCheckboxes === 3 && passwordLength >= 10) ||
      (activeCheckboxes === 4 && passwordLength >= 10 && passwordLength < 15)
    ) {
      setStrength("Strong");
      return;
    }

    if (activeCheckboxes === 4 && passwordLength >= 15) {
      setStrength("Very Strong");
      return;
    }

    setStrength("Weak");
  }, [passwordLength, rules]);

  return { strength };
};
