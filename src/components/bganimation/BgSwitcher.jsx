import Galaxy from "./Galaxy";
import Gradient from "./Snow";
import Wavy from "./Wavy";
import Particles from "./Particles";
import Lightening from "./Lightening";

export default function BackgroundSwitcher({ type }) {
  switch (type) {
    case "particle":
      return <Particles />;
    case "lightening":
      return <Lightening />;
    case "gradient":
      return (
        <Gradient
          colorStops={["#1C352D", "#2F5249", "#3D0301"]}
          blend={0.6}
          amplitude={1.0}
          speed={0.8}
        />
      );
    case "wavy":
      return (
        <Wavy
          color={[0.2, 0.1, 0.1]} // yellow-green like the radial glow
          opacity={1} // lighter overlay so your CSS gradient shows through
          mouseReact={false} // no mouse tracking
          amplitude={0.6} // watery shimmer
          speed={1}
          // className="z-10"
        />
      );
    case "galaxy":
      return (
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.8} // fewer stars
          glowIntensity={0.2} // less expensive glowing
          twinkleIntensity={0.2}
          saturation={0.5}
          hueShift={100}
        />
      );
    case "solid":
      return null;
    default:
      return <Particles />;
  }
}
