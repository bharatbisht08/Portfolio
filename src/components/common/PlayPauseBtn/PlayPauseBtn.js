import React, { useEffect, useMemo, useState } from "react";
// import { useAudio } from "../../../utils/useAudio";
// import song from "../../../assets/audio/list.m4a";
import song1 from "../../../assets/audio/1.mpeg";
import song2 from "../../../assets/audio/2.mpeg";
import song3 from "../../../assets/audio/3.mpeg";
import song4 from "../../../assets/audio/4.mpeg";
import song5 from "../../../assets/audio/5.mpeg";
import song6 from "../../../assets/audio/6.mpeg";
import song7 from "../../../assets/audio/7.mpeg";
import song8 from "../../../assets/audio/8.mpeg";
import song9 from "../../../assets/audio/9.mpeg";
import song10 from "../../../assets/audio/10.mpeg";
import song11 from "../../../assets/audio/11.mpeg";
import song12 from "../../../assets/audio/12.mpeg";
import song13 from "../../../assets/audio/13.mpeg";
import song14 from "../../../assets/audio/14.mpeg";
import song15 from "../../../assets/audio/1.wav";

import "./PlayPauseBtn.scss";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

const PlayPauseBtn = () => {
  const songs = [
    song1,
    song2,
    song3,
    song4,
    song5,
    song6,
    song7,
    song8,
    song9,
    song10,
    song11,
    song12,
    song13,
    song14,
    song15,
  ];
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [playing, setPlaying] = useState(false);

  const [audio, setAudio] = useState(new Audio(songs[14]));

  useEffect(() => {
    setPlaying(false);
  }, []);

  useMemo(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  const toggle = (change) => {
    if (change) {
      console.log("change", change);
      setAudio(new Audio(songs[random(0, 13)]));
      setPlaying(true);
    } else {
      setPlaying(!playing);
    }
  };

  audio.onended = () => {
    setPlaying(false);
    toggle(true);
  };

  return (
    <div className="backgroundAudio">
      <div onClick={() => toggle(false)}>
        {playing ? <HiVolumeUp size={30} /> : <HiVolumeOff size={30} />}
      </div>
    </div>
  );
};

export default PlayPauseBtn;
