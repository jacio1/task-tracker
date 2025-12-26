import type { CardProps } from "../types";
import {
  CardContainer,
  CardDate,
  CardLayout,
  CardPriority,
  CardText,
  CardTitle,
} from "./Layout/CardLayout";

export default function Card({
  tasks,
  onTaskDelete,
  moveOptions,
  onMoveTask,
  bgColor,
  borderColor,
}: CardProps) {
  const getButtonColors = () => {
    if (bgColor === "bg-[#feebf3]") {
      return {
        firstButton:
          "text-[#f15a2e] bg-white border-[#f15a2e] hover:bg-[#feefeb]",
        secondButton:
          "text-[#00dcb4] bg-white border-[#00dcb4] hover:bg-[#e6fcf8]",
      };
    } else if (bgColor === "bg-[#e6fcf8]") {
      return {
        firstButton:
          "text-[#ee2f80] bg-white border-[#ee2f80] hover:bg-[#feebf3]",
        secondButton:
          "text-[#f15a2e] bg-white border-[#f15a2e] hover:bg-[#feefeb]",
      };
    } else {
      return {
        firstButton:
          "text-[#ee2f80] bg-white border-[#ee2f80] hover:bg-[#feebf3]",
        secondButton:
          "text-[#00dcb4] bg-white border-[#00dcb4] hover:bg-[#e6fcf8]",
      };
    }
  };

  const buttonColors = getButtonColors();

  return (
    <CardLayout bgColor={bgColor} borderColor={borderColor}>
      {tasks.map((task) => (
        <CardContainer key={task.id} borderColor={borderColor}>
          <CardTitle onClose={() => onTaskDelete(task.id)}>
            {task.title}
          </CardTitle>
          <CardText>{task.text}</CardText>
          <CardDate>{task.date}</CardDate>
          <CardPriority>{task.priority}</CardPriority>

          {moveOptions && moveOptions.length > 0 && (
            <div className="flex justify-center gap-2 mt-4">
              {moveOptions.map((option, index) => (
                <button
                  key={index}
                  className={`gap-2 border-2 rounded-xl py-3 px-4 flex items-center justify-center text-sm font-normal transition-colors  ${
                    index === 0
                      ? buttonColors.firstButton
                      : buttonColors.secondButton
                  }`}
                  onClick={() => onMoveTask(task.id, option.status)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </CardContainer>
      ))}
    </CardLayout>
  );
}
