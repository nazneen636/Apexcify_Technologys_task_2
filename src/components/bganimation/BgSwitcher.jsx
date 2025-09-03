import React from "react";
import GradientBg from "../bganimation/Gradient";
import SnowBg from "../bganimation/Snow";
import StarsBg from "../bganimation/Star";
import Particles from "../bganimation/Particles";
import Lightening from "../bganimation/Lightening";

export default function BackgroundSwitcher({ type }) {
  switch (type) {
    case "particle":
      return <Particles />;
    case "lightening":
      return <Lightening />;
    case "snow":
      return (
        <SnowBg
          colorStops={["#26667F", "#2F5249", "#B9375D"]}
          blend={0.6}
          amplitude={1.0}
          speed={0.8}
        />
      );
    case "stars":
      return (
        <StarsBg
          color={[0.2, 0.1, 0.2]} // yellow-green like the radial glow
          opacity={0.2} // lighter overlay so your CSS gradient shows through
          mouseReact={false} // no mouse tracking
          amplitude={0.1} // watery shimmer
          speed={0.5}
          // className="z-10"
        />
      );
    case "gradient":
      return (
        <GradientBg
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      );
    default:
      return <Particles />;
  }
}
