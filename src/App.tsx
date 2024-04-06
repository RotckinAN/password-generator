import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import "./App.scss";

function App() {
  return (
    <main className="main">
      <div className="application">
        <h1 className="title">Password Generator</h1>
        <article className="input-result">
          <p>PsdvHv&4f</p>
          <FileCopyOutlinedIcon className="copy-icon" />
        </article>
        <article className="generator-container"></article>
      </div>
    </main>
  );
}

export default App;
