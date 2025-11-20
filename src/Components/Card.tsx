import {
  CardContainer,
  CardDate,
  CardLayout,
  CardPriority,
  CardText,
  CardTitle,
} from "./Layout/CardLayout";

interface Task {
  id: number;
  title: string;
  text: string;
  date: string;
  priority: string;
}

interface CardProps {
  tasks: Task[];
  onTaskDelete: (taskId: number) => void;
  onMoveTask?: (taskId: number) => void;
  moveLabel?: string; // подпись кнопки переноса
}

export default function Card({
  tasks,
  onTaskDelete,
  onMoveTask,
  moveLabel,
}: CardProps) {
  return (
    <CardLayout>
      {tasks.map((task) => (
        <CardContainer key={task.id}>
          <CardTitle onClose={() => onTaskDelete(task.id)}>
            {task.title}
          </CardTitle>
          <CardText>{task.text}</CardText>
          <CardDate>{task.date}</CardDate>
          <CardPriority>{task.priority}</CardPriority>

          {/* Кнопка переноса, если передана */}
          {onMoveTask && moveLabel && (
            <button
              className="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => onMoveTask(task.id)}
            >
              {moveLabel}
            </button>
          )}
        </CardContainer>
      ))}
    </CardLayout>
  );
}
