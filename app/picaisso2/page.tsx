// "use client";

// import { useMutation } from "convex/react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { ReactSketchCanvas } from "react-sketch-canvas";
// import { ReactSketchCanvasRef } from "react-sketch-canvas/dist/ReactSketchCanvas";
// import { useRef } from "react";

// type Inputs = {
//   prompt: string;
// };

// const PicaissoPage = () => {
//   const saveSketchMutation = useMutation<any>("sketches:saveSketch");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const canvasRef = useRef<ReactSketchCanvasRef>(null);

//   return (
//     <div className="container">
//       <form
//         className="flex flex-col gap-2 items-center my-2"
//         onSubmit={handleSubmit(async (formData) => {
//           if (!canvasRef.current) return;
//           const image = await canvasRef.current?.exportImage("jpeg");
//           const results = await saveSketchMutation({ ...formData, image });
//         })}
//       >
//         <input
//           className="border p-2"
//           {...register("prompt", { required: true })}
//         />
//         {errors.prompt && <span>This field is required</span>}
//         <ReactSketchCanvas
//           ref={canvasRef}
//           style={{ width: 256, height: 256 }}
//           className="border"
//           strokeWidth={4}
//           strokeColor="black"
//         />
//         <input
//           type="submit"
//           className="btn btn-primary"
//         />
//       </form>
//     </div>
//   );
// };
// export default PicaissoPage;
