import type { ReactNode } from "react";
import CloseIcon from "../Icons/CloseIcon";

interface CardLayoutProps {
  children: ReactNode;
}

interface CardTitleProps {
  children: ReactNode;
  onClose?: () => void; // Добавляем опциональный пропс
}

export const CardLayout = ({ children }: CardLayoutProps) => {
  return (
    <div className="border-2 w-[392px] p-4 rounded-xl flex flex-col gap-4 mt-6 border-[#fac1d9] bg-[#feebf3]">
      {children}
    </div>
  );
};

export const CardContainer = ({ children }: CardLayoutProps) => {
  return (
    <div className="bg-[#fcfffc] p-6 rounded-xl flex flex-col gap-4 border-2 border-[#fac1d9]">
      {children}
    </div>
  );
};

export const CardTitle = ({ children, onClose }: CardTitleProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg text-[rgba(33,33,38,0.8)] wrap-break-word">{children}</h1>
      <button onClick={onClose} className="w-[23px] h-[23px] bg-[#feebf3] flex items-center justify-center">
        <CloseIcon />
      </button>
    </div>
  );
};

export const CardText = ({ children }: CardLayoutProps) => {
  return (
    <p className="text-lg text-[#212126] leading-[1.22] wrap-break-word ">
      {children}
    </p>
  );
};

export const CardDate = ({ children }: CardLayoutProps) => {
  return (
    <p className="text-[#212126] leading-[1.29] text-sm">
      Срок выполнения: {children}
    </p>
  );
};

export const CardPriority = ({ children }: CardLayoutProps) => {
  return (
    <div className="rounded-lg bg-[#000b30] w-max h-[22px] py-1.5 px-3 text-[#e7edfd] text-xs flex items-center">
      <p>{children}</p>
    </div>
  );
};
