import { useEffect, useState } from "react";
import "./App.css";
import ItemsList from "./Components/ItemsList";
import Process from "./Components/Process";

function App() {
  const [final, setFinal] = useState(innitialList);
  function handleFinal(finalPrice) {
    setFinal([...final, finalPrice]);
    localStorage.setItem("items", JSON.stringify([...final, finalPrice]));
  }

  function innitialList() {
    const initList = localStorage.getItem("items");
    return initList ? JSON.parse(initList) : [];
  }

  return (
    <div className="App flex bg-slate-900 justify-center items-center p-8 gap-40">
      <Process handleFinal={handleFinal} />
      <ItemsList final={final} />
    </div>
  );
}

export default App;
