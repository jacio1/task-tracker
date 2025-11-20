import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Title from "./Components/Title";
import NewTask from "./Components/NewTask";
import type { Priority } from "./Components/Layout/NewTaskLayout";

type Status = "todo" | "inProgress" | "done";

interface Task {
  id: number;
  title: string;
  text: string;
  date: string;
  priority: Priority;
  status: Status;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Загружаем задачи из localStorage при монтировании
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Сохраняем задачи в localStorage при каждом изменении tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Удаление задачи
  const handleDeleteTask = (taskId: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  // Добавление новой задачи
  const handleAddTask = (newTask: Omit<Task, "id" | "status">) => {
    setTasks((currentTasks) => {
      const newId =
        currentTasks.length > 0
          ? Math.max(...currentTasks.map((task) => task.id)) + 1
          : 1;
      return [...currentTasks, { id: newId, status: "todo", ...newTask }];
    });
  };

  // Перенос задачи между колонками
  const handleMoveTask = (taskId: number, newStatus: Status) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // Фильтруем задачи по статусу
  const todoTasks = tasks.filter((t) => t.status === "todo");
  const inProgressTasks = tasks.filter((t) => t.status === "inProgress");
  const doneTasks = tasks.filter((t) => t.status === "done");

  return (
    <div className="max-w-[1220px] mx-auto">
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <div className="flex items-center gap-6 my-4">
        <Title title="Нужно выполнить" count={todoTasks.length} />
        <Title title="В процессе" count={inProgressTasks.length} />
        <Title title="Завершено" count={doneTasks.length} />
      </div>

      <div className="flex gap-6 items-start">
        <Card
          tasks={todoTasks}
          onTaskDelete={handleDeleteTask}
          onMoveTask={(id) => handleMoveTask(id, "inProgress")}
          moveLabel="→ В процессе"
        />
        <Card
          tasks={inProgressTasks}
          onTaskDelete={handleDeleteTask}
          onMoveTask={(id) => handleMoveTask(id, "done")}
          moveLabel="→ Завершено"
        />
        <Card tasks={doneTasks} onTaskDelete={handleDeleteTask} />
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
