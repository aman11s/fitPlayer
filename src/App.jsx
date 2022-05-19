import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { useTheme } from "./contexts";
import { Home } from "./pages";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme}-mode`}>
      <Navbar />

      {/* Public Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
