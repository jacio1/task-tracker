import { useState } from "react";
import { Input, Textarea } from "./Input";
import {
  NewTaskButton,
  NewTaskTitle,
  PrioritySelector,
  type Priority,
} from "./Layout/NewTaskLayout";

interface NewTaskProps {
  onClose: () => void;
  onAddTask: (task: {
    title: string;
    text: string;
    date: string;
    priority: Priority;
  }) => void;
}

function NewTask({ onClose, onAddTask }: NewTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState<Priority>("Средний");

  const isValid =
    title.trim() !== "" && description.trim() !== "" && deadline.trim() !== "";

  const handleSubmit = () => {
    if (!isValid) return;

    const formattedDate = deadline
      ? new Date(deadline).toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : new Date().toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });

    onAddTask({
      title,
      text: description,
      date: formattedDate,
      priority,
    });

    onClose(); // закрываем модалку
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative w-[418px] h-[696px] rounded-xl p-8 bg-white">
        <NewTaskTitle />
        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            children="Название задачи"
            placeholder="Введите название задачи"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            children="Описание задачи"
            placeholder="Введите описание задачи"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            children="Срок выполнения"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <h2 className="font-medium text-lg text-[#000b30] pt-6">
            Приоритет (Выберите один)
          </h2>
          <PrioritySelector value={priority} onChange={setPriority} />

          <div className="flex gap-4 pt-8">
            <NewTaskButton
              onClick={onClose}
              children="Отменить"
              borderColor="border-[#ccced6]"
              backgroundColor="bg-[#f2f3f5]"
              textColor="text-[#000b30]"
            />
            <NewTaskButton
              children="Подтвердить"
              textColor="text-[#e7edfd]"
              borderColor="border-[#cec3ff]"
              backgroundColor="bg-[#000b30]"
              isDisabled={!isValid}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTask;
