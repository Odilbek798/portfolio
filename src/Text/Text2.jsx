import React, { useState, useEffect } from "react";

function Text2() {
  const [px, setPx] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let interval;
    if (hover) {
      interval = setInterval(() => {
        setPx((prev) => prev + 2);
      }, 20);
    }
    return () => clearInterval(interval);
  }, [hover]);

  return (
    <div
      className="wave"
      style={{
        backgroundImage: "url('/public/wawe.svg')",
        backgroundRepeat: "repeat-x",
        backgroundPosition: `${px}px bottom`,
        transition:"0.2s"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      
    >
      FRONT-END
    </div>
  );
}

export default Text2;
