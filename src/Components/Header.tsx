export default function Header() {
  return (
    <div className="flex items-center justify-between pt-12">
      <div className="flex items-center gap-4">
        <svg
          width="97"
          height="40"
          viewBox="0 0 97 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#000B30" />
          <circle cx="49" cy="20" r="20" fill="#808598" />
          <circle cx="77" cy="20" r="20" fill="#CCCED6" />
        </svg>
        <h1 className="uppercase font-extrabold text-[32px] leading-[1.12] text-black">
          TASK Tracker
        </h1>
      </div>
      <button className="gap-2 border-2 text-[#e7edfd] bg-[#000b30] h-12 w-[179px] rounded-xl py-4 px-8 flex items-center text-xl font-normal">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1V17"
            stroke="#E7EDFD"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M1 9L17 9"
            stroke="#E7EDFD"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        New task
      </button>
    </div>
  );
}
