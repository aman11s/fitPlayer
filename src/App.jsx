import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { useTheme } from "./contexts";
import { Home, Videos } from "./pages";
import "./App.css";

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
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
