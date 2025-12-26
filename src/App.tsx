import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Title from "./Components/Title";
import NewTask from "./Components/NewTask";
import type { Status, Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDeleteTask = (taskId: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  const handleAddTask = (newTask: Omit<Task, "id" | "status">) => {
    setTasks((currentTasks) => {
      const newId =
        currentTasks.length > 0
          ? Math.max(...currentTasks.map((task) => task.id)) + 1
          : 1;
      return [...currentTasks, { id: newId, status: "todo", ...newTask }];
    });
  };

  const handleMoveTask = (taskId: number, newStatus: Status) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const inProgressTasks = tasks.filter((t) => t.status === "inProgress");
  const doneTasks = tasks.filter((t) => t.status === "done");

  return (
    <div className="max-w-[1220px] mx-auto">
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <div className="flex items-center gap-6 my-4">
        <Title title="Нужно выполнить" count={todoTasks.length} bgColor="bg-[#feebf3]" countColor="bg-[#ee2f80]" borderColor="border-[#fac1d9]" />
        <Title title="В процессе" count={inProgressTasks.length} bgColor="bg-[#feefeb]" countColor="bg-[#f15a2e]" borderColor="border-[#fbcec1]"/>
        <Title title="Завершено" count={doneTasks.length} bgColor="bg-[#e6fcf8]" countColor="bg-[#00dcb4]" borderColor="border-[#b3f5e9]" />
      </div>

      <div className="flex gap-6 items-start">
        <Card
          tasks={todoTasks}
          onTaskDelete={handleDeleteTask}
          moveOptions={[
            { label: "В процессе", status: "inProgress" },
            { label: "Завершено", status: "done" }
          ]}
          onMoveTask={handleMoveTask}
          bgColor="bg-[#feebf3]"
          borderColor="border-[#fac1d9]"
          buttonColors={{
            firstButton: "bg-[#feefeb]",
            secondButton: "bg-[#00dcb4]", 
            textColor: "text-white" 
          }}
        />

        <Card
          tasks={inProgressTasks}
          onTaskDelete={handleDeleteTask}
          moveOptions={[
            { label: "Нужно выполнить", status: "todo" },
            { label: "Завершено", status: "done" }
          ]}
          onMoveTask={handleMoveTask}
          bgColor="bg-[#feefeb]"
          borderColor="border-[#fbcec1]"
          buttonColors={{
            firstButton: "bg-[#feebf3]",
            secondButton: "bg-[#00dcb4]",
            textColor: "text-white"
          }}
        />

        <Card
          tasks={doneTasks}
          onTaskDelete={handleDeleteTask}
          moveOptions={[
            { label: "Нужно выполнить", status: "todo" },
            { label: "В процессе", status: "inProgress" }
          ]}
          onMoveTask={handleMoveTask}
          bgColor="bg-[#e6fcf8]"
          borderColor="border-[#b3f5e9]"
          buttonColors={{
            firstButton: "bg-[#ee2f80]", 
            secondButton: "bg-[#f15a2e]", 
            textColor: "text-white"
          }}
        />
      </div>

      {isModalOpen && (
        <NewTask
          onClose={() => setIsModalOpen(false)}
          onAddTask={handleAddTask}
        />
      )}
    </div>
  );
}

export default App;