import Billboard from "./components/Billboard";
import getProducts from "@/actions/get-products";
import GalleryNav from "./components/GalleryNav";
import getBillboard from "@/actions/get-billboard";
import ProjectHeader from "./components/ProjectHeader";
import ProductCardContainer from "./components/ProductCardContainer";

export const revalidate = 0;

const GalleryPage = async () => {
  const billboard = await getBillboard("1078e919-9fd0-4d20-bcae-507692eeb155");
  const products = await getProducts();

  return (
    <div className="min-h-screen">
      <Billboard billboard={billboard} />
      <GalleryNav projectCount={products.length} />
      <ProjectHeader />
      <ProductCardContainer products={products} />
    </div>
  );
};
export default GalleryPage;
