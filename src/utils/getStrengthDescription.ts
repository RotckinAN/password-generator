export const getStrengthDescription = (index: number) => {
  if (index >= 4) {
    return "Very Strong";
  } else if (index >= 3) {
    return "Strong";
  } else if (index >= 2) {
    return "Medium";
  } else if (index >= 1) {
    return "Weak";
  }
};
