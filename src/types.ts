export interface CheckboxState {
  isUppercaseChecked: boolean;
  isLowercaseChecked: boolean;
  isNumbersChecked: boolean;
  isSymbolsChecked: boolean;
}

export type StrengthKeys = "Weak" | "Medium" | "Strong" | "Very Strong";

export interface PasswordStrength {
  passwordLength: number;
  rules: CheckboxState;
}
