export default function Card({
  title = "To do",
  backgroundColor = "#000",
  borderColor = "#fac1d9",
}) {
  return (
    <div
      className="border-2 w-[392px] p-4 rounded-xl flex flex-col gap-4"
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
      }}
    >
      <div
        className="bg-[#fcfffc] p-6 rounded-xl flex flex-col gap-4 border-2"
        style={{ borderColor: borderColor }}
      >
        <h1 className="text-lg text-[rgba(33,33,38,0.8)]">{title}</h1>
        <p className="text-lg text-[#212126] leading-[1.22]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          ipsam voluptatem facere! Error nihil nemo, odio distinctio laborum
          dolore dolores sapiente eaque nostrum dicta! Ducimus, facere pariatur!
          Debitis, natus aspernatur!
        </p>
        <p className="text-[#212126] leading-[1.29] text-sm">
          Due Date:{" "}
          {new Date().toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <div className="rounded-lg bg-[#000b30] w-[51px] h-[22px] py-1.5 px-3 text-[#e7edfd] text-xs flex items-center">
          <p>High</p>
        </div>
      </div>
    </div>
  );
}
