import getBillboard from "@/actions/get-billboard";
import ProductCard from "./components/ProductCard";
import getProducts from "@/actions/get-products";
import StoreNav from "./components/StoreNav";

export const revalidate = 0;

const StorePage = async () => {
  const billboard = await getBillboard("1078e919-9fd0-4d20-bcae-507692eeb155");
  const products = await getProducts();

  return (
    <>
      <div className="overflow-hidden">
        <div
          className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          style={{ backgroundImage: `url(${billboard?.imageUrl})` }}
        >
          <div className="absolute bg-primary/10 w-full h-full"></div>
          <div className="h-full w-full flex flex-col justify-center items-center gap-y-8">
            <div className="bg-black/40 px-5 py-4 rounded-xl font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
              <p className=" text-center text-transparent bg-gradient-to-r bg-clip-text from-indigo-100 to-pink-500">
                {billboard?.label}{" "}
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-pink-400 to-indigo-200">
                  ❤
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <StoreNav />
      <div className="container px-10 grid grid-cols-4 gap-4 mt-6">
        {products.map(
          (product: {
            id: string;
            name: string;
            price: number;
            images: [];
          }) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              images={product.images}
            />
          )
        )}
      </div>
    </>
  );
};
export default StorePage;
