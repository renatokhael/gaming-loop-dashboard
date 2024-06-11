import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="dashboard rounded-3xl shadow-xl flex color-base flex-shrink-0">
      <Content />
      <div className="flex-grow" />
      <SidebarRight />
    </div>
  );
}

export default App;
