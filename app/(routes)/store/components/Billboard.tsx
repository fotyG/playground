interface Billboard {
  imageUrl: string;
  label: string;
}

interface BillboardProps {
  billboard: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ billboard }) => {
  return (
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
  );
};
export default Billboard;
