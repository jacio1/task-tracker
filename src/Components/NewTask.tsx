import LogoIcon from "./Icons/LogoIcon";

interface NewTaskProps {
  onClose: () => void;
}

function NewTask({ onClose }: NewTaskProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative w-[418px] h-[696px] rounded-xl p-8 bg-white">
        <div className="flex items-center gap-4">
          <LogoIcon />
          <h1 className="font-bold text-2xl leading-[1.12] text-black">
            Новая задача
          </h1>
        </div>
        <form className="">
          <h2 className="font-medium text-lg text-[#000b30] pt-8">
            Название задачи
          </h2>
          <input
            type="text"
            placeholder="Введите название задачи"
            className="text-black border-[#ccced6] border rounded-lg border-solid py-2.5 px-3.5 w-[354px] h-11 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
          />
          <h2 className="font-medium text-lg text-[#000b30] pt-6">
            Описание задачи
          </h2>
          <input
            type="text"
            placeholder="Введите описание задачи"
            className="text-black border-[#ccced6] border rounded-lg border-solid py-2.5 px-3.5 w-[354px] h-[197px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
          />
          <h2 className="font-medium text-lg text-[#000b30] pt-6">
            Срок исполнения
          </h2>
          <input
            type="date"
            className="text-black border-[#ccced6] border rounded-lg border-solid py-2.5 px-3.5 w-[354px] h-[38px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
          />
          <h2 className="font-medium text-lg text-[#000b30] pt-6">
            Приоритет (Выберите один)
          </h2>
          <div className="text-black border-[#ccced6] border rounded-lg border-solid py-2.5 px-3.5 w-[354px] h-[38px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] flex items-center gap-2">
            <button className="text-xs text-[#e7edfd] rounded-lg py-1.5 px-3 bg-[#808598] h-[22px] flex items-center">
              Средний
            </button>
            <button className="text-xs text-[#e7edfd] rounded-lg py-1.5 px-3 bg-[#000b30] h-[22px] flex items-center">
              Высокий
            </button>
            <button className="text-xs text-[#000b3] rounded-lg py-1.5 px-3 bg-[#ccced6] h-[22px] flex items-center">
              Низкий
            </button>
          </div>

          <div className="flex gap-4 pt-8">
            <button
              onClick={onClose}
              className="border-[#ccced6] border-2 rounded-xl py-4 px-8 w-[169px] h-12 bg-[#f2f3f5] text-xl text-[#000b30] flex items-center justify-center"
            >
              Отменить
            </button>
            <button className="border-[#cec3ff] border-2 rounded-xl py-4 px-8 w-[169px] h-12 bg-[#666d83] text-xl text-[#e7edfd] flex items-center justify-center">
              Подтвердить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTask;
