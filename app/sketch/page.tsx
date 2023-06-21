"use client";
import { useMutation } from "convex/react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";

const SketchPage = () => {
  const saveSketchMutation = useMutation<any>("sketches:saveSketch");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    prompt: string;
  }>();

  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(async (formData) => {
          if (!canvasRef.current) return;
          const image = await canvasRef.current?.exportImage("jpeg");
          const results = await saveSketchMutation({ ...formData, image });
        })}
      >
        <input {...register("prompt", { required: true })} />
        {errors.prompt && <span>This field is required</span>}
        <ReactSketchCanvas
          style={{ width: 256, height: 256 }}
          strokeWidth={4}
          strokeColor="black"
          ref={canvasRef}
        />
        <input
          className="bg-blue-400 rounded"
          type="submit"
        />
      </form>
    </div>
  );
};
export default SketchPage;
