// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// export const useCreditStore = create(
//   persist(
//     (set, get) => ({
//       credits: 0,
//       addCredits: () => set({ credits: get().credits + 45 }),
//       spendCredits: (amount) => set({ credits: get().credits - amount }),
//       resetCredits: () => set({credits: 0})
//     }),
//     {
//       name: "treasury-storage", // unique name
//       // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//     }
//   )
// );

// "use client";

// import { useCreditStore } from "@/hooks/useCreditStore";

// const Credits = () => {
//   const { addCredits, spendCredits, resetCredits } = useCreditStore(store => store)
//   const credits = (JSON.parse(localStorage.getItem("treasury-storage"))).state.credits;

//   return (
//     <>
//       <div className="flex flex-col m-10 items-center">
//         <h1>Cred Store</h1>
//         <div>
//           <p>Credits: {credits}</p>
//           <div className="flex flex-col">
//             <button onClick={addCredits}>Increase</button>
//             <button onClick={() => spendCredits(77)}>Spend</button>
//             <button onClick={resetCredits}>Reset</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Credits;
