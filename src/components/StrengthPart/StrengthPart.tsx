import cn from "classnames";
import "./StrengthPart.scss";

interface StrengthPartProps {
  strength: "Weak" | "Medium" | "Strong" | "Very Strong";
}

const StrengthPart = ({ strength }: StrengthPartProps) => {
  return (
    <article className="strength-part">
      <p>strength</p>
      <div className="strength-container">
        <p>{strength}</p>
        <div
          className={cn("strength-icon-container", {
            weak: strength === "Weak",
            medium: strength === "Medium",
            strong: strength === "Strong",
            veryStrong: strength === "Very Strong",
          })}
        >
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
