import React, { useEffect, useRef } from "react";
import * as VanillaTilt from "vanilla-tilt";
import "./tiltStyle.css";

export default function Tilt({ children, choiceType }) {
  const tiltRef = useRef();

  useEffect(() => {
    const tiltNode = tiltRef.current;
    const vanillaTiltOptions = {
      max: 45,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
      perspective: 600
    };
    VanillaTilt.init(tiltNode, vanillaTiltOptions);

    return () => {
      tiltNode.vanillaTilt.destroy();
    };
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      <div
        className={
          choiceType === "leave"
            ? "tilt-child tilt-child-new tilt-child-leave"
            : choiceType === "remove"
            ? "tilt-child tilt-child-new tilt-child-remove"
            : choiceType === "new"
            ? "tilt-child tilt-child-new"
            : "tilt-child"
        }
      >
        {children}
      </div>
    </div>
  );
}
