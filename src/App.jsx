import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navbar, Sidebar } from "./components";
import { useTheme } from "./contexts";
import { Home, Videos, Login, Signup } from "./pages";
import "./App.css";

function App() {
  const { theme } = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);
  const { pathname } = useLocation();

  const notGridPage = () => {
    return pathname !== "/" && pathname !== "/login" && pathname !== "/signup";
  };

  return (
    <div className={`${theme}-mode`}>
      <Toaster />
      <Navbar pathname={pathname} setShowSidebar={setShowSidebar} />
      <div className={`${notGridPage() && "grid-page-layout"}`}>
        <Sidebar pathname={pathname} showSidebar={showSidebar} />

        {/* Public Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
