import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import "./Input.scss";

interface InputProps {
  inputText: string;
}

const Input = ({ inputText }: InputProps) => {
  const handleCopyPassword = () => {
    if (inputText) {
      navigator.clipboard.writeText(inputText);
    }
    alert("Copied to clipboard!");
  };

  return (
    <article className="input-result">
      <p>{inputText}</p>
      <FileCopyOutlinedIcon
        onClick={handleCopyPassword}
        className="copy-icon"
      />
    </article>
  );
};

export default Input;
