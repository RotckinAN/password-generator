import { useState } from "react";
import { PasswordStrength } from "@/src/types.ts";
import { getActiveCheckboxesQuantity } from "@/src/utils/getActiveCheckboxesQuantity.ts";

const shuffle = (array: string[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const usePasswordGenerate = () => {
  const [password, setPassword] = useState("");

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "123456789";
  const symbols = "!#$%&()*+-.'/:;<=>?@";

  const getIndex = (length: number): number => {
    return Math.floor(Math.random() * length);
  };

  const generatePassword = (data: PasswordStrength) => {
    const passwordArray: string[] = [];

    const {
      rules: {
        isLowercaseChecked,
        isUppercaseChecked,
        isNumbersChecked,
        isSymbolsChecked,
      },
      passwordLength,
    } = data;

    const activeCheckboxes = getActiveCheckboxesQuantity(data.rules);

    isLowercaseChecked &&
      passwordArray.push(lowerCase[getIndex(lowerCase.length)]);

    isUppercaseChecked &&
      passwordArray.push(upperCase[getIndex(upperCase.length)]);

    isNumbersChecked && passwordArray.push(numbers[getIndex(numbers.length)]);

    isSymbolsChecked && passwordArray.push(symbols[getIndex(symbols.length)]);

    if (activeCheckboxes < passwordLength) {
      while (passwordArray.length <= passwordLength) {
        if (isLowercaseChecked) {
          const random = Math.round(Math.random());
          random && passwordArray.push(lowerCase[getIndex(lowerCase.length)]);
        }
        if (isUppercaseChecked) {
          const random = Math.round(Math.random());
          random && passwordArray.push(upperCase[getIndex(upperCase.length)]);
        }
        if (isNumbersChecked) {
          const random = Math.round(Math.random());
          random && passwordArray.push(numbers[getIndex(numbers.length)]);
        }
        if (isSymbolsChecked) {
          const random = Math.round(Math.random());
          random && passwordArray.push(symbols[getIndex(symbols.length)]);
        }
      }
    }

    const sortedPasswordArray = shuffle(passwordArray.slice(0, passwordLength));
    setPassword(sortedPasswordArray.join(""));
  };

  return { password, generatePassword };
};
