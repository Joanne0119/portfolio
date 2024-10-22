import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../constant/firebase.js"; // import your firebase configuration

const FetchVideo = (fetchVideoName = "MarketDuckDemo.mp4") => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reference the file path in Firebase Storage
    const videoRef = ref(storage, fetchVideoName);

    // Fetch the download URL
    getDownloadURL(videoRef)
      .then((url) => {
        setVideoUrl(url); // Save the URL in state to use later
        setLoading(false); // Stop loading once the URL is fetched
      })
      .catch((error) => {
        console.error("Error fetching video URL:", error);
        setLoading(false);
      });
  }, []);

  return videoUrl;
  // (
    // <div>
    //   {loading ? (
    //     <p>Loading video...</p>
    //   ) : videoUrl ? (
    //     <video src={videoUrl} controls width="600" />
    //   ) : (
    //     <p>Failed to load video.</p>
    //   )}
    // </div>
  //);
};

export default FetchVideo;