import MemoryGame from "./components/MemoryGame";

const MemoryGamePage = () => {
  return (
    <div className="container mt-3 sm:mt-10 px-2 py-2 flex flex-col items-center justify-center gap-2 md:gap-4 relative">
      <MemoryGame />
    </div>
  );
};
export default MemoryGamePage;
