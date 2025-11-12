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
}

export default function Card({ tasks }: CardProps) {
  return (
    <CardLayout>
      {tasks.map((task) => {
        return (
          <CardContainer key={task.id}>
            <CardTitle>{task.title}</CardTitle>
            <CardText>{task.text}</CardText>
            <CardDate>{task.date}</CardDate>
            <CardPriority>{task.priority}</CardPriority>
          </CardContainer>
        );
      })}
    </CardLayout>
  );
}
