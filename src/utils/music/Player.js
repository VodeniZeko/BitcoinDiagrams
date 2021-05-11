import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

import a from "./songs/Post Malone - rockstar ft. 21 Savage-UceaB4D0jpo.webm";
import b from "./songs/'Relax' - Smooth Trap Soul Hip Hop Beat Chill Instrumental (Prod. Tower B. x L.E.M.)-fbv5tDdxiD0.webm";
import c from "./songs/Anton Ishutin - Gone (Original Mix) [Video Edit]-pZDMzqJf1qE.webm";
import d from "./songs/B L A C K   R O S E - Emotional Dark Trap Beat (Prod.Tower x Juanko x Marzen)-H0SNgX-7HkQ.webm";
import e from "./songs/Chill Smooth Guitar Rap Beat _ Higher (Prod. Syndrome) [NEW 2018]-08AicqtTPyU.webm";
import f from "./songs/cruising.webm";
import g from "./songs/Drake Type Beat - 'Drop It' _ Free Type Beat _ Rap_Trap Instrumental 2021-DTJSSL7Dvlw.webm";
import h from "./songs/Duke Dumont - I Got U ft. Jax Jones (Official Music Video)-FHCYHldJi_g.webm";
import i from "./songs/Hard Aggressive Choir Rap Beat (Joker)-LW7oQXzYq5Y.webm";
import j from "./songs/J Balvin, Willy William - Mi Gente (Official Video)-wnJ6LuUFpMo.webm";
import k from "./songs/Mozart Hip Hop Remix-E9Qhb2Q8AYc.webm";
import l from "./songs/Pascal Junior - Holdin' On [Ultra Music]-CaqO-xvwtFQ.webm";
import m from "./songs/Regard - Ride It (Lyrics)-GPRK1ZRGaDc.webm";

const textArray = [a, b, c, d, e, f, g, h, i, j, k, l, m];

const url = textArray[Math.floor(Math.random() * textArray.length)];

const Player = () => {
  return (
    <ReactAudioPlayer
      src={url}
      controls
      loop
      style={{ width: "300px", height: "30px" }}
    />
  );
};

export default Player;
