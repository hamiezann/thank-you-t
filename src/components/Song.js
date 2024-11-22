import React, { useState, useRef } from "react";

function SongPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="song-player">
      <audio ref={audioRef} src="/audio/tamvan.mp3" />
      <button onClick={togglePlayPause} className="play-pause-button">
        {isPlaying ? "⏸ Pause" : "▶️ Play"}
      </button>
    </div>
  );
}

export default SongPlayer;
