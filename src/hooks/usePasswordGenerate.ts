import { useState } from "react";
import { PasswordStrength } from "@/src/types.ts";

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
  const symbols = "!#$%&()*+-./:;<=>?@";

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

    const activeCheckboxes = Object.values(data.rules).filter(
      (item) => !!item,
    ).length;

    if (isLowercaseChecked) {
      let count = 0;

      while (count < passwordLength / activeCheckboxes) {
        passwordArray.push(lowerCase[getIndex(lowerCase.length)]);
        count++;
      }
    }
    if (isUppercaseChecked) {
      let count = 0;
      while (count < passwordLength / activeCheckboxes) {
        passwordArray.push(upperCase[getIndex(upperCase.length)]);
        count++;
      }
    }
    if (isNumbersChecked) {
      let count = 0;
      while (count < passwordLength / activeCheckboxes) {
        passwordArray.push(numbers[getIndex(numbers.length)]);
        count++;
      }
    }
    if (isSymbolsChecked) {
      let count = 0;
      while (count < passwordLength / activeCheckboxes) {
        passwordArray.push(symbols[getIndex(symbols.length)]);
        count++;
      }
    }

    const sortedPasswordArray = shuffle(passwordArray.slice(0, passwordLength));
    setPassword(sortedPasswordArray.join(""));
  };

  return { password, generatePassword };
};
