import { getStrengthDescription } from "@/src/utils/getStrengthDescription.ts";
import "./StrengthPart.scss";

import { getStrengthColor } from "@/src/utils/getStrengthColor";

interface StrengthPartProps {
  strength: number;
}

const StrengthPart = ({ strength }: StrengthPartProps) => {
  const values = [1, 2, 3, 4];
  return (
    <article className="strength-part">
      <p>strength</p>
      <div className="strength-container">
        {getStrengthDescription(Math.floor(strength)) && (
          <p>{getStrengthDescription(Math.floor(strength))}</p>
        )}

        {values.map((value) => (
          <div
            key={value}
            className={`strength-icon-container ${getStrengthColor(strength, value)}`}
          >
            <div />
          </div>
        ))}
        {/*<div />*/}
        {/*<div />*/}
        {/*<div />*/}
      </div>
    </article>
  );
};

export default StrengthPart;


