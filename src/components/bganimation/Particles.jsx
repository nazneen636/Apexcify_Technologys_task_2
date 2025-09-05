import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBG = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="-z-10 absolute inset-0">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: "transparent" },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "bubble" },
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 200,
                  size: 6,
                  duration: 2,
                  opacity: 0.8,
                  speed: 2,
                },
                push: { quantity: 4 },
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              number: {
                value: 150,
                density: { enable: true, area: 800 },
              },
              color: {
                value: ["#ff6ec4", "#7873f5", "#42e695", "#fcb045"], // gradient colors
              },
              shape: {
                type: ["circle", "triangle", "polygon"], // mixed shapes
              },
              opacity: {
                value: 0.6,
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.2,
                  sync: false,
                },
              },
              size: {
                value: { min: 1, max: 4 },
                random: true,
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.3,
                  sync: false,
                },
              },
              links: {
                enable: true, // enable/disable links
                distance: 150, // max distance between linked particles
                color: { value: "#ffffff" }, // link color (can also use array of colors)
                opacity: 0.4, // transparency of the line
                width: 1.5, // thickness of the line

                blink: true, // make links blink (true/false)
                consent: false, // (used with GDPR consent handling)
                frequency: 1, // frequency of blinking (if blink: true)
                shadow: {
                  blur: 5, // shadow blur around the link
                  color: { value: "#ff0000" }, // shadow color
                  enable: false, // enable shadow for links
                },
                triangles: {
                  enable: false, // connect 3 linked particles into triangles
                  color: { value: "#0000002c" }, // triangle fill color
                  opacity: 0.1, // triangle opacity
                },
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "bounce" },
                attract: { enable: true, rotateX: 600, rotateY: 1200 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};
export default ParticlesBG;
