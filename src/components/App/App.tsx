import Input from "@/components/Input";
import RulesField from "@/components/RulesField/RulesField";
import "./App.scss";

function App() {
  return (
    <main className="main">
      <div className="application">
        <h1 className="app-title">Password Generator</h1>
        <Input />
        <RulesField />
      </div>
    </main>
  );
}

export default App;
