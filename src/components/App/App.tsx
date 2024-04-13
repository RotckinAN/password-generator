import Input from "@/components/Input";
import RulesField from "@/components/RulesField/RulesField";

import { usePasswordGenerate } from "@/src/hooks/usePasswordGenerate.ts";
import "./App.scss";

function App() {
  const { password, generatePassword } = usePasswordGenerate();

  return (
    <main className="main">
      <div className="application">
        <h1 className="app-title">Password Generator</h1>
        <Input inputValue={password} />
        <RulesField handlePasswordGenerate={generatePassword} />
      </div>
    </main>
  );
}

export default App;
