import { Product } from "@/types";
import Billboard from "./components/Billboard";
import getProducts from "@/actions/get-products";
import GalleryNav from "./components/GalleryNav";
import ProductCard from "./components/ProductCard";
import getBillboard from "@/actions/get-billboard";

export const revalidate = 0;

const GalleryPage = async () => {
  const billboard = await getBillboard("1078e919-9fd0-4d20-bcae-507692eeb155");
  const products = await getProducts();

  return (
    <>
      <Billboard billboard={billboard} />
      <GalleryNav projectCount={products.length} />
      <div className="container px-10 grid grid-cols-4 gap-4 mt-6">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            url={product.url}
            images={product.images}
          />
        ))}
      </div>
    </>
  );
};
export default GalleryPage;
