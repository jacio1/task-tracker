import Card from "./Components/Card";
import Header from "./Components/Header";
import Title from "./Components/Title";

function App() {
  return (
    <div className="px-2.5 max-w-[1220px] mx-auto">
      <Header />
      <div className="flex items-center gap-6">
        <Title title={"To do"} count={3} />
        <Title title="In progress" count={0} />
        <Title title="Done" count={0} />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
