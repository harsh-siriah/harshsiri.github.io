import "./App.css";
import HomeScreen from "./components/HomeScreen";
import ProjectModal from "./components/Projects/ProjectModal";
import colors from "./utils/colors";

function App() {
  const appStyle = {
    backgroundColor: colors.primaryColor,
  };

  return (
    <div className="App" style={appStyle}>
      <HomeScreen />
      <ProjectModal />
    </div>
  );
}

export default App;
