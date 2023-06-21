"use client";

import { useRef, useState } from "react";
import { captureCanvas, clearCanvas, draw } from "./helpers/helpers";

const Picaisso = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="container flex flex-col items-center justify-center my-auto gap-2">
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={(e) => draw(e, canvas, isDrawing)}
        ref={canvas}
        width="600"
        height="600"
        className="border-2 border-neutral/50 hover:cursor-pointer bg-white rounded-md shadow-md shadow-base"
      ></canvas>
      <button
        className="btn btn-primary"
        onClick={() => clearCanvas(canvas)}
      >
        Clear
      </button>
      <button
        className="btn btn-primary"
        onClick={() => captureCanvas(canvas)}
      >
        Capture
      </button>
    </div>
  );
};

export default Picaisso;
