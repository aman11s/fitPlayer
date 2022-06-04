import React from "react";
import App from "./App";
import { makeServer } from "./server";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  PlaylistModalProvider,
  PlaylistProvider,
  ThemeProvider,
  VideoProvider,
} from "./contexts";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Call make Server
makeServer();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <VideoProvider>
            <PlaylistModalProvider>
              <PlaylistProvider>
                <App />
              </PlaylistProvider>
            </PlaylistModalProvider>
          </VideoProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
