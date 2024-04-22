import cn from "classnames";
import { StrengthKeys } from "@/src/types.ts";
import "./StrengthPart.scss";

interface StrengthPartProps {
  strength: StrengthKeys;
}

const StrengthPart = ({ strength }: StrengthPartProps) => {
  return (
    <article className="strength-part">
      <p>strength</p>
      <div
        className={cn("strength-container", {
          weak: strength === "Weak",
          medium: strength === "Medium",
          strong: strength === "Strong",
          "very-strong": strength === "Very Strong",
        })}
      >
        <p>{strength}</p>
        <div className="strength-icon-container">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </article>
  );
};

export default StrengthPart;
