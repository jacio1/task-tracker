export default function Title({
  title = "To do",
  count = 3,
  backgroundColor = "#000",
  borderColor = "#fac1d9",
  countColor = "#ee2f80",
}) {
  return (
    <div
      className="border-2 w-[392px] h-[59px] p-4 flex items-center justify-between rounded-xl border-solid"
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
      }}
    >
      <h1 className="text-xl font-normal text-[rgba(33,33,38,0.8)]">{title}</h1>
      <p
        className="
          inline-flex items-center justify-center
          rounded-[100px]
          w-[25px] h-[27px]
          p-1
          font-medium
          text-[16px]
          leading-[120%]
          text-white
        "
        style={{ backgroundColor: countColor }}
      >
        {count}
      </p>
    </div>
  );
}
