interface GeneratePasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-={}[]|;:<>,.?/~`";

export const generatePassword = ({
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
}: GeneratePasswordOptions): string => {
  let chars = "";
  if (includeUppercase) {
    chars += UPPERCASE_LETTERS;
  }
  if (includeLowercase) {
    chars += LOWERCASE_LETTERS;
  }
  if (includeNumbers) {
    chars += NUMBERS;
  }
  if (includeSymbols) {
    chars += SYMBOLS;
  }
  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};
