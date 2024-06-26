import { Content } from "./components/Content";
import { SidebarRight } from "./components/SideBarRight";
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
