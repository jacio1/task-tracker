export default function Card() {
  const tasks = [
    {
      id: 1,
      title: "task1",
      text: "text1",
      date: new Date().toLocaleString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      priority: "low",
    },
    {
      id: 2,
      title: "task12",
      text: "text2",
      date: new Date().toLocaleString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      priority: "low",
    },
    {
      id: 3,
      title: "task142",
      text: "text2",
      date: new Date().toLocaleString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      priority: "low",
    },
    {
      id: 4,
      title: "task1142",
      text: "text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2",
      date: new Date().toLocaleString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      priority: "low",
    },
  ];

  return (
    <div className="border-2 w-[392px] p-4 rounded-xl flex flex-col gap-4 mt-6">
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className="bg-[#fcfffc] p-6 rounded-xl flex flex-col gap-4 border-2"
          >
            <h1 className="text-lg text-[rgba(33,33,38,0.8)]">{task.title}</h1>
            <p className="text-lg text-[#212126] leading-[1.22] wrap-break-word ">
              {task.text}
            </p>
            <p className="text-[#212126] leading-[1.29] text-sm">
              Срок выполнения: {task.date}
            </p>
            <div className="rounded-lg bg-[#000b30] w-[51px] h-[22px] py-1.5 px-3 text-[#e7edfd] text-xs flex items-center">
              <p>{task.priority}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
