import Input from "@/components/Input";
import RulesField from "@/components/RulesField/RulesField";

import "./App.scss";
import { useState } from "react";

function App() {
  const [passwordValue, setPasswordValue] = useState<string>("");
  return (
    <main className="main">
      <div className="application">
        <h1 className="app-title">Password Generator</h1>
        <Input inputText={passwordValue} />
        <RulesField setPasswordValue={setPasswordValue} />
      </div>
    </main>
  );
}

export default App;
