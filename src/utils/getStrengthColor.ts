import classNames from "classnames";

export const getStrengthColor = (value: number, strength: number) => {
  // console.log(strength);
  if (value >= strength) {
    if (strength >= 4) {
      return classNames("strength-icon-container", {
        veryStrong: strength === 4,
      });
    } else if (strength >= 3) {
      return classNames("strength-icon-container", { strong: strength === 3 });
    } else if (strength >= 2) {
      return classNames("strength-icon-container", { medium: strength === 2 });
    } else {
      return classNames("strength-icon-container", { weak: strength === 1 });
    }
  } else {
    return classNames("strength-icon-container", { weak: strength === 1 });
  }
};
