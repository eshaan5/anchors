import React, { useEffect, useState } from "react";
import Routes from "./Routes";

function App() {
  const apiKey = "AIzaSyB94TpJN63AEx5ekNIo4y69EOqN3Kr_NYE";
  const [videoId, setVideoId] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [channelId, setChannelId] = useState("");

  useEffect(() => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setVideoData(data.items[0]);
        setChannelId(data.items[0]?.snippet.channelId);
      })
      .catch((error) => console.error("Error:", error));
  }, [videoId]);

  useEffect(() => {
    if (!channelId) return;

    const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        data?.items &&
          setVideoData((prevState) => ({
            ...prevState,
            subscribers: data?.items[0]?.statistics?.subscriberCount,
          }));
      })
      .catch((error) => console.error("Error:", error));
  }, [channelId, videoId]);

  return <Routes video={videoData} setVideoId={setVideoId} />;
}

export default App;
