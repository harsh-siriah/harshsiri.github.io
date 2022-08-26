import "./App.css";
import HomeScreen from "./components/HomeScreen";
import ProjectModal from "./components/Projects/ProjectModal";
import colors from "./utils/colors";
import "./jQueryLoader";
import CertificateModal from "./components/About/CertificatesList/CertificateModal";

function App() {
  const appStyle = {
    backgroundColor: colors.primaryColor,
  };

  return (
    <div className="App" style={appStyle}>
      <HomeScreen />
      <ProjectModal />
      <CertificateModal />
    </div>
  );
}

export default App;
