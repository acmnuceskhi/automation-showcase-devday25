import { useRef, useEffect } from "react";

interface SquaresProps {
  borderColor?: string;
  squareSize?: number;
  resetTrigger?: boolean;
}

const Squares = ({
  borderColor = "#999",
  squareSize = 40,
  resetTrigger = false,
}: SquaresProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the grid squares
      for (let x = 0; x < canvas.width; x += squareSize) {
        for (let y = 0; y < canvas.height; y += squareSize) {
          ctx.strokeStyle = borderColor;
          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }

      // Create gradient centered on the viewport
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "#060606");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [borderColor, squareSize, resetTrigger]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-screen"
      style={{ position: "fixed", top: 0, left: 0 }}
    />
  );
};

export default Squares;
