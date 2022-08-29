import "./App.css";
import HomeScreen from "./components/HomeScreen";
import ProjectModal from "./components/Projects/ProjectModal";
import colors from "./utils/colors";
import "./jQueryLoader";
import CertificateModal from "./components/About/CertificatesList/CertificateModal";
import { useEffect } from "react";

function App() {
  const appStyle = {
    backgroundColor: colors.primaryColor,
  };
  useEffect(() => {
    document.title = "Harsh Siriah";
  }, []);

  return (
    <div className="App" style={appStyle}>
      <HomeScreen />
      <ProjectModal />
      <CertificateModal />
    </div>
  );
}

export default App;
