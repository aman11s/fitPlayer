import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { useTheme } from "./contexts";
import { Home, Videos } from "./pages";
import "./App.css";

function App() {
  const { theme } = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className={`${theme}-mode`}>
      <Navbar pathname={pathname} setShowSidebar={setShowSidebar} />
      <div className={`${pathname !== "/" && "grid-page-layout"}`}>
        <Sidebar pathname={pathname} showSidebar={showSidebar} />

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
