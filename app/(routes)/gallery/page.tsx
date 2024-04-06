import Billboard from "./components/Billboard";
import getProducts from "@/actions/get-products";
import GalleryNav from "./components/GalleryNav";
import getBillboard from "@/actions/get-billboard";
import ProjectHeader from "./components/ProjectHeader";
import ProductCardContainer from "./components/ProductCardContainer";

export const revalidate = 0;

const GalleryPage = async () => {
  const products = await getProducts();
  const billboard = await getBillboard("31406b87-cf6c-4e5c-9c12-3ed6d06ff284");

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
