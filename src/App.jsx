import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import { useTheme } from "./contexts";
import { Home } from "./pages";

function App() {
  const { theme } = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className={`${theme}-mode`}>
      <Navbar setShowSidebar={setShowSidebar} />
      <div className="grid-page-layout">
        <Sidebar showSidebar={showSidebar} />

        {/* Public Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
