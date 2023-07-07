import CartIcon from "./CartIcon";

const StoreNav = () => {
  return (
    <div className="scroll-smooth sticky top-0 z-30 bg-base-100 py-3 flex justify-between items-center shadow-sm shadow-secondary">
      <h1 className="text-2xl text-transparent bg-gradient-to-r bg-clip-text from-indigo-300 to-pink-600 ml-8 font-extrabold">
        Project Shop
      </h1>
      <CartIcon />
    </div>
  );
};
export default StoreNav;
