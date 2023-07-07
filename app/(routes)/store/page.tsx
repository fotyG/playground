import getBillboard from "@/actions/get-billboard";
import ProductCard from "./components/ProductCard";
import getProducts from "@/actions/get-products";
import StoreNav from "./components/StoreNav";
import Billboard from "./components/Billboard";

interface Product {
  id: string;
  name: string;
  price: number;
  images: [];
}

export const revalidate = 0;

const StorePage = async () => {
  const billboard = await getBillboard("1078e919-9fd0-4d20-bcae-507692eeb155");
  const products = await getProducts();

  return (
    <>
      <Billboard billboard={billboard} />
      <StoreNav />
      <div className="container px-10 grid grid-cols-4 gap-4 mt-6">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
    </>
  );
};
export default StorePage;
