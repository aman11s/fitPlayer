import axios from "axios";
import React, { useState, useEffect } from "react";
import { VideoCard } from "../../components";
import { useAuth } from "../../contexts";

export const History = () => {
  const {
    userData: { token },
  } = useAuth();

  const [historyVideos, setHistoryVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios({
          method: "GET",
          url: "/api/user/history",
          headers: { authorization: token },
        });
        if (status === 200) {
          setHistoryVideos(data.history);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [token]);

  return (
    <>
      <main className="main-container main-min-height">
        <div className="grid-minmax-card m-4">
          {historyVideos.map((videos) => {
            const historyProps = {
              historyVideos,
              setHistoryVideos,
            };
            return (
              <VideoCard
                key={videos._id}
                videos={videos}
                trashIcon={{ trashIcon: true }}
                videoType="history"
                historyProps={historyProps}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};
