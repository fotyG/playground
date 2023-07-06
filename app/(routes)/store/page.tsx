import ProductCard from "./components/ProductCard";

const StorePage = () => {
  return (
    <div className="container grid grid-cols-4 gap-4 mt-6">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
export default StorePage;
