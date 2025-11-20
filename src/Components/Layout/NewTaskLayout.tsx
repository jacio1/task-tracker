import LogoIcon from "../Icons/LogoIcon";

export type Priority = "Низкий" | "Средний" | "Высокий";

interface PrioritySelectorProps {
  value: Priority;
  onChange: (value: Priority) => void;
}

interface NewTaskButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  borderColor: string;
  backgroundColor: string;
  textColor: string;
  isDisabled?: boolean;
}

const PRIORITIES: { label: string; value: Priority }[] = [
  { label: "Низкий", value: "Низкий" },
  { label: "Средний", value: "Средний" },
  { label: "Высокий", value: "Высокий" },
];

export const NewTaskTitle = () => {
  return (
    <div className="flex items-center gap-4">
      <LogoIcon />
      <h1 className="font-bold text-2xl leading-[1.12] text-black">
        Новая задача
      </h1>
    </div>
  );
};

export const NewTaskButton = ({
  children,
  onClick,
  borderColor,
  backgroundColor,
  textColor,
  isDisabled = false,
}: NewTaskButtonProps) => {
  return (
    <button
      type="button"
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      className={`
        border-2 rounded-xl py-4 px-8 w-[169px] h-12 
        flex items-center justify-center
        transition-colors
        ${borderColor}
        ${backgroundColor}
        ${textColor}
        ${
          isDisabled
            ? "bg-[#666d83] cursor-not-allowed!"
            : "cursor-pointer hover:scale-105"
        }
      `}
    >
      {children}
    </button>
  );
};

export const PrioritySelector = ({
  value,
  onChange,
}: PrioritySelectorProps) => {
  return (
    <div className="text-black border-[#ccced6] border rounded-lg border-solid py-2.5 px-3.5 w-[354px] h-[38px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] flex items-center gap-2">
      {PRIORITIES.map((p) => {
        const isSelected = value === p.value;

        return (
          <button
            key={p.value}
            type="button"
            onClick={() => onChange(p.value)}
            className={`text-xs rounded-lg py-1.5 px-3 h-[22px] flex items-center transition
              ${
                isSelected
                  ? "bg-[#000b30] text-white"
                  : "bg-[#ccced6] text-black"
              }
            hover:scale-105`}
          >
            {p.label}
          </button>
        );
      })}
    </div>
  );
};
