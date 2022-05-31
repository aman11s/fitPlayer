import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navbar, PlaylistModal, RequiresAuth, Sidebar } from "./components";
import { usePlaylistModal, useTheme } from "./contexts";
import { Home, Videos, Login, Signup, Profile } from "./pages";
import "./App.css";

function App() {
  const { theme } = useTheme();
  const { playlistModalActive } = usePlaylistModal();
  const [showSidebar, setShowSidebar] = useState(false);
  const { pathname } = useLocation();

  const notGridPage = () => {
    return pathname !== "/" && pathname !== "/login" && pathname !== "/signup";
  };

  return (
    <div className={`${theme}-mode`}>
      <Toaster />
      {playlistModalActive && <PlaylistModal />}
      <Navbar pathname={pathname} setShowSidebar={setShowSidebar} />
      <div className={`${notGridPage() && "grid-page-layout"}`}>
        <Sidebar pathname={pathname} showSidebar={showSidebar} />

        {/* Public Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Private Routes */}
          <Route element={<RequiresAuth />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
