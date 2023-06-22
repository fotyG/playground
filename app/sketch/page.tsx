"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { generate, saveGeneratedImage } from "./helpers/helpers";
import { ScaleLoader } from "react-spinners";
import { motion } from "framer-motion";

const SketchPage = () => {
  const [generatedPic, setGeneratedPic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    prompt: string;
  }>();

  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  return (
    <main className="container my-2">
      <h1 className="text-center font-bold">
        Make a prompt and sketch a drawing!
      </h1>
      <p className="text-center">
        When it's ready - click submit and watch AI do it's magic!🧙🏿‍♂️
      </p>
      <div
        className={
          "grid grid-cols-1 items-center justify-center transition-all md:gap-10 gap-3 p-10 " +
          (generatedPic ? "md:grid-cols-2" : "")
        }
      >
        <motion.form
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 100, x: 0 }}
          transition={{ duration: 0.7 }}
          className={
            "flex flex-col gap-2 items-center " +
            (generatedPic ? "md:place-self-end" : "")
          }
          onSubmit={handleSubmit(async (formData) => {
            if (!canvasRef.current) return;
            setIsLoading(true);
            const image = await canvasRef.current?.exportImage("jpeg");
            const results = await generate({ ...formData, image });
            if (results) setGeneratedPic(results.data);
            setIsLoading(false);
          })}
        >
          <fieldset className="border flex flex-col rounded-sm p-3 shadow-sm w-64">
            <legend>
              Describe your picture
              {errors.prompt && (
                <span className="text-rose-400 transition-all">*</span>
              )}
            </legend>
            <input
              {...register("prompt", { required: true })}
              className="border rounded-sm border-primary outline-primary px-2"
            />
          </fieldset>

          <ReactSketchCanvas
            style={{ width: 256, height: 256 }}
            strokeWidth={4}
            strokeColor="black"
            ref={canvasRef}
            className="border border-neutral/50 rounded-sm shadow-md"
          />
          <div className="flex gap-1">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <ScaleLoader color="white" /> : "Submit"}
            </button>
            <button
              className="btn border-primary"
              type="button"
              onClick={() => {
                reset();
                canvasRef.current?.clearCanvas();
              }}
            >
              Clear
            </button>
          </div>
        </motion.form>

        {generatedPic && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 100, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center self-end md:place-self-start md:self-end"
          >
            <div className="w-64 md:w-80 flex flex-col justify-center items-center gap-2">
              <h1 className="font-bold">Your AI result:</h1>
              <img
                className="object-contain rounded-md shadow-md"
                src={generatedPic}
                alt=""
              />
              <button
                className="btn btn-primary"
                onClick={() => saveGeneratedImage(generatedPic)}
              >
                Download
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};
export default SketchPage;
