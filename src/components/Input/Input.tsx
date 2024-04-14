import { useState } from "react";

import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import DoneIcon from "@mui/icons-material/Done";

import "./Input.scss";

interface InputProps {
  inputValue: string;
}

const Input = ({ inputValue }: InputProps) => {
  const [isCopied, setIsCopied] = useState(false);

  if (isCopied) {
    setTimeout(setIsCopied, 3 * 1000);
  }

  const handleButtonCopy = async () => {
    if (inputValue) {
      await navigator.clipboard.writeText(inputValue);
      setIsCopied(true);
    }
  };

  return (
    <article className="input-result">
      <p>{inputValue}</p>

      {isCopied ? (
        <DoneIcon className="copy-icon" />
      ) : (
        <FileCopyOutlinedIcon
          className="copy-icon"
          onClick={handleButtonCopy}
        />
      )}
    </article>
  );
};

export default Input;
