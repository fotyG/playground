export const draw = (
  e: React.MouseEvent<HTMLCanvasElement>,
  canvas: React.RefObject<HTMLCanvasElement>,
  isDrawing: boolean
) => {
  if (!isDrawing) return;

  const ctx: CanvasRenderingContext2D | null | undefined =
    canvas.current?.getContext("2d");
  if (!ctx) return;

  const rect = canvas.current?.getBoundingClientRect();
  const x = e.clientX - rect!.left;
  const y = e.clientY - rect!.top;

  ctx.fillStyle = "#000";
  ctx.fillRect(x, y, 5, 5);
};

export const clearCanvas = (canvas: React.RefObject<HTMLCanvasElement>) => {
  const ctx: CanvasRenderingContext2D | null | undefined =
    canvas.current?.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.current!.width, canvas.current!.height);
};

export const captureCanvas = (canvas: React.RefObject<HTMLCanvasElement>) => {
  if (canvas.current) {
    const image = canvas.current.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "captured_image.png";
    link.click();
  }
};
