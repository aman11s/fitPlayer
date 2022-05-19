import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import { useTheme } from "./contexts";
import { Home } from "./pages";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme}-mode`}>
      <Navbar />
      <div className="grid-page-layout">
        <Sidebar />

        {/* Public Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
