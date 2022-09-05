import "./App.css";
import HomeScreen from "./components/HomeScreen";
import ProjectModal from "./components/Projects/ProjectModal";
import colors from "./utils/colors";
import "./jQueryLoader";
import { useEffect } from "react";

function App() {
  const appStyle = {
    backgroundColor: colors.primaryColor,
  };
  useEffect(() => {
    document.title = "Harsh Siriah Portfolio";
  }, []);

  return (
    <div className="App" style={appStyle}>
      <HomeScreen />
      <ProjectModal />
    </div>
  );
}

export default App;
