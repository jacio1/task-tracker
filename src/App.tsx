import Card from "./Components/Card";
import Header from "./Components/Header";
import Title from "./Components/Title";
import NewTask from "./Components/NewTask";

function App() {
  const titleData = [
    {
      title: "To do",
      count: 3,
      backgroundColor: "#feebf1",
      borderColor: "#fac1d9",
      countColor: "#ee2f80",
    },
    {
      title: "In Progress",
      count: 2,
      backgroundColor: "#feefeb",
      borderColor: "#fbcec1",
      countColor: "#f15a2e",
    },
    {
      title: "Done",
      count: 5,
      backgroundColor: "#e6fcf8",
      borderColor: "#b3f5e9",
      countColor: "#00dcb4",
    },
  ];

  const cardData = [
    {
      title: "Task 1",
      backgroundColor: "#feebf1",
      borderColor: "#fac1d9",
    },
    {
      title: "Task 2",
      backgroundColor: "#feefeb",
      borderColor: "#fbcec1",
    },
    {
      title: "Task 3",
      backgroundColor: "#e6fcf8",
      borderColor: "#b3f5e9",
    },
  ];

  return (
    <div className="px-2.5 max-w-[1220px] mx-auto">
      <Header />
      <div className="flex justify-between">
        {titleData.map((item, index) => (
          <Title
            key={index}
            title={item.title}
            count={item.count}
            backgroundColor={item.backgroundColor}
            borderColor={item.borderColor}
            countColor={item.countColor}
          />
        ))}
      </div>
      <div className="flex justify-between py-8">
        {cardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            backgroundColor={item.backgroundColor}
            borderColor={item.borderColor}
          />
        ))}
      </div>
      <NewTask/>
    </div>
  );
}

export default App;
