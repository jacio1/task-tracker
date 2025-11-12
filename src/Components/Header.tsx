import { useState } from "react";
import LogoIcon from "./Icons/LogoIcon";
import PlusIcon from "./Icons/PlusIcon";
import NewTask from "./NewTask";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="flex items-center justify-between py-12">
      <div className="flex items-center gap-4">
        <LogoIcon />
        <h1 className="uppercase font-extrabold text-[32px] leading-[1.12] text-black">
          TASK Tracker
        </h1>
      </div>
      <button
        className="gap-2 border-2 text-[#e7edfd] bg-[#000b30] h-16 w-52 rounded-xl py-4 px-8 flex items-center text-xl font-normal"
        onClick={openModal}
      >
        <PlusIcon />
        Новая задача
      </button>

      {isModalOpen && <NewTask onClose={closeModal} />}
    </header>
  );
}
