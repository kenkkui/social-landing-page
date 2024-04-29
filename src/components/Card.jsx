import React from "react";

import Pic from "./Profile-pic";
import Identify from "./Identify";
import Bio from "./Bio";
import Links from "./Links";

function Card() {
  return (
    <div id="card">
      <Pic />
      <Identify />
      <Bio />
      <Links />
    </div>
  );
}

export default Card;
