import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import "./App.css";

function App() {
  return (
    <>
      <SideBar />

      <main className="flex flex-1 overflow-hidden">
        <TopBar />
      </main>
    </>
  );
}

export default App;
