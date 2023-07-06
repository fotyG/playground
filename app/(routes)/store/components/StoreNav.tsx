import CartIcon from "./CartIcon";

const StoreNav = () => {
  return (
    <div className="flex justify-between items-center border-b">
      <h1 className="text-2xl font-bold ml-8 p-2">Project Store</h1>
      <CartIcon />
    </div>
  );
};
export default StoreNav;
