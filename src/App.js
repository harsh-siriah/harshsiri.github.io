import "./App.css";
import HomeScreen from "./components/HomeScreen";
import colors from "./utils/colors";

function App() {
  const appStyle = {
    backgroundColor: colors.primaryColor,
  };

  return (
    <div className="App" style={appStyle}>
      <HomeScreen />
    </div>
  );
}

export default App;
