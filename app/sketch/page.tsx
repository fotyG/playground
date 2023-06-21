"use client";
import { useMutation } from "convex/react";
import { useForm } from "react-hook-form";

const SketchPage = () => {
  const saveSketchMutation = useMutation("sketches:saveSketch");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    prompt: string;
  }>();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
      <form
        onSubmit={handleSubmit(async (formData) => {
          const results = await saveSketchMutation(formData);
          console.log(results);
        })}
      >
        <input {...register("prompt", { required: true })} />
        {errors.prompt && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};
export default SketchPage;
