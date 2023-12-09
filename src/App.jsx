import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import * as api from "./api";

function App() {

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const apiKey = import.meta.env.VITE_API_KEY;

  const [videoId, setVideoId] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [channelId, setChannelId] = useState("");
  const [videos, setVideos] = useState([]);

  const sendVideo = async (video) => {
    try {
      const response = await api.postVideo(video);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await api.getVideos();
      setVideos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setVideoData({
          title: data.items[0]?.snippet.title,
          img: data.items[0]?.snippet.thumbnails.high.url,
          views: Number(data.items[0]?.statistics.viewCount),
          likes: Number(data.items[0]?.statistics.likeCount),
          comments: Number(data.items[0]?.statistics.commentCount),
          date: new Date(data.items[0]?.snippet.publishedAt).toLocaleDateString(
            "en-US",
            options
          ),
          earnings: 0,
        });
        setChannelId(data.items[0]?.snippet.channelId);
      })
      .catch((error) => console.error("Error:", error));
  }, [videoId]);

  useEffect(async () => {
    if (!channelId) return;

    const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
    let subscribers = 0;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      subscribers = data?.items[0]?.statistics.subscriberCount;
      setVideoData((prevState) => ({
        ...prevState,
        earnings:
          Math.min(
            Number(data?.items[0]?.statistics.subscriberCount),
            prevState.views
          ) +
          10 * prevState.comments +
          5 * prevState.likes,
      }));
    } catch (error) {
      console.log(error);
    }

    sendVideo({
      ...videoData,
      earnings:
        Math.min(subscribers, videoData.views) +
        10 * videoData.comments +
        5 * videoData.likes,
    });

    fetchVideos();
  }, [channelId, videoId]);

  return <Routes setVideoId={setVideoId} videos={videos} />;
}

export default App;
