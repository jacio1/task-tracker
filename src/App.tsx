import Header from "./Components/Header";
import Title from "./Components/Title";

function App() {
  return (
    <div className="px-2.5 max-w-[1220px] mx-auto">
      <Header />
      <div className="flex justify-between gap-10 m">
        <Title/>
        <Title/>
        <Title/>
      </div>
    </div>
  );
}

export default App;
