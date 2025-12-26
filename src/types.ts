export type Priority = "Низкий" | "Средний" | "Высокий";
export type Status = "todo" | "inProgress" | "done";

export interface NewTaskProps {
  onClose: () => void;
  onAddTask: (task: {
    title: string;
    text: string;
    date: string;
    priority: Priority;
  }) => void;
}

export interface Task {
  id: number;
  title: string;
  text: string;
  date: string;
  priority: Priority;
  status: Status;
}

export interface TitleProps {
  title: string;
  count: number;
  bgColor?: "bg-[#feebf3]" | "bg-[#feefeb]" | "bg-[#e6fcf8]";
  countColor?: "bg-[#ee2f80]" | "bg-[#f15a2e]" | "bg-[#00dcb4]";
  borderColor?: "border-[#fac1d9]" | "border-[#fbcec1]" | "border-[#b3f5e9]";
}

export interface MoveOption {
  label: string;
  status: Status;
}

export interface CardProps {
  tasks: Task[];
  onTaskDelete: (taskId: number) => void;
  moveOptions: MoveOption[];
  onMoveTask: (taskId: number, newStatus: Status) => void;
  bgColor?: "bg-[#feebf3]" | "bg-[#feefeb]" | "bg-[#e6fcf8]";
  borderColor?: "border-[#fac1d9]" | "border-[#fbcec1]" | "border-[#b3f5e9]";
  buttonColors?: {
    firstButton: string; // Цвет для первой кнопки
    secondButton: string; // Цвет для второй кнопки
    textColor?: string; // Цвет текста (опционально)
  };
}