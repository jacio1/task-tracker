import { useState } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Title from "./Components/Title";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "task1",
      text: "text1",
      date: new Date().toLocaleString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      priority: "low",
    },
  ]);
  return (
    <div className="px-2.5 max-w-[1220px] mx-auto">
      <Header />
      <div className="flex items-center gap-6">
        <Title title={"To do"} count={3} />
        <Title title="In progress" count={0} />
        <Title title="Done" count={0} />
      </div>
      <div>
        <Card tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
