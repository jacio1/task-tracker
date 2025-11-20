import type { ChangeEvent, ReactNode } from "react";

interface InputProps<T extends HTMLElement> {
  children: ReactNode;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<T>) => void;
}

export const Input = ({
  children,
  placeholder,
  type,
  value,
  onChange,
}: InputProps<HTMLInputElement>) => {
  return (
    <label className="block">
      <span className="block font-medium text-lg text-[#000b30] pt-6">
        {children}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="resize-none text-black border-[#ccced6] border rounded-lg border-solid py-2.5 px-3.5 w-[354px] h-[38px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
        placeholder={placeholder}
      />
    </label>
  );
};

export const Textarea = ({
  children,
  placeholder,
  value,
  onChange,
}: InputProps<HTMLTextAreaElement>) => {
  return (
    <label className="block">
      <span className="block font-medium text-lg text-[#000b30] pt-6">
        {children}
      </span>
      <textarea
        value={value}
        onChange={onChange}
        className="resize-none text-black border-[#ccced6] border rounded-lg border-solid py-2.5 px-3.5 w-[354px] h-[197px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
        placeholder={placeholder}
      />
    </label>
  );
};