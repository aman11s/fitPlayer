import React from "react";
import App from "./App";
import { makeServer } from "./server";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  LikeProvider,
  PlaylistModalProvider,
  PlaylistProvider,
  ThemeProvider,
  VideoProvider,
  WatchLaterProvider,
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
                <LikeProvider>
                  <WatchLaterProvider>
                    <App />
                  </WatchLaterProvider>
                </LikeProvider>
              </PlaylistProvider>
            </PlaylistModalProvider>
          </VideoProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
