import { useEffect, useRef } from "react";

export default function TvStaticBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function drawStatic() {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = imageData.data;

      for (let i = 0; i < buffer.length; i += 4) {
        let base = 58; // около #3a3a42
        let noise = Math.random() * 30 - 15;
        let shade = Math.min(255, Math.max(0, base + noise));

        buffer[i] = shade;     
        buffer[i + 1] = shade; 
        buffer[i + 2] = shade + 5; 
        buffer[i + 3] = 255;   
      }

      ctx.putImageData(imageData, 0, 0);
    }

    let animationId;
    function loop() {
      drawStatic();
      animationId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
